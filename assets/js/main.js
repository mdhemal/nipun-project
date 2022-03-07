(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile_menu',
	meanScreenWidth: "991"
});

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

//mobile side menu
$('.side-toggle').on('click', function () {
	$('.side-info').addClass('info-open');
	$('.offcanvas-overlay').addClass('overlay-open');
})

$('.side-info-close,.offcanvas-overlay').on('click', function () {
	$('.side-info').removeClass('info-open');
	$('.offcanvas-overlay').removeClass('overlay-open');
})
// data background
$("[data-background").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})
// data background color
$("[data-bg-color]").each(function(){
	$(this).css("background-color",$(this).attr("data-bg-color"))
})

	$('.sd-transmission-gallery-active').slick({
	  centerMode: true,
	  centerPadding: '264px',
	  slidesToShow: 3,
	  spaceBetween: 30,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 1
	      }
	    }
	  ]
	});
	var teachingBookListActive = new Swiper(".teaching-book-list-active", {
        slidesPerView: 6,
        spaceBetween: 45,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
})(jQuery);