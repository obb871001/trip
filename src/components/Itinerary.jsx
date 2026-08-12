import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import { ClipboardList } from "lucide-react";

import { TRIPS, DEFAULT_TRIP_ID } from "@/data/itinerary";
import { useNow, resolveActiveStop } from "@/lib/schedule";
import { Card, CardContent } from "@/components/ui/card";
import NowButton from "./NowButton";
import TripHeader from "./TripHeader";
import TripCalendar from "./TripCalendar";
import TripSummaryCard from "./TripSummaryCard";
import NoticeBox from "./NoticeBox";
import CollapseSection from "./CollapseSection";
import StopCard from "./StopCard";
import StopDetailSheet from "./StopDetailSheet";

function SectionTitle({ children }) {
  return <h2 className="mb-2.5 mt-6 text-[13px] font-extrabold text-foreground">{children}</h2>;
}

export default function Itinerary() {
  const [tripId, setTripId] = useState(DEFAULT_TRIP_ID);
  const trip = TRIPS.find((t) => t.id === tripId) || TRIPS[0];

  // 月曆看的月份跟「目前選中的行程」分開：
  // 可以自由翻到沒有行程的月份瀏覽，下方內容維持在選中的那一趟。
  const [viewMonth, setViewMonth] = useState(() => dayjs(trip.date).startOf("month"));

  // 點行程卡展開的詳細頁
  const [openStopId, setOpenStopId] = useState(null);
  const openStop = trip.stops.find((s) => s.id === openStopId) || null;

  const selectTrip = (id) => {
    const next = TRIPS.find((t) => t.id === id);
    if (!next) return;
    setTripId(id);
    setViewMonth(dayjs(next.date).startOf("month"));
  };

  // ── 現在走到哪一站 ────────────────────────────────
  const now = useNow();
  const minutesOfDay = now.hour() * 60 + now.minute();
  const active = useMemo(
    () => resolveActiveStop(trip.stops, minutesOfDay),
    [trip.stops, minutesOfDay]
  );
  const activeStop = active && trip.stops.find((s) => s.id === active.id);
  const anchorOf = (id) => `stop-${trip.id}-${id}`;

  const scrollToNow = useCallback(() => {
    if (!active) return;
    document.getElementById(anchorOf(active.id))?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active?.id, trip.id]);

  // 行程當天一進來就自動捲到當下那一站
  const autoScrolled = useRef(null);
  const isTripDay = now.isSame(dayjs(trip.date), "day");
  useEffect(() => {
    if (!isTripDay || !active || autoScrolled.current === trip.id) return;
    autoScrolled.current = trip.id;
    const t = setTimeout(scrollToNow, 500);
    return () => clearTimeout(t);
  }, [isTripDay, active, trip.id, scrollToNow]);

  // 那張卡不在畫面上時才顯示浮動按鈕
  const [offScreen, setOffScreen] = useState(false);
  useEffect(() => {
    if (!active) return undefined;
    const el = document.getElementById(anchorOf(active.id));
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(([e]) => setOffScreen(!e.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active?.id, trip.id]);

  let seq = 0;

  return (
    <div className="mx-auto min-h-[100dvh] max-w-app bg-background">
      <TripHeader
        trips={TRIPS}
        trip={trip}
        viewMonth={viewMonth}
        onViewMonthChange={setViewMonth}
        now={now}
      />

      <main className="px-4 pb-14">
        <Card className="rounded-xl shadow-none">
          <CardContent className="p-3">
            <TripCalendar
              trips={TRIPS}
              trip={trip}
              viewMonth={viewMonth}
              onViewMonthChange={setViewMonth}
              onSelectTrip={selectTrip}
            />
          </CardContent>
        </Card>

        <div className="mt-3.5">
          <TripSummaryCard trip={trip} />
        </div>

        {trip.notices?.length > 0 && (
          <CollapseSection
            key={`${trip.id}-notices`}
            className="mt-5 rounded-xl border bg-secondary/40 px-3 py-1.5"
            title="出發前"
            hint={`${trip.notices.length} 項提醒`}
            icon={ClipboardList}
          >
            <div className="pb-1 [&>*:last-child]:mb-0">
              {trip.notices.map((n, i) => (
                <NoticeBox
                  key={`${trip.id}-notice-${i}`}
                  kind={n.kind}
                  title={n.title}
                  rows={n.rows}
                  plain
                />
              ))}
            </div>
          </CollapseSection>
        )}

        <SectionTitle>當天行程</SectionTitle>

        <div>
          {trip.stops.map((stop, i) => {
            const optional = stop.optional === true || stop.id === "optional";
            if (!optional) seq += 1;
            return (
              <StopCard
                key={`${trip.id}-${stop.id}`}
                stop={stop}
                node={optional ? "★" : seq}
                isFirst={i === 0}
                isLast={i === trip.stops.length - 1}
                onOpen={() => setOpenStopId(stop.id)}
                anchorId={anchorOf(stop.id)}
                nowStatus={active?.id === stop.id ? active.status : null}
                live={isTripDay}
              />
            );
          })}
        </div>
      </main>

      <NowButton
        status={active?.status}
        title={activeStop?.title}
        live={isTripDay}
        visible={Boolean(active && activeStop) && offScreen && !openStop}
        onClick={scrollToNow}
      />

      <StopDetailSheet
        stop={openStop}
        open={Boolean(openStop)}
        onOpenChange={(v) => !v && setOpenStopId(null)}
      />
    </div>
  );
}
