import {
  CalendarCheck,
  ExternalLink,
  ImageIcon,
  MapPin,
  MessageSquareQuote,
  Phone,
  Shuffle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Tag from "./Tag";
import CopyAddress from "./CopyAddress";
import MapLinks from "./MapLinks";
import CollapseSection from "./CollapseSection";

// 從 Google 地圖連結還原出可以直接嵌入的地圖 query
function queryOf(entity) {
  const gmap = (entity.links || []).find(([type]) => type === "gmap");
  if (!gmap) return null;
  try {
    return new URL(gmap[2]).searchParams.get("query");
  } catch {
    return null;
  }
}

// 一個站可能有多個地點（例如午餐二選一），每個都要有自己的地圖
function placesOf(stop) {
  const list = (stop.options || []).length
    ? stop.options.map((o) => ({ name: o.name, query: queryOf(o), address: o.address }))
    : [{ name: null, query: queryOf(stop), address: stop.address }];
  return list.filter((p) => p.query || p.address);
}

function MapBlock({ place, showName }) {
  return (
    <div>
      {showName && place.name && (
        <p className="mb-1.5 text-[12.5px] font-bold text-foreground">{place.name}</p>
      )}
      {place.address && <CopyAddress address={place.address} />}
      {place.query && (
        <>
          <div className="mt-2 overflow-hidden rounded-xl border">
            <iframe
              title={`${place.name || "地點"} 地圖`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(place.query)}&hl=zh-TW&z=16&output=embed`}
              className="h-52 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="mt-1 h-8 w-full rounded-full text-[11.5px] text-muted-foreground"
          >
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.query)}`}
              target="_blank"
              rel="noreferrer"
            >
              地圖沒顯示？用 Google 地圖開啟
            </a>
          </Button>
        </>
      )}
    </div>
  );
}

function Hero({ stop }) {
  if (stop.photo) {
    const [caption, author, licence, sourceUrl] = stop.photoCredit || [];
    return (
      <figure className="relative m-0">
        <img src={stop.photo} alt={caption || stop.title} className="h-44 w-full object-cover" />
        {/* CC 授權要求標示作者與授權條款 */}
        {author && (
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-3 pb-1.5 pt-6 text-[10px] leading-snug text-white/85">
            {stop.photoGeneric && (
              <span className="mr-1 rounded-sm bg-white/25 px-1 py-px font-bold">示意圖</span>
            )}
            {caption} ·{" "}
            <a href={sourceUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">
              {author} / {licence}
            </a>
          </figcaption>
        )}
      </figure>
    );
  }
  // 還沒放照片時的替代版面：不留白、也不假裝有圖
  return (
    <div className="flex h-36 w-full flex-col items-center justify-center gap-1.5 bg-secondary text-muted-foreground">
      <ImageIcon className="size-6" />
      <span className="text-[11px]">尚未加入照片</span>
    </div>
  );
}

function Voices({ voices }) {
  if (!voices?.length) {
    return (
      <p className="py-6 text-center text-[12px] text-muted-foreground">
        這一站還沒有整理在地評價。
      </p>
    );
  }
  return (
    <div className="space-y-2.5">
      {voices.map(([text, source], i) => (
        <Card key={i} className="rounded-lg bg-secondary shadow-none">
          <CardContent className="p-3">
            <MessageSquareQuote className="mb-1.5 size-3.5 text-primary" />
            <p className="text-[12.5px] leading-[1.7] text-foreground">{text}</p>
            <p className="mt-1.5 text-[11px] text-muted-foreground">— {source}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function StopDetailSheet({ stop, open, onOpenChange }) {
  if (!stop) return null;

  const places = placesOf(stop);
  // 有些站（例如「午餐 · 二選一」）的連結掛在選項上，快速動作要能一起抓到
  const allLinks = [stop, ...(stop.options || [])].flatMap((x) => x.links || []);
  const pick = (type) => allLinks.find(([t]) => t === type);
  const tel = pick("tel");
  const gmap = pick("gmap");
  const blog = pick("blog");
  const booking = pick("booking");
  const needsBooking = (stop.tags || []).some(([, kind]) => kind === "book");

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="mx-auto h-[92dvh] max-w-app overflow-y-auto rounded-t-3xl p-0"
      >
        <Hero stop={stop} />

        <SheetHeader className="space-y-2 px-4 pb-3 pt-4 text-left">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="rounded-full bg-background text-[10.5px] font-bold">
              {stop.time}
            </Badge>
            {stop.tags?.map((t, i) => <Tag key={i} label={t[0]} kind={t[1]} />)}
          </div>
          <SheetTitle className="text-[19px] font-bold leading-tight">{stop.title}</SheetTitle>
          {stop.note && (
            <SheetDescription className="rounded-lg border border-primary/20 bg-accent px-3 py-2 text-left text-[12px] leading-[1.65] text-accent-foreground">
              {stop.note}
            </SheetDescription>
          )}
        </SheetHeader>

        {/* 快速動作 */}
        <div className="flex gap-2 px-4">
          {gmap && (
            <Button asChild size="sm" className="h-9 flex-1 rounded-full text-[12.5px]">
              <a href={gmap[2]} target="_blank" rel="noreferrer">
                <MapPin className="size-3.5" />
                導航
              </a>
            </Button>
          )}
          {tel && (
            <Button asChild size="sm" variant="outline" className="h-9 flex-1 rounded-full text-[12.5px]">
              <a href={tel[2]}>
                <Phone className="size-3.5" />
                打電話
              </a>
            </Button>
          )}
          {booking ? (
            <Button asChild size="sm" className="h-9 flex-1 rounded-full text-[12.5px]">
              <a href={booking[2]} target="_blank" rel="noreferrer">
                <CalendarCheck className="size-3.5" />
                線上訂位
              </a>
            </Button>
          ) : needsBooking && tel ? (
            <Button asChild size="sm" className="h-9 flex-1 rounded-full text-[12.5px]">
              <a href={tel[2]}>
                <CalendarCheck className="size-3.5" />
                打電話訂位
              </a>
            </Button>
          ) : (
            blog && (
              <Button asChild size="sm" variant="outline" className="h-9 flex-1 rounded-full text-[12.5px]">
                <a href={blog[2]} target="_blank" rel="noreferrer">
                  <ExternalLink className="size-3.5" />
                  {blog[1]}
                </a>
              </Button>
            )
          )}
        </div>

        <div className="px-4 py-4">
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3 rounded-full">
              <TabsTrigger value="overview" className="rounded-full text-[12.5px]">
                資訊
              </TabsTrigger>
              <TabsTrigger value="map" className="rounded-full text-[12.5px]">
                地圖
              </TabsTrigger>
              <TabsTrigger value="voices" className="rounded-full text-[12.5px]">
                在地評價
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-3.5">
              {places.filter((p) => p.address).length > 0 && (
                <div className="mb-3 space-y-2">
                  {places
                    .filter((p) => p.address)
                    .map((p, i) => (
                      <CopyAddress key={i} address={p.address} label={p.name || "地址"} />
                    ))}
                </div>
              )}

              {stop.meta?.map(([k, v], i) => (
                <div key={i}>
                  <div className="flex gap-3 py-2">
                    <span className="w-11 shrink-0 text-[12.5px] font-bold text-foreground">{k}</span>
                    <span className="text-[12.5px] leading-[1.7] text-muted-foreground">{v}</span>
                  </div>
                  {i < stop.meta.length - 1 && <Separator />}
                </div>
              ))}

              {stop.options?.length > 0 && (
                <div className="mt-4 space-y-2.5">
                  <h4 className="text-[12.5px] font-extrabold text-foreground">選項</h4>
                  {stop.options.map((opt, i) => (
                    <Card key={i} className="rounded-lg shadow-none">
                      <CardContent className="p-3">
                        <p className="text-[13.5px] font-bold text-foreground">
                          {opt.name}
                          {opt.badge && <Tag label={opt.badge[0]} kind={opt.badge[1]} />}
                        </p>
                        <p className="mt-1 text-[12px] leading-[1.7] text-muted-foreground">
                          {opt.desc}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {/* 備案是「主要選擇失效才會用到」的退路，所以放最後、預設收起 */}
              {stop.alternatives?.length > 0 && (
                <CollapseSection
                  className="mt-4 rounded-lg border border-dashed px-3 py-1.5"
                  title="備案"
                  hint={`${stop.alternatives.length} 個替代選擇`}
                  icon={Shuffle}
                  titleClassName="text-[12.5px] font-bold text-muted-foreground"
                >
                  <ul className="divide-y pb-1">
                    {stop.alternatives.map((alt, i) => (
                      <li key={i} className="py-2.5 first:pt-0 last:pb-1">
                        <p className="text-[12.5px] font-bold text-foreground">{alt.name}</p>
                        <p className="mt-0.5 text-[11.5px] leading-[1.65] text-muted-foreground">
                          {alt.desc}
                        </p>
                        {alt.address && (
                          <p className="mt-1 text-[11px] leading-snug text-muted-foreground/80">
                            {alt.address}
                          </p>
                        )}
                        <MapLinks links={alt.links} />
                      </li>
                    ))}
                  </ul>
                </CollapseSection>
              )}
            </TabsContent>

            <TabsContent value="map" className="mt-3.5">
              {places.length ? (
                <div className="space-y-4">
                  {places.map((place, i) => (
                    <MapBlock key={i} place={place} showName={places.length > 1} />
                  ))}
                </div>
              ) : (
                <p className="py-6 text-center text-[12px] text-muted-foreground">
                  這一站沒有對應的地圖位置。
                </p>
              )}
            </TabsContent>

            <TabsContent value="voices" className="mt-3.5">
              <Voices voices={stop.voices} />
              {gmap && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="mt-3 h-9 w-full rounded-full text-[12px]"
                >
                  <a href={gmap[2]} target="_blank" rel="noreferrer">
                    <ExternalLink className="size-3.5" />
                    到 Google 地圖看即時評分
                  </a>
                </Button>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <div className="px-4 pb-6">
          <SheetClose asChild>
            <Button variant="secondary" className="h-10 w-full rounded-full text-[13px]">
              關閉
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
