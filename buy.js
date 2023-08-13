// 下單數量加減
window.addEventListener("load", cal, false);

// 初始化數量和單價的陣列
let nums = [1, 1];
const prices = [650, 750];

// 增加數量的函式
function btnPlus(index) {
    nums[index - 1]++;  // index1 - 1 = 陣列的第0個，num[0] = 1，++ 之後 = 2
    document.getElementById("num" + index).value = nums[index - 1];
    cal(index);
    all();
}

// 減少數量的函式
function btnMinus(index) {
    if (nums[index - 1] > 1) {
        nums[index - 1]--;
        document.getElementById("num" + index).value = nums[index - 1];
        cal(index);
        all();
    }
}

// 總金額計算
function cal(index) {
    let totalElement = document.getElementById("total" + index);
    let total = prices[index - 1] * nums[index - 1];
    totalElement.textContent = total;
    all();
}


// 總數&總金額
function all() {
    let totalNum = 0;
    let totalPrice = 0;
    for (let i = 0; i < nums.length; i++) {
        //   let nums = [1, 1];
        // const prices = [650, 750];
        totalPrice += nums[i] * prices[i];
        totalNum += nums[i];
    }

    // 抓到 id=allNum 的值
    let allNum = document.getElementById("allNum");
    let allPrice = document.getElementById("allPrice");

    // allNum 的內容  帶入 totalNum
    allNum.textContent = totalNum;
    allPrice.textContent = totalPrice;

}
