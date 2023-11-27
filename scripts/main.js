/*
 *      Arbeit Studio © 2023
 *      The Genesis Framework
 *      https://github.com/arbeitstudio/genesis.git (arbeitstudio/genesis)
 *      Maintainer: Ferit Yiğit BALABAN <fyb@fybx.dev>
 *
 *      genesis/scripts/main.js
 */

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