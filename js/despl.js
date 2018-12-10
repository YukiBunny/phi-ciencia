$(function () {
	$('.servicios_despl>h3').click(function () {
		$(this).siblings('p').slideToggle(500);
		$(this).children('i').toggleClass('fa-caret-down');
		$(this).children('i').toggleClass('fa-caret-up')
	});
	$('#nosotros_despl>h2').click(function () {
		var div = $(this).siblings('div');

		var isHidden = div.css('display') == 'none';
		var newHeight = div.height() + $(this).outerHeight(true); // div interno + titulo(c/ margen)
		var actualHeight = $('#nosotros_box').height(); // div externo
		if (isHidden) { // COLAPSADO -> DESPLEGADO
			if (actualHeight < newHeight) {
				$('#nosotros_box').animate({ 'min-height': newHeight }, 500); // Altura exterior
			}
			else {
				div.height(div.height() + actualHeight - newHeight); // Altura texto
			}
		}
		else { // DESPLEGADO -> COLAPSADO
			$('#nosotros_box').animate({ 'min-height': '400px' }, 500);
			div.height('auto');
		}
		div.slideToggle(500);
		$(this).children('i').toggleClass('fa-caret-down');
		$(this).children('i').toggleClass('fa-caret-up');
	});
});
