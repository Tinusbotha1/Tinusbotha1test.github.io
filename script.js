// Home carousel
$(".home-carousel").owlCarousel({
	loop: true,
	margin: 0,
	dots: true,
	nav: false,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 1,
		},
		1000: {
			items: 1,
		},
	},
});

//Navbar
window.addEventListener("scroll", function () {
	let navbar = document.getElementById("navbar");
	//toggles fixed class in navbar on scroll
	navbar.classList.toggle("fixed", this.window.scrollY > 0);
});

//Nav Buttons
let menuBtn = document.querySelector(".menu-btn");
let searchBtn = document.querySelector(".searchbtn");
let cartBtn = document.querySelector(".cartbtn");
let darkBtn = document.querySelector(".darkbtn");

searchBtn.onclick = function () {
	//toggles active class in search form on click
	document.getElementById("search-form").classList.toggle("active");

	//changes search button on click
	if (document.getElementById("search-form").classList.contains("active")) {
		searchBtn.classList.remove("bx-search-alt-2");
		searchBtn.classList.add("bx-x");
	} else {
		searchBtn.classList.remove("bx-x");
		searchBtn.classList.add("bx-search-alt-2");
	}
};
cartBtn.onclick = function () {
	//toggles active class in search form on click
	document.getElementById("cart").classList.toggle("active");

	//changes cart button on click
	if (document.getElementById("cart").classList.contains("active")) {
		cartBtn.classList.remove("bx-cart");
		cartBtn.classList.add("bx-x");
	} else {
		cartBtn.classList.remove("bx-x");
		cartBtn.classList.add("bx-cart");
	}
};

darkBtn.onclick = function () {
	//toggles dark mode on click
	document.body.classList.toggle("dark-mode");

	//changes moon button to sun on click
	if (document.body.classList.contains("dark-mode")) {
		darkBtn.classList.remove("bx-moon");
		darkBtn.classList.add("bx-sun");
	}
	//changes back to moon button on click
	else {
		darkBtn.classList.remove("bx-sun");
		darkBtn.classList.add("bx-moon");
	}
};

//Menu-Section
let MenuTabs = document.querySelector(".menu-tabs");
MenuTabs.addEventListener("click", function (e) {
	//if clicked tab does not contain active class
	if (
		e.target.classList.contains("menu-tab-item") &&
		!e.target.classList.contains("active")
	) {
		//Gets data attribute
		const target = e.target.getAttribute("data-target");
		//removes active class from tabs
		MenuTabs.querySelector(".active").classList.remove("active");

		//Add active class from clicked tab
		e.target.classList.add("active");

		let menuSection = document.querySelector(".menu-section");

		//removes show class from active tap content
		menuSection
			.querySelector(".menu-tab-content.show")
			.classList.remove("show");

		//adds show class to clicked content
		menuSection.querySelector(target).classList.add("show");
	}
	//if clicked tab contains active class
	else {
		return; //Returns nothing
	}
});

//NB ADD CODE TO OPEN THE FULL MENU

// Events carousel
$(".events-carousel").owlCarousel({
	loop: true,
	margin: 30,
	dots: true,
	nav: false,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 2,
		},
	},
});

//chefs choice carousel
$(".chefs-carousel").owlCarousel({
	loop: true,
	margin: 5,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 3,
		},
	},
});
