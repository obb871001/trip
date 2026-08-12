import { ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const WEEKDAY_ZH = ["日", "一", "二", "三", "四", "五", "六"];

// 月曆用 shadcn 的 Calendar（react-day-picker）。
// 上下月用自己的按鈕控制（day-picker 內建的導覽會壓到星期列，所以隱藏）。
// 任何月份都能翻，有行程的日子才可以點，點了就切換下方的行程。
export default function TripCalendar({ trips, trip, viewMonth, onViewMonthChange, onSelectTrip }) {
  const eventsThisMonth = trips
    .map((t) => ({ t, d: dayjs(t.date) }))
    .filter(({ d }) => d.year() === viewMonth.year() && d.month() === viewMonth.month());

  const isEventDay = (day) => eventsThisMonth.some(({ d }) => d.isSame(dayjs(day), "day"));

  const handleDayClick = (day) => {
    const hit = eventsThisMonth.find(({ d }) => d.isSame(dayjs(day), "day"));
    if (hit) onSelectTrip(hit.t.id);
  };

  // 選中的那一天只有在「正在看的月份」剛好是行程的月份時才標
  const tripDate = dayjs(trip.date);
  const selected =
    tripDate.year() === viewMonth.year() && tripDate.month() === viewMonth.month()
      ? tripDate.toDate()
      : undefined;

  return (
    <section>
      <div className="mb-1 flex items-center justify-between gap-2">
        <div className="flex items-center gap-0.5">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-6 rounded-full text-muted-foreground"
            aria-label="上個月"
            onClick={() => onViewMonthChange(viewMonth.subtract(1, "month"))}
          >
            <ChevronLeft className="size-3.5" />
          </Button>
          <h2 className="min-w-[80px] text-center text-[13.5px] font-bold leading-tight text-foreground">
            {viewMonth.year()} 年 {viewMonth.month() + 1} 月
          </h2>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-6 rounded-full text-muted-foreground"
            aria-label="下個月"
            onClick={() => onViewMonthChange(viewMonth.add(1, "month"))}
          >
            <ChevronRight className="size-3.5" />
          </Button>
        </div>

        <Badge
          variant="secondary"
          className={cn(
            "shrink-0 rounded-full px-2 py-0 text-[10.5px] shadow-none",
            eventsThisMonth.length > 0 && "bg-accent text-accent-foreground hover:bg-accent"
          )}
        >
          {eventsThisMonth.length > 0 ? `${eventsThisMonth.length} 個行程` : "本月無行程"}
        </Badge>
      </div>

      <Separator />

      <Calendar
        mode="single"
        month={viewMonth.toDate()}
        onMonthChange={(d) => onViewMonthChange(dayjs(d).startOf("month"))}
        selected={selected}
        onDayClick={handleDayClick}
        disabled={(day) => !isEventDay(day)}
        hideNavigation
        showOutsideDays={false}
        formatters={{
          formatWeekdayName: (date) => WEEKDAY_ZH[date.getDay()],
        }}
        className={cn(
          "w-full p-0 py-1 [--cell-size:1.75rem]",
          // day-picker 預設用 aspect-square，格子會被寬度撐得很高；改成固定列高
          "[&_button]:!aspect-auto [&_button]:h-7 [&_button]:min-w-0 [&_button]:text-[12px]",
          // 沒有行程的日子仍要看得清楚，不要被 disabled 的半透明吃掉
          "[&_button:disabled]:pointer-events-none [&_button:disabled]:text-foreground/65 [&_button:disabled]:opacity-100"
        )}
        classNames={{
          month_caption: "hidden",
          nav: "hidden",
          months: "w-full",
          month: "flex w-full flex-col gap-0",
          weekdays: "flex w-full",
          weekday: "flex h-6 flex-1 select-none items-center justify-center text-[10.5px] font-bold text-muted-foreground",
          week: "flex w-full",
          day: "group/day relative h-7 w-full select-none p-0 text-center",
          today: "rounded-md ring-1 ring-inset ring-primary/35",
        }}
      />

      <Separator />
    </section>
  );
}
