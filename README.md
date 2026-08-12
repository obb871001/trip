# 行程表

單頁 React 應用，收錄兩趟行程。上方年／月列與月曆可以自由翻到任何月份瀏覽（有行程的月份右上角有紅點），點月曆上的行程日才會切換下方內容：

- **嘉義** 7/25（六）一日
- **高雄** 8/15（六）西子灣 × 旗津，2 人

## 設計

白底 + 灰卡 + 單一重點色的簡潔風格，取自 Figma 的 [Trip Tourava — Travel App UI Kit](https://www.figma.com/design/r83Xm6zibaDJ9wi5iFrccg/)。

色票以 shadcn/ui 的語意 token 形式定義在 `src/index.css` 的 `:root`（HSL），Tailwind 再透過 `hsl(var(--x))` 取用。

| shadcn token | 對應色 | 用途 |
| --- | --- | --- |
| `--background` | `#FFFFFF` | 頁面底 |
| `--foreground` | `#17181A` | 主文字、時間軸節點 |
| `--secondary` / `--muted` | `#F4F5F5` | 卡片灰底 |
| `--muted-foreground` | `#7A7F85` | 次要文字 |
| `--border` / `--input` | `#ECEDED` | 分隔線、卡片描邊 |
| `--primary` | `#FF543D` | 重點色 |
| `--accent` | `#FFEDEA` | 重點色的淺底 |

重點色刻意用得省：只出現在選中的年／月、月曆上的行程日、`要訂位` 標籤、卡片底部的紅色提醒，以及 Google 地圖／電話連結的文字。其餘一律灰階。

字體為 Nunito（拉丁字與數字）+ Noto Sans TC（中文），透過 `@fontsource` 打包進專案、**不走 Google Fonts CDN** —— 離線、內網、GitHub Pages 都能正確顯示。字型的 import 在 `src/main.jsx`。版面以 393px 手機寬為準，容器 `max-w-app`（430px）置中。

## 技術

- React 18 + Vite（JavaScript）
- Tailwind CSS 3 + **shadcn/ui**（new-york style、JS 版）— UI 元件在 `src/components/ui/`
- Radix UI — shadcn 底層的無樣式元件
- react-day-picker — shadcn Calendar 的核心
- lucide-react — shadcn 生態的圖示
- Framer Motion — 滾動進場（尊重 prefers-reduced-motion）
- Swiper — 選項卡橫向滑動
- dayjs — 出發倒數與月曆運算
- @fontsource/nunito、@fontsource-variable/noto-sans-tc — 自帶字型

## 開始

```bash
npm install      # 這版導入 shadcn/ui，新增不少相依套件，一定要重跑
npm run dev      # http://localhost:5173
npm run build    # 產出 dist/
npm run preview
```

## 結構

```
components.json              # shadcn/ui 設定（tsx: false → 產出 .jsx）
jsconfig.json                # @/* 路徑別名（vite.config.js 也有對應設定）
tailwind.config.js           # 對接 shadcn 的語意 token
postcss.config.js
src/
├── index.css                # Tailwind 三層 + :root 色票變數 + .tm-scroll
├── lib/utils.js             # shadcn 的 cn()
├── components/ui/           # shadcn 元件：card / badge / button / separator / calendar / sheet / tabs
├── data/itinerary.js        # 全部行程內容（改這裡就能改行程）
├── components/
│   ├── TripHeader.jsx       # 問候 + 年／月 pill（選中會自動捲進畫面）
│   ├── TripCalendar.jsx     # shadcn Calendar；自訂上下月按鈕，任何月份都能翻，只有行程日可點
│   ├── TripSummaryCard.jsx  # 行程摘要灰卡（日期方塊、站數、地點）
│   ├── Itinerary.jsx        # 組合以上 + 注意事項 + 時間軸
│   ├── StopCard.jsx         # 時間軸上的摘要卡（縮圖 + 重點兩行），整張可點開詳細頁
│   ├── StopDetailSheet.jsx  # 行程詳細頁（底部 Sheet）：照片、資訊、地圖、在地評價
│   ├── CopyAddress.jsx      # 可一鍵複製的地址列
│   ├── CollapseSection.jsx  # 可展開／收合的區塊（出發前提醒、詳細頁的備案）
│   ├── NoticeBox.jsx        # 注意事項 / 雨天備案 / 高溫提醒（plain 版不包 Reveal）
│   ├── MapLinks.jsx         # Google / Apple 地圖、電話與參考連結
│   ├── Tag.jsx
│   └── Reveal.jsx
└── App.jsx / main.jsx
```

`src/theme/system.js`、`AuroraBackground.jsx`、`TripTabs.jsx` 是舊版留下的，改版後已不再被引用，可以自行刪除。

要再加 shadcn 元件時直接跑：`npx shadcn@latest add <元件名>`，會依 `components.json` 產出 `.jsx` 到 `src/components/ui/`。

## 資料格式

`src/data/itinerary.js` 匯出 `TRIPS`（陣列）與 `DEFAULT_TRIP_ID`（預設開哪一趟）。

每個 trip：

```js
{
  id, tab,                  // tab 是標題大字（例如「高雄」）
  headline,                 // 標題旁的小字（例如「西子灣 × 旗津」）
  date,                     // 出發日，決定倒數、月曆位置與摘要卡日期方塊
  place, partyLabel,        // 摘要卡的地點與人數
  title, titleAccent, subtitle,
  notices: [{ kind, title, rows }],   // kind: warn | rain | heat
  stops: [...]
}
```

每個 stop：

```js
{
  id, time, title,
  optional: true,           // 選配 / 備案，節點顯示 ★ 且不計入編號
  tags: [[label, kind]],    // kind: free | book | opt | warn
  address,                  // 詳細頁會顯示成可一鍵複製的地址列
  meta: [[key, value]],
  options: [{ name, address, badge, desc, links }],   // 每個選項各自有地址與地圖
  alternatives: [{ name, address, desc, links }],     // 備案：主要選擇不行時的替代，詳細頁獨立一區
  note,                     // 卡片底部的紅色提醒
  links: [[type, label, href]],       // type: gmap | amap | blog | tel | booking
  legAfter, legIcon,        // 交通段文字與圖示：car | walk | ferry
  photo,                    // 詳細頁的主視覺；放 public/photos/xxx.jpg 後填 "/trip/photos/xxx.jpg"
  photoCredit,              // [說明, 作者, 授權, 原始頁面] — 用 CC 授權的照片時必填
  photoGeneric: true,       // 這張是同主題示意圖、不是該店實照，會在照片上標「示意圖」
  voices: [[quote, source]] // 詳細頁「在地評價」的引述與出處
}
```

詳細頁的地圖是從 `gmap` 連結的 `query` 參數自動組出 Google Maps 嵌入網址，不用另外填座標。**有 `options` 的站會一個選項一張地圖**（例如午餐二選一會出現兩張），沒有選項才用站本身的連結。

訂位按鈕的判斷順序：有 `booking` 型別的連結就顯示「線上訂位」；沒有但標籤是 `book` 且有 `tel`，就顯示「打電話訂位」；都沒有才退回一般的參考連結。

`gradient` 欄位是舊版暗色主題留下的，現在不使用，留著不影響執行。

## 照片授權

`public/photos/` 目前有六張圖，全部是自由授權（Wikimedia Commons 與 Flickr 上的 CC BY / CC BY-SA / CC0），作者與授權標示由 `photoCredit` 渲染在詳細頁照片右下角。

其中三張是**地標實照**（高雄燈塔、鼓山輪渡站、駁二），另外三張是**同主題示意圖**（滷肉飯、手沖咖啡、台式火鍋店），用來替代沒有合法實照的店家，會標上「示意圖」以免誤導。完整來源清單見 `public/photos/README.md`。

## 說明

- 全部文案為中文，無 Hero banner 與 Footer。
- 要調整時間、店家、連結，只改 `src/data/itinerary.js` 一個檔案。
- 各站都附 Google 地圖與 Apple 地圖導航連結，需要訂位的店直接附可撥打的電話。
- 每一站都備 1–2 個備案（`alternatives`），摘要卡右上角會顯示淡色的「備案 N」，內容在詳細頁「資訊」分頁最下方、`選項` 之後，預設收起來。備案跟 `options` 不同：`options` 是當天要二選一，`alternatives` 是主要選擇失效時的退路，權重刻意壓低。
- 「出發前」的提醒也是收合的（`CollapseSection`），只留一行標題與提醒數量，點開才展開。放進收合區塊的 `NoticeBox` 要加 `plain`，否則 Framer Motion 的 `whileInView` 在高度 0 的容器裡不會觸發，展開後會是空白。
- 上方的年份與月份併成同一列：左邊是固定的年份切換（`‹ 2026 ›`，該年有行程會有紅點），右邊是可橫捲的 12 個月。
- 時間軸上的卡片只放摘要（縮圖、時間、標題、第一行 meta、選項名稱、提醒各截兩行），完整的 meta、選項說明、地圖與在地評價都在點開後的詳細頁。要改摘要顯示哪些欄位就改 `StopCard.jsx`。
