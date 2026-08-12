import { useEffect, useState } from "react";
import { Check, Copy, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";

// 地址列：點右邊的按鈕直接複製，給導航 app 或傳給同行的人
export default function CopyAddress({ address, label = "地址" }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
    } catch {
      // 沒有 clipboard 權限（例如非 https）時退回選取
      const el = document.createElement("textarea");
      el.value = address;
      document.body.appendChild(el);
      el.select();
      try {
        document.execCommand("copy");
        setCopied(true);
      } finally {
        document.body.removeChild(el);
      }
    }
  };

  return (
    <div className="flex items-center gap-2 rounded-lg bg-secondary px-2.5 py-2">
      <MapPin className="size-3.5 shrink-0 text-muted-foreground" />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase text-muted-foreground">{label}</p>
        <p className="text-[12.5px] leading-snug text-foreground">{address}</p>
      </div>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={copy}
        className="h-7 shrink-0 gap-1 rounded-full px-2.5 text-[11.5px] font-semibold"
      >
        {copied ? <Check className="size-3 text-primary" /> : <Copy className="size-3" />}
        {copied ? "已複製" : "複製"}
      </Button>
    </div>
  );
}
