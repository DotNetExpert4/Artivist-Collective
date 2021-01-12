jQuery(function ($) {
	'use strict';
	
	// Mean Menu JS
	jQuery('.mean-menu').meanmenu({ 
		meanScreenWidth: "991"
	});

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.nav-area, mean-bar').addClass("is-sticky");
		}
		else{
			$('.nav-area, mean-bar').removeClass("is-sticky");
		}
	});
	
	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Navbar JS
	$('.navbar .navbar-nav li a').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 100
		}, 1500);
		e.preventDefault();
	});
	$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
			$(this).collapse('hide');
		}
	});
	$('.navbar .navbar-nav li a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
		$('.burger-menu').removeClass('active');
	});

	// Preloader
	jQuery(window).on('load', function () {
		$('.preloader').fadeOut()
	})
	
	// Sidebar Modal
	$(".burger-menu").on('click',  function() {
		$('.sidebar-modal').toggleClass('active');
	});
	$(".sidebar-modal-close-btn").on('click',  function() {
		$('.sidebar-modal').removeClass('active');
	});
	
	// Home Slider
	$('.home-slider').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		mouseDrag: true,
		items:1,
		autoHeight:true,
		dots: false,
		autoplay: true,
		smartSpeed: 500,
		autoplayHoverPause: true,
		navText: [
			"<i class='flaticon-curve-arrow'></i>",
			"<i class='flaticon-curve-arrow-1'></i>",
		],
	});

	//Slider Text Animation
	$(".home-slider").on("translate.owl.carousel", function(){
		$(".slider-content span, .slider-content h1, .slider-content .typewrite").removeClass("animated fadeInRight").css("opacity", "0");
		$(".slider-content p").removeClass("animated lightSpeedIn").css("opacity", "0");
		$(".slider-content a").removeClass("animated fadeInDown").css("opacity", "0");
	});
	
	$(".home-slider").on("translated.owl.carousel", function(){
		$(".slider-content span, .slider-content h1, .slider-content .typewrite").addClass("animated fadeInRight").css("opacity", "1");
		$(".slider-content p").addClass("animated lightSpeedIn").css("opacity", "1");
		$(".slider-content a").addClass("animated fadeInDown").css("opacity", "1");
	});

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});
	
	// Tabs
	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li a').on('click', function (g) {
			var tab = $(this).closest('.tab'), 
			index = $(this).closest('li').index();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});
	})(jQuery);

	// Overview Image Slider
	$('.overview-image-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 1
			},
			1200: {
				items: 1
			}
		}
	});

	// Events Image Slider
	$('.events-image-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		navText: [
			"<i class='flaticon-left-arrow'></i>",
			"<i class='flaticon-right-arrow'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2,
				margin:30,
			},
			992: {
				items: 1,
			},
			1200: {
				items: 1,
			}
		}
	});

	// donors Slider
	$('.donors-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		margin: 30,
		navText: [
			"<i class='flaticon-left'></i>",
			"<i class='flaticon-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
	
	// Team Slider
	$('.team-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		margin: 30,
		navText: [
			"<i class='flaticon-left'></i>",
			"<i class='flaticon-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			1024: {
				items: 3
			},
			1200: {
				items: 3
			}
		}
	});

	// FAQ Accordion
	$(function() {
		$('.accordion').find('.accordion-title').on('click', function(){
			// Adds Active Class
			$(this).toggleClass('active');
			// Expand or Collapse This Panel
			$(this).next().slideToggle('fast');
			// Hide The Other Panels
			$('.accordion-content').not($(this).next()).slideUp('fast');
			// Removes Active Class From Other Titles
			$('.accordion-title').not($(this)).removeClass('active');		
		});
	});
	
	// Testimonials Slider
	$('.testimonials-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		margin: 30,
		navText: [
			"<i class='flaticon-curve-arrow'></i>",
			"<i class='flaticon-curve-arrow-1'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
	});

	// Blog Slider
	$('.blog-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		margin: 30,
		navText: [
			"<i class='flaticon-curve-arrow-1'></i>",
			"<i class='flaticon-curve-arrow'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});

	// Subscribe form
	$(".newsletter-form").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
		// handle the invalid form...
			formErrorSub();
			submitMSGSub(false, "Please enter your email correctly.");
		} else {
			// everything looks good!
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === "success") {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$(".newsletter-form")[0].reset();
		submitMSGSub(true, "Thank you for subscribing!");
		setTimeout(function() {
			$("#validator-newsletter").addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$(".newsletter-form").addClass("animated shake");
		setTimeout(function() {
			$(".newsletter-form").removeClass("animated shake");
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = "validation-success";
		} else {
			var msgClasses = "validation-danger";
		}
		$("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
	}
	// AJAX MailChimp
	$(".newsletter-form").ajaxChimp({
		url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
		callback: callbackFunction
	});

	// Sidebar Example Demo Modal
	$(".sidebar-demo-control").on('click',  function() {
		$('.example-demo-modal').toggleClass('active');
	});
	$(".example-demo-modal-control").on('click',  function() {
		$('.example-demo-modal').removeClass('active');
	});

	// Go to Top
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});  
		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
	});

	//Target
	jQuery('.target-bar').each(function() {
		jQuery(this).find('.progress-content').animate({
		width:jQuery(this).attr('data-percentage')
		},2000);
		
		jQuery(this).find('.progress-number-mark').animate(
		{left:jQuery(this).attr('data-percentage')},
		{
			duration: 2000,
			step: function(now, fx) {
			var data = Math.round(now);
			jQuery(this).find('.percent').html(data + '%');
			}
		});  
	});



	

	// Count Time JS
	function makeTimer() {
		var endTime = new Date("november  30, 2020 17:00:00 PDT");			
		var endTime = (Date.parse(endTime)) / 1000;
		var now = new Date();
		var now = (Date.parse(now) / 1000);
		var timeLeft = endTime - now;
		var days = Math.floor(timeLeft / 86400); 
		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
		if (hours < "10") { hours = "0" + hours; }
		if (minutes < "10") { minutes = "0" + minutes; }
		if (seconds < "10") { seconds = "0" + seconds; }
		$("#days").html(days + "<span>Days</span>");
		$("#hours").html(hours + "<span>Hours</span>");
		$("#minutes").html(minutes + "<span>Minutes</span>");
		$("#seconds").html(seconds + "<span>Seconds</span>");
	}
	setInterval(function() { makeTimer(); }, 300);

	// Events Slider
	$('.events-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		margin: 20,
		navText: [
			"<i class='flaticon-left'></i>",
			"<i class='flaticon-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 2
			}
		}
	});
}(jQuery));









