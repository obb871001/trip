# 嘉義一日行程 · Aurora UI

以 Aurora UI（極光漸層＋玻璃質感）風格呈現的 7/25 嘉義一日行程，單頁 React 應用。

## 技術

- React 18 + Vite（JavaScript）
- Chakra UI 3 — 樣式系統與 tokens（`src/theme/system.js`）
- Framer Motion — 極光光暈動畫、滾動進場（尊重 prefers-reduced-motion）
- Swiper — 午餐／逛街／機動點的選項橫向滑動
- dayjs — 出發倒數
- react-icons — Feather 圖示（地圖、注意事項）

## 開始

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 產出 dist/
npm run preview
```

## 結構

```
src/
├── theme/system.js          # 設計 tokens（Aurora 配色、Noto Sans TC + Outfit）
├── data/itinerary.js        # 全部行程內容（改這裡就能改行程）
├── components/
│   ├── AuroraBackground.jsx # 動態極光背景
│   ├── Itinerary.jsx        # 標題 + 注意事項 + 時間軸
│   ├── StopCard.jsx         # 單一行程卡（含選項 Swiper）
│   ├── NoticeBox.jsx        # 注意事項 / 雨天備案
│   ├── MapLinks.jsx         # Google / Apple 地圖與參考連結
│   ├── Tag.jsx
│   └── Reveal.jsx
└── App.jsx / main.jsx
```

## 說明

- 全部文案為中文，無 Hero banner 與 Footer。
- 行程內容集中在 `src/data/itinerary.js`，要調整時間、店家、連結都改這一個檔案即可。
- 各站都附 Google 地圖與 Apple 地圖導航連結。
