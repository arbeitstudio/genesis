const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector("#menu")
const menuNavitems = document.querySelectorAll(".menu-navitem")

menuIcon.addEventListener("click", () => {
	menu.classList.toggle("active");
	document.body.classList.toggle("state-menu_open");

	menuNavitems.forEach(function (el) {
		el.classList.toggle("visible");
	})
});