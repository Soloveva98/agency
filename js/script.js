$(function(){

	//*FIX NAV*///////////////////////////////////////

	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let navToggle = $("#navToggle");

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function() {
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if (scrollPos > introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}

	/*SMOOTH SCROLL*/////////////////////////////////////////////
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		header.removeClass("show");

		$("html, body").animate({
			scrollTop: elementOffset - 71
		}, 700);
	});

	/*BURGER - NAVTOGGLE*/////////////////////////////////////////////

	$('.burger').on('click', function(event) {
		event.preventDefault;
		$(this).toggleClass('active');
		$('.nav').toggleClass('leave');
		$('body').toggleClass('lock');
	});





});