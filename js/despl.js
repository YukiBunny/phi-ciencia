$(function () {
	$('#servicios .collapse-trigger').click(function () {
		conditionalResize($(this), $(this).siblings('p'), $(this).parent().parent(), 300, 500);
		$(this).children('i').toggleClass('fa-caret-down');
		$(this).children('i').toggleClass('fa-caret-up')
	});
	$('#nosotros_despl>h2').click(function () {
		conditionalResize($(this), $(this).siblings('div'), $('#nosotros_box'), 400, 500);
		$(this).children('i').toggleClass('fa-caret-down');
		$(this).children('i').toggleClass('fa-caret-up');
	});

	function conditionalResize(trigger, colapsable, externo, altura) {
		var isHidden = colapsable.css('display') == 'none';
		var newHeight = colapsable.outerHeight(true) + $(trigger).outerHeight(true);
		var actualHeight = externo.height();

		if (isHidden) {
			if (actualHeight < newHeight) {
				externo.animate({ 'min-height': newHeight }, 500);
			}
			else {
				colapsable.height(colapsable.height() + actualHeight - newHeight);
			}
		}
		else {
			externo.animate({ 'min-height': altura + 'px' }, 500);
		}
		colapsable.slideToggle(500);
	}
});
