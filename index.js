// banner換圖
$(document).ready(function () {
    let divWidth = $('#banner').width()
    let imgCount = $('#wrap li').length

    for (let i = 0; i < imgCount; i++) {
        $('#chang').append(`<li></li>`)
    }
    $('#chang li:first').addClass('active')

    $('#wrap li').width(divWidth)   // li 的寬度
    $('#wrap').width(divWidth * imgCount)   // ul 的寬度

    let index = 0
    let timer = setInterval(moveToNext, 5000)

    $(`#chang li`).click(function () {
        clearInterval(timer)
        index = $(this).index()

        $('#wrap').animate({
            left: index * divWidth * -1
        })

        $(this).addClass('active')
        $(`#chang li`).not(this).removeClass('active')

        timer = setInterval(moveToNext, 5000)
    })

    function moveToNext() {
        if (index < imgCount - 1) {
            index++
        } else {
            index = 0
        }

        $('#wrap').animate({
            left: index * divWidth * -1
        })

        $(`#chang li:eq(${index})`).addClass('active')
        $(`#chang li`).not(`:eq(${index})`).removeClass('active')
    }
});

// // 產品圖輪播

// let picWidth = $('#pic').width()
// let picCount = $('#item').length
// // alert(picWidth)

// for (let i = 0; i < picCount; i++) {
//     $('.chang').append(`<li></li>`)
// }
// $('.chang li:first').addClass('active')

// $('#item').width(picWidth)
// $('').()

