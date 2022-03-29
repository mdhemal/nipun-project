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

	var swiper = new Swiper(".sd-slider-main-thumb-slider", {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,
		navigation: {
			nextEl: ".sd-slider-main-thumb-navigation-next",
			prevEl: ".sd-slider-main-thumb-navigation-prev",
		},
		pagination: {
			el: ".sd-slider-main-pagination",
			clickable: true,
		},
		breakpoints: {
			992: {
				slidesPerView: 3,
			},
			768: {

			},
			568: {
				slidesPerView: 2,
			},
		}
	});
	var swiper2 = new Swiper(".mySwiper2", {
		loop: true,
		spaceBetween: 10,
		slidesPerView: 1,
		thumbs: {
			swiper: swiper,
		},
	});

	var awaking = new Swiper(".awaking-active", {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,
		freeMode: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".sd-awaking-main-thumb-navigation-next",
			prevEl: ".sd-awaking-main-thumb-navigation-prev",
		},
		pagination: {
			el: ".sd-awaking-main-pagination",
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
				navigation: false,
			},
		}
	});
	var awaking2 = new Swiper(".awaking-active-2", {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,
		freeMode: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".sd-awaking-main-thumb-navigation-next-2",
			prevEl: ".sd-awaking-main-thumb-navigation-prev-2",
		},
		pagination: {
			el: ".sd-awaking-main-pagination-3",
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
				navigation: false,
			},
		}
	});
	var awaking3 = new Swiper(".awaking-active-3", {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,
		freeMode: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".sd-awaking-main-thumb-navigation-next-3",
			prevEl: ".sd-awaking-main-thumb-navigation-prev-3",
		},
		pagination: {
			el: ".sd-awaking-main-pagination-3",
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
				navigation: false,
			},
		}
	});
	var awaking4 = new Swiper(".awaking-active-4", {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,
		freeMode: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".sd-awaking-main-thumb-navigation-next-4",
			prevEl: ".sd-awaking-main-thumb-navigation-prev-4",
		},
		pagination: {
			el: ".sd-awaking-main-pagination-4",
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
				navigation: false,
			},
		}
	});
	var awaking4 = new Swiper(".awaking-active-5", {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,
		freeMode: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".sd-awaking-main-thumb-navigation-next-5",
			prevEl: ".sd-awaking-main-thumb-navigation-prev-5",
		},
		pagination: {
			el: ".sd-awaking-main-pagination-5",
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
				navigation: false,
			},
		}
	});
	var evolution = new Swiper(".evolution-active", {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,
		freeMode: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".sd-evolution-main-thumb-navigation-next-3",
			prevEl: ".sd-evolution-main-thumb-navigation-prev-3",
		},
		pagination: {
			el: ".sd-evolution-main-pagination-3",
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
				navigation: false,
			},
		}
	});
	var evolution2 = new Swiper(".evolution-active-2", {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,
		freeMode: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".sd-evolution-main-thumb-navigation-next-3-2",
			prevEl: ".sd-evolution-main-thumb-navigation-prev-3-2",
		},
		pagination: {
			el: ".sd-evolution-main-pagination-3-2",
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
				navigation: false,
			},
		}
	});


	var teachingBookListActive = new Swiper(".teaching-book-list-active", {
		slidesPerView: 1,

		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-book-next',
			prevEl: '.swiper-book-prev',
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 6,
			},
			578: {
				slidesPerView: 3,
			}
		}
	});

	var swiper = new Swiper(".sd-teaching-testimonial-slider-active", {
		slidesPerView: 1,
		spaceBetween: 20,
		grabCursor: true,
		navigation: {
			nextEl: '.sd-teaching-testimonial-navigation-next',
			prevEl: '.sd-teaching-testimonial-navigation-prev',
		},
		pagination: {
			el: ".sd-teaching-testimonial-pagination",
			clickable: true,
		},
		breakpoints: {
			1400: {
				spaceBetween: 120,
			},
			992: {
				spaceBetween: 60,
			},
			768: {
				spaceBetween: 40,
				slidesPerView: 2,
			}
		}
	});

	var swiper = new Swiper(".sd-yoga-test-slider-active", {
		slidesPerView: 1,
		spaceBetween: 60,
		grabCursor: true,
		navigation: {
			nextEl: '.sd-yoga-navigation-next',
			prevEl: '.sd-yoga-navigation-prev',
		},
		// responsive breakpoints
		breakpoints: {
			992: {
				slidesPerView: 2,
				spaceBetween: 30,
			}
		}
	});






})(jQuery);