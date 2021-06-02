# 中介軟體流程測試
了解 middleware 在請求與回應間發生了什麼事情

## 功能
* 開始運行時會在終端機記錄：時間戳記(以台北當地時間顯示)、請求的 HTTP 方法及該頁面的 URL。
* 在進入路由時，透過 User 這個 Middleware 作為送出回應前的權限認證，判斷該路由是否為開放狀態並在畫面顯示相對應資訊。
* 結束運行後會在終端機記錄：時間戳記(以台北當地時間顯示)、請求的 HTTP 方法、該頁面的 URL 以及運行過程總共花費的時間。

# 專案畫面

![image](https://github.com/a1234567045/middleware-practice/blob/13578085f3c78a0f6d536c876c8fb8b0afcdb516/middlewaer.png) 

# 環境建置與需求
* 開發環境：Node.js v10.15.0
* 開發框架：Express v4.17.1

# 安裝執行步驟

1. 打開終端機(Terminal)，使用 git clone 將專案下載至本機電腦，或是直接在 github 下載專案壓縮檔(Download ZIP)。
```
git clone https://github.com/a1234567045/middleware-test.git
```
2. 在終端機輸入以下指令，進入專案資料夾，並安裝執行專案需要的相關套件
```
cd middleware
npm install
npm install nodemon
```
3. 接下來啟動伺服器來執行專案。
```
npm run dev
```
* 當終端機顯示以下訊息即成功啟動，使用瀏覽器於網址列中輸入 http://localhost:3000 即可開始操作專案
```
App is running on http://localhost:3000
```
4. 在伺服器啟動狀態下於鍵盤按下 Ctrl + C ，即可關閉伺服器停止執行專案

## 專案開發人員
[wei](https://github.com/a1234567045/middleware-test)
