head.ready(function() {
	$('.dropdown select').change(function(event) {
		$(this).next().val($(this).val());
	});
	$('.sort select').change(function(event) {
		$(this).next().children('a').text($(this).val());
	});
});