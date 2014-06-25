head.ready(function() {
	$('.dropdown select').change(function(event) {
		$(this).next().val($(this).val());
	});

	$('.sort select').change(function(event) {
		$(this).next().children('a').text($(this).val());
	});

	$('.auth__menu').click(function(event) {
		$('.header__sidebar').addClass('is-active');
	});

	$('.close').click(function(event) {
		$('.header__sidebar').removeClass('is-active');
	});
});