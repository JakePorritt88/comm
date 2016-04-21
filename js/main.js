$(document).ready(function() {
	$(window).scroll(function() {
	  if( $(window).scrollTop() > 740 ) {
		$('.menu').addClass('sticky');
	  } else {
		$('.menu').removeClass('sticky');
	  };
  
	  if( $(window).scrollTop() > 900 ) {
		$('.menu').addClass('expand');
	  } else {
		$('.menu').removeClass('expand');
	  };
	  
	   if( $(window).scrollTop() > 1700 ) {
		$('.menu').addClass('remove');
	  } else {
		$('.menu').removeClass('remove');
	  };
	  
	});
});
