////////////////////////////////////////////////////////////////
//////////// TABLE OF CONTENT /////////////////////////////////
/////////// 1. NAVIGATION SCROLL EFFECT //////////////////////
/////////// 2. SIDENAV TOGGLER //////////////////////////////
/////////// 3. WOW SETUP ///////////////////////////////////
/////////// 4. PRELOADER SETUP ////////////////////////////
/////////// END OF TABLE OF CONTENT //////////////////////
/////////////////////////////////////////////////////////


(function ($) {

"use strict";


//////////////////////////////////////////////////////
/////////// 1. NAVIGATION SCROLL EFFECT /////////////
////////////////////////////////////////////////////



$('.side-nav-menu ul > li > a').on('click', function() {
	$('html, body').animate({scrollTop: $(this.hash).offset().top}, 1000);
	return false;
});

$('a').on('click', function() {
	$('html, body').animate({scrollTop: $(this.hash).offset().top}, 1000);
	return false;
});


///////////////////////////////////////////////
/////////// 2. SIDENAV TOGGLER ///////////////
/////////////////////////////////////////////


var navOpner = $('button.nav-collapser'),
navCloser = $('.side-navigation button.navigation-closer');

navOpner.on('click', function () {
	$('.side-navigation').css({
		'right': '0',
		'overflow': 'visible'
	});
	$(this).fadeOut();
});
navCloser.on('click', function () {
	$('.side-navigation').css({
		'right': '-290px',
		'overflow': 'hidden'
	});
	navOpner.fadeIn();
});
$('.side-nav-menu ul li a .fa-caret-down').on('click', function () {
	$('.side-nav-menu ul li ul.dropdown').slideToggle();
	return false;
});


//////////////////////////////////////
/////////// 3. WOW SETUP ////////////
////////////////////////////////////



new WOW().init();


/////////////////////////////////////////
/////////// 4. PRELOADER SETUP /////////
///////////////////////////////////////


$(document).on('ready', function() {		
	$('.preloader').delay(2000).fadeOut(500);
});


})(jQuery);
