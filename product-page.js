// 加入&取消收藏
// 頁面載入後執行
window.onload = function () {

    // 找到 id=heart 的元素
    function switchFavorite() {
        let heart = document.getElementById("heart");
        if (heart.title === "加入收藏") {
            heart.src = "img/product-page/heart_love.svg";
            heart.title = "取消收藏";
        } else {
            heart.src = "img/product-page/heart.png";
            heart.title = "加入收藏";
        }
    } heart.onclick = switchFavorite;
}

// 下單數量加減
function $id(id) {
    return document.getElementById(id)
}
function init() {
    $id("btnMinus0").onclick = function (e) {
        let num = e.target.nextElementSibling;
        if (num.value == 0) {
            return;
        }
        num.value = num.value - 1;
    }
    $id("btnPlus0").onclick = function (e) {
        let num = e.target.previousElementSibling;
        num.value = parseInt(num.value) + 1;
    };
}
window.addEventListener("load", init, false);

