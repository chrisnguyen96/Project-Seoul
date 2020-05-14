$(document).ready(function () {
	// Slick
	$('#single-item').slick({
		nextArrow: '.next-slide__btn',
		prevArrow: '.prev-slide__btn'
	});

	// Back to top
	$(window).scroll(function(){ 
		if ($(this).scrollTop() > 150) {
			$('#back-to-top').fadeIn();
		} else { 
			$('#back-to-top').fadeOut();
		} 
	}); 
	$('#back-to-top').click(function(){ 
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false; 
	}); 
	// End back to top
	
	
});


$(document).ready(function () {
	
	// Show Hidden Menu
	$(".icon-menu").click(function(){
		$(".icon-menu").toggleClass("change");
		$(".menu-mobile").toggleClass("menu-mobile--show");
	});

	$( ".menu-mobi__item.li-one" ).click(function( event ) {
		$(".menu-mobile__sub-list.li-one").slideToggle("slow");
	});
	$( ".menu-mobi__item.li-two" ).click(function( event ) {
		$(".menu-mobile__sub-list.li-two").slideToggle("slow");
	});
	$( ".menu-mobi__item.li-three" ).click(function( event ) {
		$(".menu-mobile__sub-list.li-three").slideToggle("slow");
	});
});
