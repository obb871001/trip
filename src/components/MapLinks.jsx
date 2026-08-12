import { MapPin, ExternalLink, Phone, CalendarCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STYLES = {
  gmap: { accent: true, Icon: MapPin },
  amap: { accent: false, Icon: MapPin },
  blog: { accent: false, Icon: ExternalLink },
  tel: { accent: true, Icon: Phone },
  booking: { accent: true, Icon: CalendarCheck },
};

export default function MapLinks({ links = [] }) {
  if (!links.length) return null;
  return (
    <div className="mt-2.5 flex flex-wrap gap-2">
      {links.map(([type, label, href], i) => {
        const { accent, Icon } = STYLES[type] || STYLES.blog;
        const external = type !== "tel";
        return (
          <Button
            key={i}
            asChild
            variant="outline"
            size="sm"
            className={cn(
              "h-auto rounded-full bg-background px-2.5 py-1 text-[11.5px] font-semibold shadow-none",
              accent ? "text-primary hover:text-primary" : "text-muted-foreground hover:text-foreground"
            )}
          >
            <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
              <Icon className="size-3" />
              {label}
            </a>
          </Button>
        );
      })}
    </div>
  );
}
