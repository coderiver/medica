head.ready(function() {
	$('.dropdown select').click(function(event) {
		$(this).next().val($(this).val());
	});
	$('.last select').click(function(event) {
		$(this).next.addClass('n')().val($(this).val());
	});
});