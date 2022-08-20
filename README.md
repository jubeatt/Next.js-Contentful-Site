# Next.js & Contentful Site

這是來自線上課程 [Next.js & Contentful Site Build Tutorial ](https://www.youtube.com/watch?v=m9mNsYJbkNg&list=PL4cUxeGkcC9jClk8wl1yJcN3Zlrr8YSA1) 的實作範例，主要是帶你認識如何利用 Next.js 與 Contentful 來打造一個網站。

我覺得這是一堂蠻不錯的課，建議有興趣的人可以到連結中參考看看。

網站連結：

## 網站介紹

其實就是用 Next 來實作的一個食譜網站，不過特別的地方是搭配了 Contentful 這套 headless CMS 來管理內容，所以使用者可以在 Contentful 上來管理自己的內容，例如：

- 新增食譜
- 修改食譜內容
- 刪除食譜
- 上傳食譜圖片
- 利用 Contentful 提供服務來更有效的撰寫內容

## 使用的技術

- React
- Next.js
- Contentful
- Incremental Static Regeneration
- Fallback Page handle
- Vercel (deploy)

## 運行方式

此專案使用 Contentful 作為 CMS，所以請先自行跑完相關申請流程。

1\. 安裝專案的 dependencies

```
npm install
```

2\. 建立 `.env.local` 輸入自己的 key & access token：

```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

3\. 啟動開發環境

```
npm run dev
```
