在大三升大四的暑假期間，找了許多有關前端的實習職缺，每次投完履歷後就開始根據其工作內容可能會用到的套件大致瀏覽一遍，以求當錄取時，
能盡快的融入工作環境，雖然在這段期間內知道了許多以往不知道的事物，但都僅僅只是了解其皮毛，樣樣通而樣樣鬆，也因此對學習的目標感到迷惘，
看了胡程維前輩寫的三十天寫三十個挑戰後https://medium.com/unorthodox-paranoid/takeaways-from-js30-challenge-b571c8db862，
我也想來嘗試一下只使用原生 JS 來完成各種功能，以增進自身對於 JS 的熟悉度，而不是依賴各種套件來輕鬆完成，卻不明白套件本身的運作原理。

<h1>Day-1 keysounds</h1>

使用了
function(e){
    console.log(e);
}
來監視與測試觸發事件

e 是一個特殊保留用詞
用於保存當前的事件資訊
比如 e.keyCode 可查詢按鍵對應的數字

在本次練習中使用了e抓取addEventListener的動作，過濾掉不必要的訊息後
使用 removeTransitionend(e)來監聽css中 transform的變動
此function用於當transform結束後，立即刪除名為playing的class

const element = document.quertSelector(`div[any]`)
用於抓取符合 element 與自定義目標的元素

element.classList.?
用於增刪查改 element 的 class

window.addEventListener("action", any)
用於監聽事件

array.forEach(element or function)
遍歷該陣列

<h1>Day-2 clock</h1>
