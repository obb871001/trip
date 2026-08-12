import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Clock, Users } from "lucide-react";
import dayjs from "dayjs";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatNow } from "@/lib/schedule";
import { cn } from "@/lib/utils";

const MONTHS = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

// 年／月切換：選中是實心 pill，其餘淡化但一樣可以點；
// 右上角的小圓點代表那個月份有行程。
function Pill({ active, hasTrip, children, onClick }) {
  return (
    <Button
      type="button"
      data-active={active || undefined}
      onClick={onClick}
      variant={active ? "default" : "ghost"}
      className={cn(
        "relative h-auto shrink-0 rounded-full shadow-none",
        active
          ? "px-2.5 py-0.5 text-[13.5px] font-semibold"
          : "px-1 py-0.5 text-[13px] font-normal text-muted-foreground/50 hover:bg-transparent hover:text-muted-foreground"
      )}
    >
      {children}
      {hasTrip && !active && (
        <span className="absolute right-0 top-0.5 size-1.5 rounded-full bg-primary" />
      )}
    </Button>
  );
}

// 切換時把選中的年／月捲進可視範圍
function useScrollActiveIntoView(dep) {
  const ref = useRef(null);
  useEffect(() => {
    const row = ref.current;
    if (!row) return;
    const el = row.querySelector("[data-active]");
    if (!el) return;
    row.scrollTo({
      left: el.offsetLeft - row.clientWidth / 2 + el.offsetWidth / 2,
      behavior: "smooth",
    });
  }, [dep]);
  return ref;
}

export default function TripHeader({ trips, trip, viewMonth, onViewMonthChange, now }) {
  const tripDate = dayjs(trip.date);
  const viewYear = viewMonth.year();
  const monthRow = useScrollActiveIntoView(`${viewYear}-${viewMonth.month()}`);

  const tripYears = trips.map((t) => dayjs(t.date).year());

  const monthHasTrip = (year, month) =>
    trips.some((t) => {
      const d = dayjs(t.date);
      return d.year() === year && d.month() === month;
    });

  const today = now || dayjs();
  const daysLeft = tripDate.startOf("day").diff(today.startOf("day"), "day");
  const greeting =
    daysLeft > 0 ? `出發倒數 ${daysLeft} 天` : daysLeft === 0 ? "就是今天" : "已完成的行程";

  return (
    <header className="px-4 pb-3.5 pt-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-[11px] font-medium leading-[1.5] text-muted-foreground">
            {greeting}
            <span className="text-muted-foreground/40">·</span>
            <span className="inline-flex items-center gap-1 tabular-nums">
              <Clock className="size-3" />
              {formatNow(today)}
            </span>
          </p>
          <h1 className="whitespace-nowrap text-xl font-bold leading-[1.35] text-foreground">
            {trip.tab}
            <span className="ml-2 text-[13px] font-medium text-muted-foreground">
              {trip.headline}
            </span>
          </h1>
        </div>

        <Badge
          variant="secondary"
          className="shrink-0 gap-1.5 rounded-full px-3 py-2 text-[13px] font-semibold shadow-none"
        >
          <Users className="size-3.5" />
          {trip.partyLabel}
        </Badge>
      </div>

      {/* 年份與月份併成一列：左邊固定的年份切換 + 右邊可橫捲的月份 */}
      <div className="flex items-center gap-1.5">
        <div className="flex shrink-0 items-center rounded-full bg-secondary py-0.5 pl-0.5 pr-0.5">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="上一年"
            onClick={() => onViewMonthChange(viewMonth.subtract(1, "year"))}
            className="size-5 rounded-full text-muted-foreground hover:bg-background"
          >
            <ChevronLeft className="size-3.5" />
          </Button>
          <span className="relative px-0.5 text-[13px] font-bold tabular-nums text-foreground">
            {viewYear}
            {tripYears.includes(viewYear) && (
              <span className="absolute -right-0.5 top-0 size-1 rounded-full bg-primary" />
            )}
          </span>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="下一年"
            onClick={() => onViewMonthChange(viewMonth.add(1, "year"))}
            className="size-5 rounded-full text-muted-foreground hover:bg-background"
          >
            <ChevronRight className="size-3.5" />
          </Button>
        </div>

        <div className="tm-scroll min-w-0 flex-1" ref={monthRow}>
          <div className="flex w-max items-center gap-2.5 px-0.5">
            {MONTHS.map((m, i) => (
              <Pill
                key={m}
                active={i === viewMonth.month()}
                hasTrip={monthHasTrip(viewYear, i)}
                onClick={() => onViewMonthChange(viewMonth.month(i))}
              >
                {m}
              </Pill>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
