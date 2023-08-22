// var $inp = $('#password');
// $('#eye').on('mousedown', function () {
//     $inp.attr('type', 'text')
// });
// $('#eye').on('mouseup', function () {
//     $inp.attr('type', 'password')
// });


let eye = document.querySelector(".fa-eye-slash");
let password = document.querySelector("#password");
eye.addEventListener('mousedown', function () {
    password.type = "text";
    eye.innerHTML = `<i class="fa-solid rwd fa-eye" style="color: #9f9f9f;"></i>`;
});

eye.addEventListener('mouseup', function () {
    password.type = "password";
    eye.innerHTML = `<i class="fa-solid fa-eye-slash" style="color: #9f9f9f;"></i>`;
});
