$(document).ready(function() {
	// header js===================
	const navbarMenu = document.getElementById("menu");
	const burgerMenu = document.getElementById("burger");
	const bgOverlay = document.querySelector(".overlay");

	// Show Menu when Click the Burger
	// Hide Menu when Click the Overlay
	if (burgerMenu && navbarMenu && bgOverlay) {
		burgerMenu.addEventListener("click", () => {
			navbarMenu.classList.toggle("is-active");
			bgOverlay.classList.toggle("is-active");
		});

		bgOverlay.addEventListener("click", () => {
			navbarMenu.classList.toggle("is-active");
			bgOverlay.classList.toggle("is-active");
		});
	}

	// Hide Menu when Click the Links
	document.querySelectorAll(".menu-link").forEach((link) => {
		link.addEventListener("click", () => {
			navbarMenu.classList.remove("is-active");
			bgOverlay.classList.remove("is-active");
		});
	});



	$('.nav-item .nav-item-title').click(function(){
		$(this).next().slideToggle();
		$(this).toggleClass('active');
		$(this).parent().toggleClass('active');
	});

	$('.alert-sticky .close').click(function() {
		$(this).parents('.alert-sticky').remove();
	});


	//hero-mob slick slider=======
	const slick = {
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll:1
	};
	
	$(() => {
		const win = $(window);
		const slider = $(".hero-mob-slider");

		win.on("load resize", () => {
			if (win.width() < 991) {
				slider.not(".slick-initialized").slick(slick);
			} else if (slider.hasClass("slick-initialized")) {
				slider.slick("unslick");
			}
		});
	});

	//card post-area slick slider=======
	const init = {
		arrows: false,
		// centerMode: true,
		// centerPadding: '50px',
		arrows: false,
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true
	};

	$(() => {
		const win = $(window);
		const slider = $(".post-card-slider");

		win.on("load resize", () => {
			if (win.width() < 991) {
				slider.not(".slick-initialized").slick(init);
			} else if (slider.hasClass("slick-initialized")) {
				slider.slick("unslick");
			}
		});
	});
});