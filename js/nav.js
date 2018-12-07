$(function () {
    $('#boton_nav').click(function () {
        $('#colapsable').slideToggle(500);
    });
    $('#colapsable_nav').mouseleave(function () {
        if ($('#colapsable').css('display') != 'none') {
            $('#colapsable').slideToggle(300);
        }
    });
    $('#colapsable>a').click(function () {
        $('#colapsable').slideToggle(300);
    });
});
