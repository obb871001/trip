import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// 行程標籤：對應 shadcn Badge 的 variant，重點色只留給「要訂位」與警告
const MAP = {
  free: { variant: "secondary" },
  opt: { variant: "secondary" },
  book: { variant: "default" },
  warn: { variant: "outline", className: "border-primary/30 bg-accent text-accent-foreground" },
};

export default function Tag({ label, kind = "opt" }) {
  const m = MAP[kind] || MAP.opt;
  return (
    <Badge
      variant={m.variant}
      className={cn("ml-2 rounded-full align-middle text-[10.5px] font-bold shadow-none", m.className)}
    >
      {label}
    </Badge>
  );
}
