// 行程資料 · 每個 trip 一筆，由上方年／月與月曆切換
// 要改行程內容，改這個檔案就好。

const g = (a, b) => [a, b];

// ── 7/25（六）嘉義一日 ──────────────────────────────
const CHIAYI = {
  id: "chiayi",
  tab: "嘉義",
  tabSub: "7/25（六）",
  date: "2026-07-25",
  chipLabel: "7 / 25（六）· 高雄出發",
  countdownSuffix: "7/25（六）",
  headline: "一日行程",
  place: "嘉義市 · 義竹",
  partyLabel: "自駕一日",
  title: "嘉義",
  titleAccent: "一日行程",
  subtitle: "第一站 天來美術館 → 收尾 桃城豆花",
  notices: [
    {
      kind: "warn",
      title: "出發前先確認",
      rows: [
        ["公園火雞肉飯", "只賣早午餐、常中午前售完；先去美術館的話很可能吃不到。"],
        ["枝椏選物", "資料顯示週二、週六公休，7/25 恐沒開 — 去前先確認。"],
        ["清豐濤月", "在番路仁義潭（市區東邊約 25 分），跟 17:00 海森方向相反，列為選配。"],
        ["天來美術館", "首展檔期原到 7/19，7/25 可能換展空檔 — 出發前確認當天有展。"],
      ],
    },
    {
      kind: "rain",
      title: "雨天備案（週六約 66% 降雨・午後雷陣雨）",
      rows: [
        ["", "多數是室內不受影響：天來美術館、林聰明／京站湯包、蘭苑、花磚博物館、海森、桃城豆花。"],
        ["", "怕雨的只有戶外兩個 → 下午改「機動點」：晴天檜意森活村、雨天嘉義市立美術館。"],
        ["清豐濤月", "（露天泡腳）下雨直接跳過。早上先拍美術館外觀、車上放把傘，午後遇雨就躲室內店 1 小時等它停。"],
      ],
    },
  ],
  stops: [
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
      legIcon: "car",
    },
    {
      id: "museum",
      address: "嘉義縣義竹鄉義竹村 84 號",
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
      legIcon: "car",
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
          address: "嘉義市東區中正路 361 號",
          desc: "中正路 361 號 · 12:00–22:00 · 剛好 12:00 開，可線上預訂免排隊",
          links: [
            ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=林聰明沙鍋魚頭+中正路"],
            ["amap", "Apple 地圖", "https://maps.apple.com/?q=林聰明沙鍋魚頭+中正路+嘉義"],
            ["booking", "線上訂位", "https://www.smartfish.com.tw/"],
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
      address: "嘉義市西區蘭井街 427 號",
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
          address: "嘉義市東區延平街 215 號",
          badge: ["週六恐公休", "warn"],
          desc: "東區延平街 215 號 · 14:00–20:30 · 世界風格選物、手作、二手老物；去前務必先確認",
          links: [
            ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=枝椏+選物+嘉義+延平街"],
            ["amap", "Apple 地圖", "https://maps.apple.com/?q=枝椏+選物+嘉義+延平街"],
          ],
        },
        {
          name: "台灣花磚博物館",
          address: "嘉義市西區林森西路 282 號",
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
          address: "嘉義市東區垂楊路 156 號",
          desc: "東區垂楊路 156 號 · 13:00–20:00（週一二休）· 鋼筆、墨水、手帳、紙膠帶",
          links: [
            ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=拾筆+嘉義+垂楊路"],
            ["amap", "Apple 地圖", "https://maps.apple.com/?q=拾筆+嘉義+垂楊路"],
          ],
        },
        {
          name: "島呼冊店（獨立書店）",
          address: "嘉義市西區北興街 86 號",
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
          address: "嘉義市東區林森東路 1 號",
          desc: "林森東路 1 號 · 10:00–18:00 全年無休 · 免費 · 戶外日式木造街屋群，逛 1.5–2 小時、離海森近",
          links: [
            ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=檜意森活村"],
            ["amap", "Apple 地圖", "https://maps.apple.com/?q=檜意森活村+嘉義"],
          ],
        },
        {
          name: "☂ 雨天：嘉義市立美術館",
          address: "嘉義市西區廣寧街 101 號",
          desc: "廣寧街 101 號（近火車站）· 週一休 · 古蹟改造室內館，昭和風咖啡＋書店",
          links: [
            ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=嘉義市立美術館"],
            ["amap", "Apple 地圖", "https://maps.apple.com/?q=嘉義市立美術館"],
          ],
        },
      ],
      legAfter: "前往海森（市區內）",
      legIcon: "car",
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
      address: "嘉義市東區光華路 65 號",
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
      optional: true,
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
  ],
};

// ── 8/15（六）高雄 西子灣 × 旗津 · 2 人 ──────────────
const KAOHSIUNG = {
  id: "kaohsiung",
  tab: "高雄",
  tabSub: "8/15（六）· 2人",
  date: "2026-08-15",
  chipLabel: "8 / 15（六）· 2 人 · 高雄市區",
  countdownSuffix: "8/15（六）· 2 人",
  headline: "西子灣 × 旗津",
  place: "高雄 鼓山 · 旗津 · 鹽埕",
  partyLabel: "2 人",
  title: "西子灣",
  titleAccent: "×旗津一日",
  subtitle: "哈瑪星午餐 → 渡輪過旗津 → 杜辛亞咖啡 → 燈塔 → 鹽埕晚餐",
  notices: [
    {
      kind: "warn",
      title: "出發前一定要做的事",
      rows: [
        ["京華餐廳務必先訂位", "（07-5511688）。在地評價一致是「沒訂位保證吃不到」，兩人也要訂。用餐 90 分鐘、加一成服務費。"],
        ["杜辛亞只剩海岸公園店", "你要去的「渡輪店」2025/4/30 已經是最後一天營業，渡船頭那間收了。現在只有復興三巷 17-1 號這間，在島的南邊，下船後還要 1.6 km。"],
        ["下船先租車", "鼓山那頭下船就在渡輪站旁租電動車或腳踏車（兩人一台電動車約 400–500 元／日）。杜辛亞是這天唯一需要交通工具的一站，走過去要 22 分鐘、八月會爆汗。"],
        ["海岸線咖啡已結束營業", "旗津燈塔旁那間（Shoreline）已收，山上現在沒地方喝東西，水要在山下買。"],
        ["阿雪小吃部週六公休", "中山大學學生最愛的炒飯店，8/15 排不進去，已從名單移除。"],
      ],
    },
    {
      kind: "heat",
      title: "八月動線的三個關鍵",
      rows: [
        ["燈塔刻意排在傍晚", "上燈塔是一段 15 分鐘的上坡，中午爬會中暑；15:45 上去光線也比較好看港景。燈塔開到 21:00，想等夕陽可以再往後延。"],
        ["渡輪", "單程每人 30 元，兩人來回共 120 元，可刷 iPass／悠遊卡。班次密集不用查時刻，航程 5–10 分鐘。"],
        ["咖啡與燈塔的來回", "杜辛亞在南、燈塔在北，中間 1.6 km。租一台車就變成 7 分鐘的事；不租車就得放棄杜辛亞改走津樓（在燈塔那頭、走路 5 分）。"],
      ],
    },
  ],
  stops: [
    {
      id: "lunch",
      alternatives: [
        {
          name: "哈瑪星汕頭麵（呂）",
          desc: "鼓波街 27-16 號 · 09:30–18:00 · 不定期公休 · 07-5323228。同一個廟埕、開了一甲子的蒜香豬油乾麵，鏡週刊裴社長帶路那篇的第一站。",
          address: "高雄市鼓山區鼓波街 27-16 號",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=哈瑪星汕頭麵+鼓波街27-16號"], ["tel", "07-5323228", "tel:075323228"]],
        },
        {
          name: "代天宮廟埕散吃",
          desc: "不想坐下就沿著廟埕吃：廟口臭豆腐（黃）、蘇阿嬤雞蛋酥、鼓元街三角窗的 50 年阿嬤滷味與紅豆餅。都是銅板價、賣完就收。",
          address: "高雄市鼓山區鼓波街 27 號一帶",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=哈瑪星代天宮"]],
        },
      ],
      photo: "/trip/photos/generic-lunch.jpg",
      photoGeneric: true,
      photoCredit: ["台式滷肉飯", "midnightbreakfastcafe", "CC BY 2.0", "https://www.flickr.com/photos/193353181@N06/51642389392"],
      voices: [
        ["「阿英太貴？那附近這間老字號便宜好吃，可以是首選了」——排骨飯 $65、雞腿飯 $75，貼文下有 1,250 則回應。", "Facebook 吃貨閔爸"],
        ["「順和要去哈瑪星吃才對味。」", "Threads @nellydyu 貼文回覆"],
        ["黑旗魚丸大王 1953 年創立，鏡週刊裴社長帶路寫「憑真材實料的旗魚丸在廟口稱霸一甲子」。", "鏡週刊 2025/11"],
      ],
      time: "11:30",
      title: "午餐 · 哈瑪星",
      tags: [["二選一", "opt"]],
      gradient: g("#F97316", "#FB7185"),
      meta: [["位置", "兩家都在代天宮廟埕旁邊、互相走路 2 分鐘，是在地人日常吃的店，不在觀光動線上。"]],
      options: [
        {
          name: "① 順和排骨大王 哈瑪星店",
          address: "高雄市鼓山區鼓波街 19-3 號",
          desc: "鼓山區鼓波街 19-3 號 · 10:30–20:00 · 週三公休（8/15 有開）· 排骨飯 $65、雞腿飯 $75。高雄人講到它的語氣是「從小到大的味道」，不是打卡語氣。兩人吃完不到 200 元。",
          links: [
            ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=順和排骨大王+鼓波街19-3號"],
            ["amap", "Apple 地圖", "https://maps.apple.com/?q=順和排骨大王+高雄鼓波街"],
            ["tel", "07-5211911", "tel:075211911"],
          ],
        },
        {
          name: "② 哈瑪星黑旗魚丸大王",
          address: "高雄市鼓山區鼓波街 27-7 號",
          desc: "鼓山區鼓波街 27-7 號 · 10:30–20:00 · 週一公休（8/15 有開）· 1956 年開到現在、快滿 70 年。綜合魚丸湯配滷肉飯或豬腳飯，想喝湯就選這家。",
          links: [
            ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=哈瑪星黑旗魚丸大王"],
            ["amap", "Apple 地圖", "https://maps.apple.com/?q=哈瑪星黑旗魚丸大王"],
            ["tel", "07-5210948", "tel:075210948"],
          ],
        },
      ],
      legAfter: "代天宮走到鼓山輪渡站 約 6 分鐘",
      legIcon: "walk",
    },
    {
      id: "ferry",
      alternatives: [
        {
          name: "過港隧道",
          desc: "24 小時開放、免費，機車與汽車走這條就不用等船。單車與行人不能通行。遇到渡輪停駛（風浪、機械維修）時的唯一替代。",
          address: "高雄市前鎮區過港隧道",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=高雄過港隧道"]],
        },
        {
          name: "中洲輪渡站（前鎮 ↔ 中洲）",
          desc: "中洲三路 267 號 · 首班 06:00、末班 22:00（前鎮發），尖峰 30 分一班、離峰一小時一班，全票 40 元。這站在旗津島的南端，離杜辛亞與吉勝海產都近。如果晚餐決定留在旗津吃，回程走這條接前鎮比繞回鼓山順。",
          address: "高雄市旗津區中洲三路 267 號",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=中洲輪渡站"]],
        },
      ],
      address: "高雄市鼓山區濱海二路 1 號",
      photo: "/trip/photos/ferry.jpg",
      photoCredit: ["旗鼓一號停靠鼓山輪渡站", "xiquinhosilva", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Chi_Gu_No._1_at_Gushan_Ferry_Pier_20180101.jpg"],
      time: "12:40",
      title: "鼓山輪渡站 → 旗津",
      gradient: g("#0EA5E9", "#6366F1"),
      meta: [
        ["票價", "每人單程 30 元，可刷 iPass／悠遊卡（兩人來回共 120 元）"],
        ["班次", "密集發船、不用查時刻表，航程 5–10 分鐘"],
        ["地址", "鼓山區濱海二路 1 號"],
        ["下船先做的事", "旗津這頭一出站就是租車街。杜辛亞在島南邊 1.6 km，租一台電動車（兩人一台約 400–500 元／日）當天會輕鬆很多，燈塔那段坡也一起解決。"],
      ],
      links: [
        ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=鼓山輪渡站"],
        ["amap", "Apple 地圖", "https://maps.apple.com/?q=鼓山輪渡站"],
        ["blog", "官方航線資訊", "https://kcs.kcg.gov.tw/Content_List.aspx?n=2EDF685BBC9D2857"],
      ],
      legAfter: "渡輪 5–10 分鐘",
      legIcon: "ferry",
    },
    {
      id: "cafe",
      alternatives: [
        {
          name: "津樓 Liquid Building",
          desc: "旗津區廟前路 30 巷 13 號（全家旁那條 30 巷直走到底）· 日間 13:00–18:00、最晚離場 18:30 · 週二公休。不租車就走這家 —— 它在燈塔這頭，從渡輪站走 5 分鐘。老宅改建、中庭綠意，飲品用調酒手法做，有烏魚子軟法，店貓花花。低消每人一杯飲品，滿座才限時 2 小時。",
          address: "高雄市旗津區廟前路 30 巷 13 號",
          links: [
            ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=津樓+Liquid+Building+旗津"],
            ["blog", "官方 IG", "https://www.instagram.com/liquid_building/"],
          ],
        },
        {
          name: "銀座聚場（鹽埕）",
          desc: "五福四路 260 巷 8 號 · 週五–日 13:00–19:00（週一至四休）· 07-5215360。下雨、或臨時決定不上島時走這家，老屋咖啡，鮭魚烤飯糰 $120、銀座特調用在地冬瓜糖。需線上訂位。",
          address: "高雄市鹽埕區五福四路 260 巷 8 號",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=銀座聚場+鹽埕"], ["tel", "07-5215360", "tel:075215360"]],
        },
        {
          name: "旗津老街小巷咖啡簡餐",
          desc: "旗津老街巷內的老派咖啡簡餐店，杜辛亞客滿又不想離開旗津時的墊檔選項。沒有海景、也沒有網紅照，就是有位子、有冷氣。去之前先用 Google 地圖確認當天有開。",
          address: "高雄市旗津區廟前路一帶",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=老街小巷咖啡簡餐+旗津"]],
        },
      ],
      address: "高雄市旗津區復興三巷 17-1 號",
      photo: "/trip/photos/generic-cafe.jpg",
      photoGeneric: true,
      photoCredit: ["手沖咖啡", "nan palmero", "CC BY 2.0", "https://www.flickr.com/photos/97402086@N00/14373506594"],
      voices: [
        ["「烘豆跟手沖皆由女店長親自出品，咖啡甜而穩⋯⋯如果你是渴望品嘗好咖啡的人，這家非常值得你特地尋香而來。」", "Threads @mis_mate・100 家咖啡館計畫 NO.9"],
        ["「旗津有杜辛亞、海岸線、以及我們津樓，三個願望一次滿足」——海岸線已於 2025 年結束營業，只剩前兩家。", "Threads @wong_ken_"],
        ["「杜辛亞咖啡在旗津～店的對面有一大片森林公園可以遛寶貝遛到飽」", "Threads @dulcineacoffee.tw"],
        ["旗津的咖啡討論串幾乎都被「海景咖啡廳」洗版（單則 5.2K 讚），其中最高讚的那則自己寫「甜點吃起來普普，咖啡普普，低消的是景觀」。杜辛亞是少數被拿來談咖啡本身的。", "Threads 搜尋「旗津 咖啡廳」・2026/08 實查"],
      ],
      time: "13:15–15:30",
      title: "下午咖啡 · 杜辛亞",
      tags: [["指定要去", "warn"], ["要租車", "opt"]],
      gradient: g("#8B5CF6", "#06B6D4"),
      meta: [
        ["地址", "旗津區復興三巷 17-1 號（蔣公感恩堂旁、旗津海岸公園對面）· 0925-117233"],
        ["時間", "每天 11:00–18:00、最後點餐 17:30。目前七天都營業、沒有固定公休 —— 8/15（六）正常開。"],
        ["這家是什麼", "旗津第一間自家烘焙精品咖啡，2019 年開到現在滿七年。老闆娘是旗津在地人，烘豆與手沖都她親自來。Google 4.9／332 則，評論集中在豆子與手沖，不是打卡照。"],
        ["怎麼過去", "離旗津輪渡站 1.6 km、走路 22 分鐘。租電動車或腳踏車騎過去約 7 分鐘，回頭上燈塔也省力。"],
        ["座位", "約 20 個位子、有插座，寵物友善、有店狗。不接待六人以上（要算包場先預約），兩人直接走進去就好。"],
      ],
      note: "你說的「旗津渡輪店」在 2025/4/30 已經收了 —— 別到渡船頭找。現在只有這間海岸公園店，在島的南邊。下船先租車再過去。",
      links: [
        ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=杜辛亞咖啡+復興三巷17-1號"],
        ["amap", "Apple 地圖", "https://maps.apple.com/?q=杜辛亞咖啡+旗津復興三巷"],
        ["tel", "0925-117233", "tel:0925117233"],
        ["blog", "官方 IG", "https://www.instagram.com/dulcineacoffee.tw/"],
      ],
      legAfter: "騎回旗后山下 + 走上燈塔 約 20 分鐘",
      legIcon: "car",
    },
    {
      id: "lighthouse",
      alternatives: [
        {
          name: "旗後砲台",
          desc: "旗後山上 · 全日免費開放。從燈塔頂端的步道再走約 5 分鐘就到，1875 年的清代砲台，門額上「威震天南」。既然坡都爬了，順道走完比較划算。",
          address: "高雄市旗津區旗後山上",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=旗後砲台"]],
        },
        {
          name: "旗津星空隧道",
          desc: "廟前路 1 巷 · 24 小時開放，點燈 05:00–24:00。日治時期的軍事隧道，裡面陰涼、有夜光星座彩繪，出口接海濱木棧道。八月中午不想曬太陽就先躲這裡。",
          address: "高雄市旗津區廟前路 1 巷",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=旗津星空隧道"]],
        },
      ],
      address: "高雄市旗津區旗下巷 34 號",
      photo: "/trip/photos/lighthouse.jpg",
      photoCredit: ["高雄燈塔（旗後燈塔）", "Suicasmo", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Kaohsiung_Lighthouse_20141010.jpg"],
      voices: [
        ["有人 2026 年 5 月在 Threads 問「旗津燈塔原本的 Shoreline Coffee 結束營業之後有其他咖啡廳進駐嗎」，至今無人回報有。", "Threads @eat_all_j"],
      ],
      time: "15:45–17:00",
      title: "高雄燈塔",
      tags: [["免費", "free"]],
      gradient: g("#F59E0B", "#F43F5E"),
      meta: [
        ["地址", "旗津區旗下巷 34 號（旗後燈塔）· 07-5715021"],
        ["時間", "每日 10:00–21:00，全國第一座開放夜間參觀的燈塔園區"],
        ["亮點", "1883 年建、國內唯一白色八角形磚造燈塔，山頂可俯瞰整個高雄港與市區天際線"],
      ],
      note: "山上沒有咖啡廳了（海岸線咖啡已收），水記得在山下買。想拍夕陽的話可以待到 18:30 前後，但晚餐就要往後挪。",
      links: [
        ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=高雄燈塔+旗後燈塔"],
        ["amap", "Apple 地圖", "https://maps.apple.com/?q=高雄燈塔+旗津"],
        ["blog", "官方景點頁", "https://khh.travel/zh-tw/attractions/detail/119/"],
      ],
      legAfter: "下山 + 渡輪回鼓山 約 25 分鐘",
      legIcon: "ferry",
    },
    {
      id: "gap",
      alternatives: [
        {
          name: "棧貳庫 KW2",
          desc: "鼓山區蓬萊路 17 號 · 週日–四 10:00–21:00、週五六延長 · 07-5318568。老倉庫改的港邊商場，有冷氣、有旋轉木馬，走回鹽埕的路上順路。",
          address: "高雄市鼓山區蓬萊路 17 號",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=棧貳庫KW2"]],
        },
        {
          name: "大港橋旋轉開合秀",
          desc: "每日 15:00 一場，週五六日晚上 19:00 加開一場（8/15 是週六，兩場都有）。全台第一座水平旋轉橋，三分鐘轉完。想看晚上那場的話晚餐就要往後挪。",
          address: "高雄市鹽埕區蓬萊路",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=大港橋"]],
        },
      ],
      photo: "/trip/photos/pier2.jpg",
      photoCredit: ["從駁二看高雄港天際線", "Jirka Matousek", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Kaohsiung_skyline_from_Pier_2_Art_District.jpg"],
      time: "17:15",
      title: "回鼓山 · 空檔",
      tags: [["45 分鐘", "opt"]],
      gradient: g("#10B981", "#0EA5E9"),
      options: [
        {
          name: "哈瑪星鐵道文化園區",
          address: "高雄市鼓山區鼓山一路 32 號",
          desc: "下船就到，舊打狗驛的草地與鐵軌，傍晚散步剛好；走到鹽埕約 15 分鐘",
          links: [
            ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=哈瑪星鐵道文化園區"],
            ["amap", "Apple 地圖", "https://maps.apple.com/?q=哈瑪星鐵道文化園區"],
          ],
        },
        {
          name: "駁二藝術特區 / 大港橋",
          address: "高雄市鹽埕區大勇路 1 號",
          desc: "再往鹽埕方向走一點，順路去京華；大港橋每日 15:00 旋轉開合",
          links: [
            ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=駁二藝術特區"],
            ["amap", "Apple 地圖", "https://maps.apple.com/?q=駁二藝術特區"],
          ],
        },
      ],
      legAfter: "走到鹽埕 約 15 分鐘",
      legIcon: "walk",
    },
    {
      id: "dinner",
      alternatives: [
        {
          name: "阪城海鮮料理",
          desc: "鼓山區濱海二路 25 號 · 17:30–23:30 · 週一公休 · 07-5335556。就在鼓山輪渡站旁邊，一下船不用走去鹽埕。在地 21 年的手釣海鮮熱炒，Threads 的在地清單把它歸在「適合人多的店」。",
          address: "高雄市鼓山區濱海二路 25 號",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=阪城海鮮料理+濱海二路25號"], ["tel", "07-5335556", "tel:075335556"]],
        },
        {
          name: "阿財雞絲麵",
          desc: "鹽埕區壽星街 11 號 · 11:30–21:00 · 週日公休 · 07-5215151。走了一整天不想吃大餐就選這家，招牌太監雞。那位嫌鹽埕「沒什麼好吃」的在地人，唯一認可的兩家之一。",
          address: "高雄市鹽埕區壽星街 11 號",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=阿財雞絲麵+壽星街11號"], ["tel", "07-5215151", "tel:075215151"]],
        },
        {
          name: "港園牛肉麵（鹽埕總店）",
          desc: "鹽埕區大成街 55 號 · 10:30–20:00 · 無固定公休 · 07-5613842。開了七十年的牛肉拌麵，在鹽埕住戶的「必吃樓」討論串裡是第一個被貼出來的名字。20:00 打烊，18:00 到剛好。自強分店已收，別跑錯。",
          address: "高雄市鹽埕區大成街 55 號",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=港園牛肉麵+鹽埕總店+大成街55號"], ["tel", "07-5613842", "tel:075613842"]],
        },
        {
          name: "鴨肉本 二老闆の店",
          desc: "鹽埕區富野路 107 號 · 10:00–20:30、中間不休息 · 不定期公休（出發前看粉專）· 07-5314630。六十年的鴨肉飯，Google 4.8／125 則。同一串在地清單裡被點名的是鴨肉飯與米血，內用位子多、還有戶外桌，兩人不用等。",
          address: "高雄市鹽埕區富野路 107 號",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=鴨肉本+二老闆の店+富野路107號"], ["tel", "07-5314630", "tel:075314630"]],
        },
        {
          name: "吉勝海產（留在旗津吃）",
          desc: "旗津區中洲二路 186-3 號 · 10:00–14:00、17:00–21:00 · 07-5719016。從杜辛亞再往南 3 km，騎車 12 分鐘。2026/5 一則「旗津人會吃的在地海產店是哪家？」的討論串裡得票最多的兩家之一，而且它不在任何一份旗津 TOP 20 觀光清單上 —— Google 只有 4.3／144 則，是那種在地人自己吃的分數。吃完從中洲輪渡站搭船到前鎮（末班 22:00、全票 40 元）。",
          address: "高雄市旗津區中洲二路 186-3 號",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=吉勝海產+中洲二路186-3號"], ["tel", "07-5719016", "tel:075719016"]],
        },
      ],
      address: "高雄市鹽埕區大勇路 76 巷 8 號",
      photo: "/trip/photos/generic-hotpot.jpg",
      photoGeneric: true,
      photoCredit: ["台式火鍋店", "MAUOSREEGU DAVMUR", "CC0 1.0", "https://commons.wikimedia.org/w/index.php?curid=143584331"],
      voices: [
        ["在地老饕列的鹽埕必吃 12 家清單裡，京華餐廳被點名「拔絲地瓜跟炸丸子」，該則回覆有 593 個讚。", "Threads @heyuezong"],
        ["「先說要吃要先預約才不會撲空！被火鍋店耽誤的拔絲地瓜！回訪超多次愛店，這間酸菜白肉鍋就算夏天也想吃。」", "Instagram @_place_for_eating"],
      ],
      time: "18:00",
      title: "晚餐 · 京華餐廳",
      tags: [["要訂位", "book"]],
      gradient: g("#F43F5E", "#8B5CF6"),
      meta: [
        ["地址", "鹽埕區大勇路 76 巷 8 號 · 07-5511688"],
        ["時間", "11:00–14:00、17:00–21:00"],
        ["特色", "民國 38 年創立的平津涮羊肉、東北酸菜白肉鍋，炭燒煙囪鍋。招牌意外是拔絲地瓜與香酥鴨"],
        ["規則", "用餐 90 分鐘、加一成服務費"],
      ],
      note: "在兩份不同的高雄在地人清單裡都出現。沒訂位保證吃不到，建議提早幾天打 07-5511688。",
      links: [
        ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=京華餐廳+鹽埕區大勇路76巷8號"],
        ["amap", "Apple 地圖", "https://maps.apple.com/?q=京華餐廳+高雄鹽埕"],
        ["tel", "07-5511688", "tel:075511688"],
        ["blog", "官方 IG", "https://www.instagram.com/jing_hua2/"],
      ],
    },
    {
      id: "backup",
      address: "高雄市鹽埕區七賢三路 263 號",
      voices: [
        ["傳統鐵皮屋海產攤，「沒有重視擺盤跟服務」，客群以在地家庭聚餐為主，五人一桌約 1,200 元。", "跟著尼力吃喝玩樂"],
      ],
      optional: true,
      time: "備案",
      title: "小松海產",
      tags: [["免訂位", "opt"]],
      gradient: g("#14B8A6", "#06B6D4"),
      meta: [
        ["地址", "鹽埕區七賢三路 263 號 · 07-5512635"],
        ["時間", "17:00–00:30"],
        ["特色", "鐵皮屋老派海產攤，砂鍋魚頭 $400、生魚片一盤 $100 上下，客群幾乎都是在地家庭"],
      ],
      note: "八月吃鍋嫌熱、或京華訂不到位，就走這家。免訂位，兩人點三四道菜約 600–800 元。",
      links: [
        ["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=小松海產+七賢三路263號"],
        ["amap", "Apple 地圖", "https://maps.apple.com/?q=小松海產+高雄鹽埕"],
        ["tel", "07-5512635", "tel:075512635"],
      ],
    },
    {
      id: "pocket",
      voices: [
        ["「真的覺得在鹽埕區吃的出差異的，只剩阿財雞絲麵跟鴨肉意麵。」——這則是全串最嚴格的在地評論，同時點名鴨肉珍、三代米糕、冬粉王水準已不如以往。", "Threads @yen_lin_99"],
      ],
      optional: true,
      time: "口袋",
      title: "鹽埕在地人清單",
      tags: [["有空檔再插", "opt"]],
      gradient: g("#6366F1", "#0EA5E9"),
      meta: [["來源", "Threads 上鹽埕住戶跟在地老饕反覆提到的店，不是部落格清單。時間有多再插。"]],
      options: [
        {
          name: "阿財雞絲麵",
          desc: "連「覺得鹽埕沒什麼好吃」的死忠在地人都認可的兩家之一，招牌太監雞",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=阿財雞絲麵+鹽埕"]],
        },
        {
          name: "大智羊肉",
          desc: "燴飯、炒飯，多份在地清單都有",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=大智羊肉+高雄鹽埕"]],
        },
        {
          name: "吳家金桔豆花",
          desc: "飯後甜點，走路可到",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=吳家金桔豆花+鹽埕"]],
        },
        {
          name: "銀座聚場（咖啡）",
          address: "高雄市鹽埕區五福四路 260 巷 8 號",
          desc: "鹽埕區五福四路 260 巷 8 號 · 週五–日 13:00–19:00（週一至四休）· 老屋咖啡，鮭魚烤飯糰 $120、銀座特調 $160 用在地冬瓜糖",
          links: [["gmap", "Google 地圖", "https://www.google.com/maps/search/?api=1&query=銀座聚場+鹽埕"]],
        },
      ],
    },
  ],
};

export const TRIPS = [CHIAYI, KAOHSIUNG];
export const DEFAULT_TRIP_ID = "kaohsiung";
