head.ready(function() {
	$('.dropdown select').click(function(event) {
		$(this).next().val($(this).val());
	});
});