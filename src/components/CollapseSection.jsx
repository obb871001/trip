import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

// 可展開／收合的區塊。預設收起，只留一行標題，避免次要內容佔掉版面。
export default function CollapseSection({
  title,
  hint,
  icon: Icon,
  defaultOpen = false,
  titleClassName,
  className,
  children,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-1.5 py-1 text-left"
      >
        {Icon && <Icon className="size-3.5 shrink-0 text-muted-foreground" />}
        <span className={cn("text-[13px] font-extrabold text-foreground", titleClassName)}>
          {title}
        </span>
        {hint && <span className="text-[11px] font-medium text-muted-foreground">{hint}</span>}
        <ChevronDown
          className={cn(
            "ml-auto size-4 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {/* grid-rows 0fr → 1fr：不用量高度就能做展開動畫 */}
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="pt-2">{children}</div>
        </div>
      </div>
    </div>
  );
}
