$(function () {
    $('.servicios_despl>h3').click(function () {
        $(this).siblings('p').slideToggle(500);
        $(this).children('i').toggleClass('fa-caret-down');
        $(this).children('i').toggleClass('fa-caret-up')
    });
    $('#nosotros_despl>h2').click(function () {
        var h = $('#nosotros_despl').height();
        $('#nosotros_box').height(h);
        $(this).siblings('div').slideToggle(500);
        $(this).children('i').toggleClass('fa-caret-down');
        $(this).children('i').toggleClass('fa-caret-up');
    });
});