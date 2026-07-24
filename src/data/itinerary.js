// 嘉義一日行程資料 · 7/25（六）

export const TRIP_DATE = "2026-07-25";

export const NOTICES = [
  ["公園火雞肉飯", "只賣早午餐、常中午前售完；先去美術館的話很可能吃不到。"],
  ["枝椏選物", "資料顯示週二、週六公休，7/25 恐沒開 — 去前先確認。"],
  ["清豐濤月", "在番路仁義潭（市區東邊約 25 分），跟 17:00 海森方向相反，列為選配。"],
  ["天來美術館", "首展檔期原到 7/19，7/25 可能換展空檔 — 出發前確認當天有展。"],
];

export const RAIN = [
  ["", "多數是室內不受影響：天來美術館、林聰明／京站湯包、蘭苑、花磚博物館、海森、桃城豆花。"],
  ["", "怕雨的只有戶外兩個 → 下午改「機動點」：晴天檜意森活村、雨天嘉義市立美術館。"],
  ["清豐濤月", "（露天泡腳）下雨直接跳過。早上先拍美術館外觀、車上放把傘，午後遇雨就躲室內店 1 小時等它停。"],
];

const g = (a, b) => [a, b];

export const STOPS = [
  {
    id: "start",
    time: "09:00",
    title: "高雄出發 → 義竹",
    gradient: g("#0EA5E9", "#6366F1"),
    meta: [
      ["路線", "走國道 1 號往嘉義縣義竹鄉，車程約 1 小時 15 分–1.5 小時（以導航為準）。"],
      ["順路", "義竹在高雄與嘉義市中間，當第一站順路不繞路。"],
    ],
    legAfter: "車程約 1 小時 15–30 分",
  },
  {
    id: "museum",
    time: "10:20–11:45",
    title: "天來美術館",
    tags: [["免費", "free"]],
    gradient: g("#8B5CF6", "#06B6D4"),
    meta: [
      ["地址", "嘉義縣義竹鄉義竹村 84 號"],
      ["時間", "週四–日 10:00–17:00（週一–三休）· 館內限 35 人"],
      ["亮點", "毛森江清水模建築、農村祖厝改建，一開館人最少、最好拍"],
    ],
    links: [
      ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=天來美術館+義竹"],
      ["amap", "Apple 地圖", "https://maps.apple.com/?q=天來美術館+義竹"],
      ["blog", "完整攻略", "https://www.kkday.com/zh-tw/blog/243342/asia-taiwan-chiayi-tianlai-art-museum-guide"],
    ],
    legAfter: "回市區 約 40–45 分",
  },
  {
    id: "lunch",
    time: "12:30",
    title: "午餐",
    tags: [["三選一 · 現場決定", "opt"]],
    gradient: g("#F97316", "#FB7185"),
    options: [
      {
        name: "① 林聰明沙鍋魚頭（總店）",
        desc: "中正路 361 號 · 12:00–22:00 · 剛好 12:00 開，可線上預訂免排隊",
        links: [
          ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=林聰明沙鍋魚頭+中正路"],
          ["amap", "Apple 地圖", "https://maps.apple.com/?q=林聰明沙鍋魚頭+中正路+嘉義"],
          ["blog", "官網訂位", "https://www.smartfish.com.tw/"],
        ],
      },
      {
        name: "② 京站永春湯包麵館 2.0",
        desc: "嘉義後站（西區）· 想吃期間限定「香菜小籠湯包」就選這間",
        links: [
          ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=京站永春湯包麵館2.0"],
          ["amap", "Apple 地圖", "https://maps.apple.com/?q=京站永春湯包麵館+嘉義"],
          ["blog", "官方 IG", "https://www.instagram.com/jingzhan_341/"],
        ],
      },
      {
        name: "③ 公園火雞肉飯",
        badge: ["易售完", "warn"],
        desc: "東區 · 只賣早午餐、常中午前賣完；先跑美術館很可能吃不到",
        links: [
          ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=公園火雞肉飯+嘉義"],
          ["amap", "Apple 地圖", "https://maps.apple.com/?q=公園火雞肉飯+嘉義"],
        ],
      },
    ],
  },
  {
    id: "lanyuan",
    time: "13:45",
    title: "蘭苑",
    tags: [["確定有開", "free"]],
    gradient: g("#10B981", "#0EA5E9"),
    meta: [
      ["地址", "嘉義市西區蘭井街 427 號"],
      ["特色", "蘭井街日式老宅喫茶，有美式＆抹茶"],
    ],
    links: [
      ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=蘭苑+蘭井街+嘉義"],
      ["amap", "Apple 地圖", "https://maps.apple.com/?q=蘭苑+蘭井街+嘉義"],
      ["blog", "店家介紹", "https://lifea.blog/lanyuan-chiayi-tea-house/"],
    ],
  },
  {
    id: "shopping",
    time: "14:15",
    title: "逛街時間",
    tags: [["室內 · 任選 2–3 間", "opt"]],
    gradient: g("#F59E0B", "#8B5CF6"),
    options: [
      {
        name: "枝椏 zhī yā 選物",
        badge: ["週六恐公休", "warn"],
        desc: "東區延平街 215 號 · 14:00–20:30 · 世界風格選物、手作、二手老物；去前務必先確認",
        links: [
          ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=枝椏+選物+嘉義+延平街"],
          ["amap", "Apple 地圖", "https://maps.apple.com/?q=枝椏+選物+嘉義+延平街"],
        ],
      },
      {
        name: "台灣花磚博物館",
        badge: ["室內", "free"],
        desc: "西區林森西路 282 號（火車站步行 10 分）· 10:00–17:30（週一二休）· 門票 $50 可全額抵消費",
        links: [
          ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=台灣花磚博物館"],
          ["amap", "Apple 地圖", "https://maps.apple.com/?q=台灣花磚博物館+嘉義"],
          ["blog", "介紹", "https://travel.yam.com/article/130320"],
        ],
      },
      {
        name: "拾筆（文具選物）",
        desc: "東區垂楊路 156 號 · 13:00–20:00（週一二休）· 鋼筆、墨水、手帳、紙膠帶",
        links: [
          ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=拾筆+嘉義+垂楊路"],
          ["amap", "Apple 地圖", "https://maps.apple.com/?q=拾筆+嘉義+垂楊路"],
        ],
      },
      {
        name: "島呼冊店（獨立書店）",
        desc: "西區北興街 86 號 · 14:00–20:00（週一–四休，週五起開）· 獨立書店兼豆腐店",
        links: [
          ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=島呼冊店+嘉義"],
          ["amap", "Apple 地圖", "https://maps.apple.com/?q=島呼冊店+嘉義"],
        ],
      },
    ],
  },
  {
    id: "flex",
    time: "15:30",
    title: "機動點",
    tags: [["看天氣二選一", "opt"]],
    gradient: g("#06B6D4", "#3B82F6"),
    options: [
      {
        name: "☀ 晴天：檜意森活村",
        desc: "林森東路 1 號 · 10:00–18:00 全年無休 · 免費 · 戶外日式木造街屋群，逛 1.5–2 小時、離海森近",
        links: [
          ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=檜意森活村"],
          ["amap", "Apple 地圖", "https://maps.apple.com/?q=檜意森活村+嘉義"],
        ],
      },
      {
        name: "☂ 雨天：嘉義市立美術館",
        desc: "廣寧街 101 號（近火車站）· 週一休 · 古蹟改造室內館，昭和風咖啡＋書店",
        links: [
          ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=嘉義市立美術館"],
          ["amap", "Apple 地圖", "https://maps.apple.com/?q=嘉義市立美術館"],
        ],
      },
    ],
    legAfter: "前往海森（市區內）",
  },
  {
    id: "dinner",
    time: "17:00",
    title: "海森 Hisun",
    tags: [["已訂位", "book"]],
    gradient: g("#F43F5E", "#F59E0B"),
    meta: [["特色", "百年日式老宅、陶鍋炊飯、榻榻米氛圍（文化廣場巷弄）"]],
    links: [
      ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=海森+Hisun+嘉義"],
      ["amap", "Apple 地圖", "https://maps.apple.com/?q=海森+Hisun+嘉義"],
      ["blog", "招牌菜食記", "https://bigsharkgogogo.tw/hisun/"],
    ],
  },
  {
    id: "dessert",
    time: "18:30",
    title: "桃城豆花（光華店）",
    gradient: g("#FB7185", "#8B5CF6"),
    meta: [
      ["地址", "嘉義市東區光華路 65 號"],
      ["時間", "09:00–22:00（週三休）· 銅板價、老醫館超好拍"],
    ],
    links: [
      ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=桃城豆花+光華路+嘉義"],
      ["amap", "Apple 地圖", "https://maps.apple.com/?q=桃城豆花+光華路+嘉義"],
      ["blog", "店家介紹", "https://travelclub.blog/2025/11/08/19081/"],
    ],
  },
  {
    id: "optional",
    time: "選配",
    title: "清豐濤月",
    tags: [["傍晚 / 夜景", "opt"]],
    gradient: g("#14B8A6", "#06B6D4"),
    meta: [
      ["位置", "番路仁義潭（市區東邊約 25 分）"],
      ["特色", "泡腳足湯＋景觀火鍋、遠眺仁義潭，夕陽約 18:30 最美"],
    ],
    note: "露天泡腳看景，下雨直接跳過；跟 17:00 海森方向相反、時間硬卡。晴天若真要排，建議改成傍晚看夕陽那版動線。",
    links: [
      ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=清豐濤月景觀餐廳"],
      ["amap", "Apple 地圖", "https://maps.apple.com/?q=清豐濤月景觀餐廳+嘉義"],
      ["blog", "泡腳/菜單介紹", "https://fupo.tw/blog/post/tao-month"],
    ],
  },
];
