$(function () {
	$('#nav-collapse').click(function () {
		$('#nav-links').slideToggle(500);
	});

	$('#nav-links>').click(function () {
		$('#nav-links').slideToggle(500);
	});
});

$(window).scroll(function () {
	$('#nav-links').slideUp(200);
	var position = $(window).scrollTop();
	var page = ($(window).height())
	if (position >= page - $('#nav-brand').height()) {
		$('#nav-collapse').removeClass('text-white');
		$('#nav-collapse').addClass('text-black');
		$('#brand-logo>img').attr('src', 'img/logo/logo_black.png');
	}
	else {
		$('#nav-collapse').removeClass('text-black');
		$('#nav-collapse').addClass('text-white');
		$('#brand-logo>img').attr('src', 'img/logo/logo_white.png');
	}

})
