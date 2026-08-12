import { Car, ChevronRight, Footprints, Ship } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";
import Tag from "./Tag";

const LEG_ICONS = { car: Car, walk: Footprints, ferry: Ship };

// 左側時間軸：細線 + 編號節點
function Rail({ node, isFirst, isLast, hasLeg, isNow }) {
  return (
    <div className="relative w-[42px] shrink-0">
      {!isFirst && <span className="absolute left-[21px] top-0 h-[26px] w-px -translate-x-1/2 bg-border" />}
      {(hasLeg || !isLast) && (
        <span className="absolute bottom-0 left-[21px] top-[26px] w-px -translate-x-1/2 bg-border" />
      )}
      {isNow && (
        <span className="absolute left-[21px] top-3 size-6 -translate-x-1/2 animate-ping rounded-full bg-primary/40 motion-reduce:hidden" />
      )}
      <span
        className={cn(
          "absolute left-[21px] top-3 flex size-6 -translate-x-1/2 items-center justify-center rounded-full text-[11px] font-bold ring-4 ring-background",
          isNow ? "bg-primary text-primary-foreground" : "bg-foreground text-background"
        )}
      >
        {node}
      </span>
    </div>
  );
}

function LegRow({ label, icon = "car" }) {
  const Icon = LEG_ICONS[icon] || Car;
  return (
    <div className="flex items-stretch">
      <div className="relative w-[42px] shrink-0">
        <span className="absolute bottom-0 left-[21px] top-0 w-px -translate-x-1/2 bg-border" />
        <span className="absolute left-[21px] top-1/2 flex size-[22px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-background text-muted-foreground">
          <Icon className="size-3" />
        </span>
      </div>
      <div className="flex flex-1 items-center py-2">
        <Badge variant="secondary" className="rounded-full text-[11px] font-semibold text-muted-foreground shadow-none">
          {label}
        </Badge>
      </div>
    </div>
  );
}

// 時間軸上的卡片只放摘要，細節都在詳細頁（點卡片展開）
export default function StopCard({ stop, node, isFirst, isLast, onOpen, nowStatus, live, anchorId }) {
  const { time, title, tags, meta, note, options, photo, legAfter, legIcon } = stop;

  const lead = meta?.[0]?.[1];
  const optionNames = options?.map((o) => o.name).join("・");
  const altCount = stop.alternatives?.length || 0;
  const isNow = nowStatus === "now";
  const isNext = nowStatus === "next";

  return (
    <>
      <div className="flex items-stretch" id={anchorId} style={{ scrollMarginTop: "84px" }}>
        <Rail node={node} isFirst={isFirst} isLast={isLast} hasLeg={!!legAfter} isNow={isNow} />

        <div className={`min-w-0 flex-1 ${legAfter ? "" : "pb-3"}`}>
          <Reveal>
            <button
              type="button"
              onClick={onOpen}
              aria-label={`查看 ${title} 的詳細資訊`}
              aria-current={isNow ? "time" : undefined}
              className={cn(
                "w-full overflow-hidden rounded-xl border text-left transition-colors",
                isNow
                  ? "animate-now-glow border-primary/50 bg-accent motion-reduce:animate-none motion-reduce:ring-2 motion-reduce:ring-primary/60"
                  : isNext
                    ? "border-primary/30 bg-secondary hover:bg-secondary/70"
                    : "bg-secondary hover:bg-secondary/70"
              )}
            >
                {photo && (
                  <div className="relative">
                    <img src={photo} alt="" className="h-[88px] w-full object-cover" loading="lazy" />
                    {stop.photoGeneric && (
                      <span className="absolute bottom-1.5 left-2 rounded bg-black/45 px-1.5 py-px text-[9.5px] font-bold text-white/90">
                        示意圖
                      </span>
                    )}
                  </div>
                )}

                <div className="p-3">
                  <div className="flex items-start gap-2">
                    <div className="flex flex-1 flex-wrap items-center gap-2">
                      <Badge
                        variant="outline"
                        className={cn(
                          "shrink-0 rounded-full bg-background text-[10.5px] font-bold shadow-none",
                          isNow && "border-primary/50 text-primary"
                        )}
                      >
                        {time}
                      </Badge>
                      {(isNow || isNext) && (
                        <span
                          className={cn(
                            "inline-flex shrink-0 items-center gap-1 rounded-full px-1.5 py-px text-[10px] font-bold",
                            isNow
                              ? "bg-primary text-primary-foreground"
                              : "bg-background text-muted-foreground"
                          )}
                        >
                          {isNow && (
                            <span className="size-1.5 animate-now-dot rounded-full bg-primary-foreground motion-reduce:animate-none" />
                          )}
                          {isNow ? (live ? "現在" : "現在時段") : live ? "接下來" : "下個時段"}
                        </span>
                      )}
                      <h3 className="text-[15px] font-bold leading-[1.3] text-foreground">
                        {title}
                        {tags?.map((t, i) => <Tag key={i} label={t[0]} kind={t[1]} />)}
                      </h3>
                    </div>
                    <span className="mt-0.5 flex shrink-0 items-center gap-1">
                      {altCount > 0 && (
                        <span className="text-[10px] font-medium text-muted-foreground/60">
                          備案 {altCount}
                        </span>
                      )}
                      <ChevronRight className="size-4 text-muted-foreground" />
                    </span>
                  </div>

                  {lead && (
                    <p className="mt-1.5 line-clamp-2 text-[12px] leading-[1.6] text-muted-foreground">
                      {lead}
                    </p>
                  )}

                  {optionNames && (
                    <p className="mt-1.5 line-clamp-1 text-[12px] font-semibold text-foreground/80">
                      {optionNames}
                    </p>
                  )}

                  {note && (
                    <div className={cn("mt-2 rounded-lg px-2.5 py-1.5", isNow ? "bg-background/70" : "bg-accent")}>
                      <p className="line-clamp-2 text-[11.5px] leading-[1.55] text-accent-foreground">
                        {note}
                      </p>
                    </div>
                  )}
                </div>
            </button>
          </Reveal>
        </div>
      </div>

      {legAfter && <LegRow label={legAfter} icon={legIcon} />}
    </>
  );
}
