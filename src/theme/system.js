import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Aurora UI 暗色設計系統：極光漸層 + 暗色玻璃質感
const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'Noto Sans TC', sans-serif" },
        body: { value: "'Noto Sans TC', sans-serif" },
        num: { value: "'Outfit', sans-serif" },
      },
      colors: {
        brand: {
          50: { value: "#F0F9FF" },
          100: { value: "#E0F2FE" },
          200: { value: "#BAE6FD" },
          300: { value: "#7DD3FC" },
          400: { value: "#38BDF8" },
          500: { value: "#0EA5E9" },
          600: { value: "#0284C7" },
          700: { value: "#0369A1" },
          800: { value: "#075985" },
          900: { value: "#0C4A6E" },
        },
        accent: {
          500: { value: "#F97316" },
          600: { value: "#EA580C" },
        },
        aurora: {
          coral: { value: "#FB7185" },
          tropical: { value: "#10B981" },
          sunset: { value: "#F59E0B" },
          violet: { value: "#8B5CF6" },
          cyan: { value: "#06B6D4" },
        },
        // 暗色語意 token
        ink: {
          bg: { value: "#060F1A" },
          surface: { value: "rgba(255,255,255,0.05)" },
          border: { value: "rgba(255,255,255,0.09)" },
          text: { value: "#E8F1F8" },
          muted: { value: "#9DB4C6" },
        },
      },
      radii: {
        card: { value: "22px" },
      },
    },
  },
  globalCss: {
    "html, body, #root": { minHeight: "100%" },
    body: {
      background: "#060F1A",
      color: "#E8F1F8",
      fontFamily: "body",
      overflowX: "hidden",
      lineHeight: 1.7,
    },
    "::selection": { background: "rgba(56,189,248,0.35)" },
    "@keyframes wl-pulse": {
      "0%, 100%": { opacity: 0.5 },
      "50%": { opacity: 0.85 },
    },
  },
});

export const system = createSystem(defaultConfig, config);
