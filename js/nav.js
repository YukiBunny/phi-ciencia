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
    var page = ($(window).height())
    if (position >= page) {
        $('header').addClass('scrolldown_header');
        $('#colapsable').addClass('scrolldown_nav');
        $('#boton_nav').addClass('scrolldown_boton');
        $('#logo').addClass('scrolldown_logo');

    }
    else {
        $('header').removeClass('scrolldown_header');
        $('#colapsable').removeClass('scrolldown_nav');
        $('#boton_nav').removeClass('scrolldown_boton');
        $('#logo').removeClass('scrolldown_logo');
    }

})
