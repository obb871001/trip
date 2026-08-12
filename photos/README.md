# 行程照片

## 已收錄（皆為自由授權，來源 Wikimedia Commons）

| 檔案 | 內容 | 作者 | 授權 | 原始頁面 |
| --- | --- | --- | --- | --- |
| `lighthouse.jpg` | 高雄燈塔（旗後燈塔） | Suicasmo | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Kaohsiung_Lighthouse_20141010.jpg |
| `ferry.jpg` | 旗鼓一號停靠鼓山輪渡站 | xiquinhosilva | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Chi_Gu_No._1_at_Gushan_Ferry_Pier_20180101.jpg |
| `pier2.jpg` | 從駁二看高雄港天際線 | Jirka Matousek | CC BY 2.0 | https://commons.wikimedia.org/wiki/File:Kaohsiung_skyline_from_Pier_2_Art_District.jpg |

## 示意圖（非該店實照）

店家沒有可自由使用的實照，改用同主題的自由授權照片替代。詳細頁會在照片上打「示意圖」標籤。

| 檔案 | 用在 | 內容 | 作者 | 授權 | 原始頁面 |
| --- | --- | --- | --- | --- | --- |
| `generic-lunch.jpg` | 午餐 · 哈瑪星 | 台式滷肉飯 | midnightbreakfastcafe | CC BY 2.0 | https://www.flickr.com/photos/193353181@N06/51642389392 |
| `generic-cafe.jpg` | 下午咖啡 | 手沖咖啡 | nan palmero | CC BY 2.0 | https://www.flickr.com/photos/97402086@N00/14373506594 |
| `generic-hotpot.jpg` | 晚餐 · 京華餐廳 | 台式火鍋店 | MAUOSREEGU DAVMUR | CC0 1.0 | https://commons.wikimedia.org/w/index.php?curid=143584331 |

`photoGeneric: true` 就是「示意圖」標籤的開關。之後換成實照時記得把它拿掉。

六張都已裁成 1000×563（16:9）、JPEG 品質 82，各約 70–190KB。

**CC BY 與 CC BY-SA 要求標示作者與授權**，這件事由 `photoCredit` 欄位處理：詳細頁的照片右下角會壓一行小字，寫出內容、作者、授權，並連回 Commons 原始頁面。**改照片時不要拿掉 `photoCredit`**，否則就不符合授權條件了。

## 還沒有照片的站

小松海產（備案）與鹽埕在地人清單這兩張卡目前沒放圖，詳細頁會顯示「尚未加入照片」。

所有店家的**實照**都還缺。Google 地圖與 IG 上的照片是店家或使用者的著作權，不能重製到這個公開專案裡。要補的話：自己去拍、向店家要授權、或請店家提供官方照片。

## 自己加照片

把檔案放進這個資料夾，然後在 `src/data/itinerary.js` 對應的 stop 加上：

```js
{
  id: "dinner",
  photo: "/trip/photos/jinghua.jpg",   // 前面的 /trip/ 對應 vite.config.js 的 base
  // 自己拍的照片不需要 photoCredit；用別人的就一定要加
  ...
}
```

建議尺寸：1000×563（16:9），JPEG 品質 80 上下，單檔控制在 200KB 內。
