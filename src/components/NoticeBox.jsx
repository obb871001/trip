import { TriangleAlert, CloudRain, Sun } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

const KINDS = {
  warn: { Icon: TriangleAlert, accent: true },
  rain: { Icon: CloudRain, accent: false },
  heat: { Icon: Sun, accent: false },
};

// plain：放在收合區塊裡時不要包 Reveal（whileInView 在高度 0 的容器裡不會觸發）
export default function NoticeBox({ kind = "warn", title, rows, plain = false }) {
  const { Icon, accent } = KINDS[kind] || KINDS.warn;

  const card = (
    <Card
      className={cn(
        "mb-2.5 rounded-xl shadow-none",
        accent ? "border-primary/25 bg-accent" : "border-border bg-background"
      )}
    >
      <CardHeader className="p-3 pb-1.5">
        <CardTitle
          className={cn(
            "flex items-center gap-1.5 text-[12.5px] font-extrabold",
            accent ? "text-primary" : "text-foreground"
          )}
        >
          <Icon className="size-3.5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0">
        {rows.map(([b, t], i) => (
          <p key={i} className="my-[4px] text-[12px] leading-[1.65] text-muted-foreground">
            {b && <b className="font-bold text-foreground">{b}</b>}
            {b ? "　" : ""}
            {t}
          </p>
        ))}
      </CardContent>
    </Card>
  );

  return plain ? card : <Reveal>{card}</Reveal>;
}
