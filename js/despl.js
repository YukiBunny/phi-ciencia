$(function () {
	$('.servicios_despl>h3').click(function () {
		$(this).siblings('p').slideToggle(500);
		$(this).children('i').toggleClass('fa-caret-down');
		$(this).children('i').toggleClass('fa-caret-up')
	});
	$('#nosotros_despl>h2').click(function () {
		conditionalResize($(this), $(this).siblings('div'), $('#nosotros_box'), 400, 500);
		$(this).children('i').toggleClass('fa-caret-down');
		$(this).children('i').toggleClass('fa-caret-up');
	});

	function conditionalResize(trigger, colapsable, externo, altura, transicion) {
		var isHidden = colapsable.css('display') == 'none';
		var newHeight = colapsable.outerHeight(true) + $(trigger).outerHeight(true);
		var actualHeight = externo.height();

		if (isHidden) {
			if (actualHeight < newHeight) {
				externo.animate({ 'min-height': newHeight }, transicion);
			}
			else {
				colapsable.height(colapsable.height() + actualHeight - newHeight);
			}
		}
		else {
			externo.animate({ 'min-height': altura + 'px' }, 500);
			colapsable.height('auto');
		}
		colapsable.slideToggle(500);
	}
});
