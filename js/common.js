head.ready(function() {
	$('.dropdown select').change(function(event) {
		$(this).next().val($(this).val());
	});

	$('.sort select').change(function(event) {
		$(this).next().children('a').text($(this).val());
	});

	$('.auth__menu').click(function(event) {
		$('.header__sidebar').show();
	});

	$('.close').click(function(event) {
		$('.header__sidebar').hide();
	});

	$('.prinfo__text .read').click(function(event) {
		$('.more').slideDown();
		$('.prinfo__text .read').hide();
	});

	//main slider on the whole size of the window screen
	function divHeight() {
	  var windowHeight = $(window).height();
	  $(".js-main-screen").css({
	   height: windowHeight
	  });
	 }
	 if ($(window).width()>860 && $(window).height()>860) {
	 	divHeight();
	 }	 else {
	 	$(".js-main-screen").css({
	   height: 'auto'
	  });
	 }

	 $(window).resize(function(){
	 	if ($(window).width()>860 && $(window).height()>860) {
	 		divHeight();
	 	}	 else {
	 		$(".js-main-screen").css({
	 	  height: 'auto'
	 	 });
	 	}
	 });
});

