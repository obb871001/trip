import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Tourminder 設計系統：淺灰米底 + 抹茶綠面板 + 深墨綠卡片
// 色票直接取自 Figma variables（Green / Lime / Grey 1 / Grey 2 / White）
const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Nunito', 'Noto Sans TC Variable', 'Noto Sans TC', sans-serif" },
        body: { value: "'Nunito', 'Noto Sans TC Variable', 'Noto Sans TC', sans-serif" },
        num: { value: "'Nunito', 'Noto Sans TC Variable', 'Noto Sans TC', sans-serif" },
      },
      colors: {
        tm: {
          green: { value: "#3A4646" },   // 主色：文字、深卡片底
          lime: { value: "#C1CB9C" },    // 抹茶綠面板
          grey1: { value: "#D0D0D0" },   // 分隔、次要
          grey2: { value: "#E5E6E1" },   // 頁面底色、深卡片上的文字
          white: { value: "#FFFFFF" },
        },
      },
      radii: {
        card: { value: "24px" },
        pill: { value: "32px" },
        chip: { value: "21px" },
      },
    },
    semanticTokens: {
      colors: {
        "tm.onGreen": { value: "#E5E6E1" },
        "tm.onGreenMuted": { value: "rgba(229,230,225,0.72)" },
        "tm.inkMuted": { value: "rgba(58,70,70,0.62)" },
        "tm.inkFaint": { value: "rgba(58,70,70,0.24)" },
        "tm.hairline": { value: "rgba(58,70,70,0.18)" },
      },
    },
  },
  globalCss: {
    "html, body, #root": { minHeight: "100%" },
    body: {
      background: "#E5E6E1",
      color: "#3A4646",
      fontFamily: "body",
      overflowX: "hidden",
      lineHeight: 1.6,
      WebkitFontSmoothing: "antialiased",
    },
    "::selection": { background: "rgba(193,203,156,0.55)" },
    // 年／月橫向捲動列：隱藏捲軸
    ".tm-scroll": {
      overflowX: "auto",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
      maskImage:
        "linear-gradient(to right, transparent 0, #000 12px, #000 calc(100% - 28px), transparent 100%)",
      WebkitMaskImage:
        "linear-gradient(to right, transparent 0, #000 12px, #000 calc(100% - 28px), transparent 100%)",
    },
    ".tm-scroll::-webkit-scrollbar": { display: "none" },
  },
});

export const system = createSystem(defaultConfig, config);
