本次資料庫期末專題，基於課程打算同時銜接“網頁程式設計”課程前端的內容，
由於網頁程式設計課的期末要求需使用jQuery，此專案的動畫效果部分採用jQuery處理。<br/>
<br/>
程式架構：<br/>
每項PHP檔都會require header.php以及footer.php，即可模組化依賴。<br/>

目前待做計劃（暫定）：<br/>

    1.刻意不對稱、不均勻的Gallery效果放置各項聲音素材（參考資料：https://css-tricks.com/seamless-responsive-photo-grid/）<br/>
    2.Gallery要能讀取MySQL資料庫將各聲音素材以及其預覽圖逐一讀取放入。<br/>
    3.註冊、登入、登出功能<br/>
    4.密碼加密<br/>
    5.使用者上傳素材功能，要能上傳聲音檔以及預覽圖。（使用MySQL）<br/>
<br/>
觀念釐清：<br/>
    1.由於資料庫資源寶貴，正確的檔案存放方法為將檔案路徑作為字串存入資料庫，而非存入檔案本身。
