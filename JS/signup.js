// var $inp = $('#password');
// $('#eye').on('mousedown', function () {
//     $inp.attr('type', 'text')
// });
// $('#eye').on('mouseup', function () {
//     $inp.attr('type', 'password')
// });


window.addEventListener("DOMContentLoaded", (evenr) => {
    let eyeIcon = document.getElementById('eyeIcon');
    let password = document.getElementById('password');
    if (eyeIcon) {

        eyeIcon.innerHTML = `<i class="fa-solid fa-eye-slash" style="color: #9f9f9f;"></i>`;

        eyeIcon.addEventListener('mousedown', function () {
            password.type = "text";
            eyeIcon.innerHTML = `<i class="fa-solid rwd fa-eye" style="color: #9f9f9f;"></i>`;
        });

        eyeIcon.addEventListener('mouseup', function () {
            password.type = "password";
            eyeIcon.innerHTML = `<i class="fa-solid fa-eye-slash" style="color: #9f9f9f;"></i>`;
        });
    }
});