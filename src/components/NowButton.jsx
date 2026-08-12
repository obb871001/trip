import { Crosshair } from "lucide-react";

import { Button } from "@/components/ui/button";

const LABEL = { now: "現在", next: "接下來", done: "已結束" };

// 浮在畫面下緣的「跳到現在」按鈕：只有目前那張卡不在畫面上時才出現
export default function NowButton({ status, title, live, visible, onClick }) {
  if (!visible) return null;
  const label = live ? LABEL[status] || "現在" : "現在時間";
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
      <div className="pointer-events-auto w-full max-w-app">
        <Button
          type="button"
          onClick={onClick}
          className="mx-auto flex h-10 max-w-[86%] gap-1.5 rounded-full px-4 text-[12.5px] shadow-lg shadow-primary/25"
        >
          <Crosshair className="size-3.5" />
          <span className="font-bold">{label}</span>
          <span className="truncate opacity-85">{title}</span>
        </Button>
      </div>
    </div>
  );
}
