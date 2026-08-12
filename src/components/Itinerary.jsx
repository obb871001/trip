import { useState } from "react";
import dayjs from "dayjs";
import { ClipboardList } from "lucide-react";

import { TRIPS, DEFAULT_TRIP_ID } from "@/data/itinerary";
import { Card, CardContent } from "@/components/ui/card";
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

  let seq = 0;

  return (
    <div className="mx-auto min-h-[100dvh] max-w-app bg-background">
      <TripHeader
        trips={TRIPS}
        trip={trip}
        viewMonth={viewMonth}
        onViewMonthChange={setViewMonth}
        onSelectTrip={selectTrip}
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
              />
            );
          })}
        </div>
      </main>

      <StopDetailSheet
        stop={openStop}
        open={Boolean(openStop)}
        onOpenChange={(v) => !v && setOpenStopId(null)}
      />
    </div>
  );
}
