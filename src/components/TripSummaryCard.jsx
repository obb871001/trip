import { MapPin, Clock } from "lucide-react";
import dayjs from "dayjs";

import { Card, CardContent } from "@/components/ui/card";
import Reveal from "./Reveal";

const WEEKDAY = ["日", "一", "二", "三", "四", "五", "六"];

// 行程摘要卡：左側日期方塊，右側時間、標題、地點
export default function TripSummaryCard({ trip }) {
  const d = dayjs(trip.date);
  const stops = trip.stops.filter((s) => !s.optional);
  const first = trip.stops[0];
  const last = stops[stops.length - 1] || first;
  const span = `${first.time.split("–")[0]} - ${last.time.split("–").slice(-1)[0]}`;

  return (
    <Reveal>
      <Card className="rounded-xl bg-secondary shadow-none">
        <CardContent className="flex items-stretch gap-3 p-3.5">
          <div className="flex w-[68px] shrink-0 flex-col items-center justify-center self-stretch rounded-lg bg-background leading-none">
            <span className="text-[10px] font-bold text-muted-foreground">
              {d.month() + 1} 月
            </span>
            <span className="mt-0.5 text-[26px] font-extrabold text-primary">{d.format("D")}</span>
            <span className="mt-0.5 text-[10px] font-semibold text-muted-foreground">
              週{WEEKDAY[d.day()]}
            </span>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3" />
                {span}
              </span>
              <span className="size-[3px] rounded-full bg-muted-foreground/50" />
              <span>{stops.length} 站</span>
              <span className="size-[3px] rounded-full bg-muted-foreground/50" />
              <span>{trip.partyLabel}</span>
            </div>

            <h3 className="mt-1.5 text-[15px] font-bold leading-[1.4] text-foreground">
              {trip.title}
              {trip.titleAccent}
            </h3>

            <div className="mt-1.5 flex items-center gap-1 text-muted-foreground">
              <MapPin className="size-3" />
              <span className="text-[11px]">{trip.place}</span>
            </div>

            <p className="mt-1.5 text-[11px] leading-[1.6] text-muted-foreground">{trip.subtitle}</p>
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );
}
