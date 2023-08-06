// 下單數量加減
window.addEventListener("load", cal, false);

// 初始化數量和單價的陣列
let nums = [1, 1];
const prices = [650, 750];

// 增加數量的函式
function btnPlus(index) {
    nums[index - 1]++;
    document.getElementById("num" + index).value = nums[index - 1];
    cal(index);
}

// 減少數量的函式
function btnMinus(index) {
    if (nums[index - 1] > 1) {
        nums[index - 1]--;
        document.getElementById("num" + index).value = nums[index - 1];
        cal(index);
    }
}

// 總金額計算
function cal(index) {
    let totalElement = document.getElementById("total" + index);
    let total = prices[index - 1] * nums[index - 1];
    totalElement.textContent = total;
}