$(document).ready(function() {
	$('.btMenu').click(function() {
		// Changes Class to Open and changes icon
		$('.btMenu').toggleClass('open');
	});
	
	$('.btMenu').click(function() {
		$('.menu-links').slideToggle("4000");
	});
});