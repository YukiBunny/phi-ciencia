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

$(window).scroll(function () {
    var position = $(window).scrollTop();
    var page = ($(window).height() - 60)
    if (position >= page) {
        $('#boton_nav').addClass('scrolldown_boton');
        $('#logo').addClass('scrolldown_logo');

    }
    else {
        $('#boton_nav').removeClass('scrolldown_boton');
        $('#logo').removeClass('scrolldown_logo');
    }

})
