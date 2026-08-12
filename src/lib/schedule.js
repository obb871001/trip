import { useEffect, useState } from "react";
import dayjs from "dayjs";

// 每 30 秒更新一次「現在」，讓時鐘與進行中的那一站會自己走
export function useNow(intervalMs = 30_000) {
  const [now, setNow] = useState(() => dayjs());
  useEffect(() => {
    const t = setInterval(() => setNow(dayjs()), intervalMs);
    return () => clearInterval(t);
  }, [intervalMs]);
  return now;
}

const HHMM = /(\d{1,2}):(\d{2})/g;

// 把 stop.time 解析成分鐘數。支援 "13:15"、"13:15–15:30"、"17:00-18:30"。
// 「備案」「口袋」這種沒有時間的站回傳 null。
export function parseStopWindow(time) {
  if (!time) return null;
  const hits = [...String(time).matchAll(HHMM)];
  if (!hits.length) return null;
  const toMin = (m) => Number(m[1]) * 60 + Number(m[2]);
  const start = toMin(hits[0]);
  const end = hits.length > 1 ? toMin(hits[1]) : null;
  return { start, end };
}

/**
 * 依「現在幾點幾分」判斷行程走到哪一站。
 * 回傳 { id, status }：
 *   now    — 正在這一站的時間區間內
 *   next   — 還沒開始／在兩站的空檔，這是下一站
 *   done   — 全部跑完了，指最後一站
 * 沒有任何可解析時間的站則回傳 null。
 */
export function resolveActiveStop(stops = [], minutesOfDay) {
  const timed = stops
    .map((s, i) => ({ id: s.id, i, win: parseStopWindow(s.time) }))
    .filter((x) => x.win);
  if (!timed.length) return null;

  // 沒寫結束時間的站，用下一站的開始時間補；最後一站補 90 分鐘
  const spans = timed.map((x, idx) => ({
    id: x.id,
    start: x.win.start,
    end: x.win.end ?? (timed[idx + 1] ? timed[idx + 1].win.start : x.win.start + 90),
  }));

  if (minutesOfDay < spans[0].start) return { id: spans[0].id, status: "next" };

  for (let i = 0; i < spans.length; i += 1) {
    const s = spans[i];
    if (minutesOfDay >= s.start && minutesOfDay < s.end) return { id: s.id, status: "now" };
    const nextSpan = spans[i + 1];
    if (nextSpan && minutesOfDay >= s.end && minutesOfDay < nextSpan.start) {
      return { id: nextSpan.id, status: "next" };
    }
  }

  return { id: spans[spans.length - 1].id, status: "done" };
}

export const WEEKDAY_ZH_SHORT = ["日", "一", "二", "三", "四", "五", "六"];

export function formatNow(now) {
  return `${now.month() + 1}/${now.date()}（${WEEKDAY_ZH_SHORT[now.day()]}）${now.format("HH:mm")}`;
}
