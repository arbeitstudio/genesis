/*
 *      Arbeit Studio © 2023
 *      The Genesis Framework
 *      https://github.com/arbeitstudio/genesis.git (arbeitstudio/genesis)
 *      Maintainer: Ferit Yiğit BALABAN <fyb@fybx.dev>
 *
 *      genesis/scripts/animations.js
 */

// List of available animations:
// anim-slide-down-appear
// anim-slide-right-appear
// anim-slide-up-appear
// anim-appear

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("anim-slide-right-appear")) {
                entry.target.classList.add("slide-right-appear");
            } else if (entry.target.classList.contains("anim-slide-up-appear")) {
                entry.target.classList.add("slide-up-appear");
            } else if (entry.target.classList.contains("anim-appear")) {
                entry.target.classList.add("appear");
            } else if (entry.target.classList.contains("anim-slide-down-appear")) {
                entry.target.classList.add("slide-down-appear");
            } else if (entry.target.classList.contains("anim-slide-in-place-right")) {
                entry.target.classList.add("slide-in-place-right");
            }
        }
    });
});

const query = ".anim-slide-down-appear,.anim-slide-right-appear,.anim-slide-up-appear,.anim-appear,.anim-slide-in-place-right";
let targets = document.querySelectorAll(query);
targets.forEach(target => {
    observer.observe(target);
});