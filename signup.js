var $inp = $('#password');
$('#eye').on('mousedown', function () {
    $inp.attr('type', 'text')
});
$('#eye').on('mouseup', function () {
    $inp.attr('type', 'password')
});
