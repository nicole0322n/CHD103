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


// 圖片輪播
let wrap = document.querySelector('.wrap');
let cards = document.querySelectorAll('card')
let frontPage = document.querySelector('.front-page');
let backPage = document.querySelector('.back-page');
let chang = document.querySelector('.chang');
let currentIndex = 0;

// 滑鼠點擊滑動圖片
let isDragStart = false;

let dragStart = () => {
    isDragStart = true;
}

let dragging = () => {
    if (!isDragStart) return;
    wrap.scrollLeft = e.pageX;
}

wrap.addEventListener("mousedown", dragStart);
wrap.addEventListener("mousemove", dragging);
// 滑鼠點擊滑動圖片 結束

// 點擊箭頭換圖片
frontPage.addEventListener('click', function () {
    cards.forEach(card => {
        cards.style.transform = `translateX(-320px)`;
    });
});
backPage.addEventListener('click', function () {
    cards.forEach(card => {
        cards.style.transform = `translateX(320px)`;
    });
});
// 點擊箭頭換圖片 結束

// 下方圈圈生成
let dots = []
let str = "<ul>";
dots.map(function (dot) {
    str += `<li>${dot}</li>`;
})
str += "</ul>";
document.getElementById("chang").innerHTML = str;
// 下方圈圈生成 結束

// chatGPT
// frontPage.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         updateCards();
//     }
// });

// backPage.addEventListener('click', () => {
//     if (currentIndex < cards.length - 1) {
//         currentIndex++;
//         updateCards();
//     }
// });

// function updateCards() {
//     cards.forEach((card, index) => {
//         const translateX = (index - currentIndex) * 300;
//         card.style.transform = `translateX(${translateX}px)`;
//     });
// }