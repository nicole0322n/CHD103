// 漢堡點擊
$(document).ready(function () {
    // 點擊 .hb 顯示 .title 和 .nav_bg
    $('.hb').click(function () {
        $('.title').toggleClass('open');
        $('.nav_bg').toggleClass('open');
    });

    // 點擊 .nav_bg 關閉 .title 和 .nav_bg
    $('.nav_bg').click(function () {
        $('.title').removeClass('open');
        $('.nav_bg').removeClass('open');
    });
});
