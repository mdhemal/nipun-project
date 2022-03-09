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
	$("[data-background").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ") ")
	})
	// data background color
	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"))
	})

	$('.sd-transmission-gallery-active').slick({
		centerMode: true,
		centerPadding: '264px',
		slidesToShow: 3,
		spaceBetween: 30,
		responsive: [
			{
				breakpoint: 1399,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '150px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '20px',
					slidesToShow: 1
				}
			}
		]
	});

	var swiper = new Swiper(".mySwiper", {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 2,
		freeMode: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".sd-slider-main-thumb-navigation-next",
			prevEl: ".sd-slider-main-thumb-navigation-prev",
		},
		pagination: {
			el: ".sd-slider-main-pagination",
			clickable: true,
		},
	});
	var swiper2 = new Swiper(".mySwiper2", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 1,
		thumbs: {
			swiper: swiper,
		},
	});


	var teachingBookListActive = new Swiper(".teaching-book-list-active", {
		slidesPerView: 6,
		spaceBetween: 45,
		navigation: {
			nextEl: '.swiper-book-next',
			prevEl: '.swiper-book-prev',
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});


})(jQuery);