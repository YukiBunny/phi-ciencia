$(function () {
	$('.servicios_despl>h3').click(function () {
		$(this).siblings('p').slideToggle(500);
		$(this).children('i').toggleClass('fa-caret-down');
		$(this).children('i').toggleClass('fa-caret-up')
	});
	$('#nosotros_despl>h2').click(function () {
		var div = $(this).siblings('div');
		if (div.css('display') == 'none') {
			$('#nosotros_box').animate({ 'min-height': div.height() + $(this).outerHeight(true) }, 500);
		}
		else {
			$('#nosotros_box').animate({ 'min-height': '50vh' }, 500);
		}
		div.slideToggle(500);
		$(this).children('i').toggleClass('fa-caret-down');
		$(this).children('i').toggleClass('fa-caret-up');
	});
});
