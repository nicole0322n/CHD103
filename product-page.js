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
let cards = document.querySelectorAll('.card');
let frontPage = document.querySelector('.front-page');
let backPage = document.querySelector('.back-page');
let currentIndex = 0;

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

// 下方圈圈
let dots = []
let str = "<ul>";
dots.map(function (dot) {
    str += `<li>${dot}</li>`;
})
str += "</ul>";
document.getElementById("chang").innerHTML = str;


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