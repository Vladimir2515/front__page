// Инициализируем Swiper
const swiper = new Swiper('.departments__slider', {
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	spaceBetween: 20
});


const slider = new Swiper('.clients__swiper', {
	// Navigation arrows

	spaceBetween: 30,
	observer: true,
	observeParents: true,
	observeSlideChildren: true,
	slidesPerView: 2.5,
});

function readMore() {
	var dots = document.getElementById("dots");
	var more = document.getElementById("more");
	var click = document.getElementById("click");

	if (dots.style.display === "none") {
		dots.style.display = "inline";
		click.innerHTML = "Read more";
		more.style.display = "none";
	} else {
		dots.style.display = "none";
		click.innerHTML = "Hide";
		more.style.display = "inline";
	}
}