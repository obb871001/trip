import { Car, ChevronRight, Footprints, Ship } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import Reveal from "./Reveal";
import Tag from "./Tag";

const LEG_ICONS = { car: Car, walk: Footprints, ferry: Ship };

// 左側時間軸：細線 + 編號節點
function Rail({ node, isFirst, isLast, hasLeg }) {
  return (
    <div className="relative w-[42px] shrink-0">
      {!isFirst && <span className="absolute left-[21px] top-0 h-[26px] w-px -translate-x-1/2 bg-border" />}
      {(hasLeg || !isLast) && (
        <span className="absolute bottom-0 left-[21px] top-[26px] w-px -translate-x-1/2 bg-border" />
      )}
      <span className="absolute left-[21px] top-3 flex size-6 -translate-x-1/2 items-center justify-center rounded-full bg-foreground text-[11px] font-bold text-background ring-4 ring-background">
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
export default function StopCard({ stop, node, isFirst, isLast, onOpen }) {
  const { time, title, tags, meta, note, options, photo, legAfter, legIcon } = stop;

  const lead = meta?.[0]?.[1];
  const optionNames = options?.map((o) => o.name).join("・");
  const altCount = stop.alternatives?.length || 0;

  return (
    <>
      <div className="flex items-stretch">
        <Rail node={node} isFirst={isFirst} isLast={isLast} hasLeg={!!legAfter} />

        <div className={`min-w-0 flex-1 ${legAfter ? "" : "pb-3"}`}>
          <Reveal>
            <button
              type="button"
              onClick={onOpen}
              aria-label={`查看 ${title} 的詳細資訊`}
              className="w-full overflow-hidden rounded-xl border bg-secondary text-left transition-colors hover:bg-secondary/70"
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
                        className="shrink-0 rounded-full bg-background text-[10.5px] font-bold shadow-none"
                      >
                        {time}
                      </Badge>
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
                    <div className="mt-2 rounded-lg bg-accent px-2.5 py-1.5">
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
