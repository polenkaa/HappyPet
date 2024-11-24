const burgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");

burgerMenu.addEventListener("click", function () {
	mobileMenu.classList.toggle("active");
	burgerMenu.classList.toggle("open");
});

mobileMenu.addEventListener("click", function () {
	mobileMenu.classList.remove("active");
	burgerMenu.classList.remove("open");
});
