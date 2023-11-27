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
            } else if(entry.target.classList.contains("anim-gallery-staggered-appear")) {
                applyCssToChildren(entry, "staggered-appear");
            } else if (entry.target.classList.contains("anim-slide-left-appear")) {
            }
        }
    });
});

function applyDelayToChildren(parent, multiplier) {
    const children = Array.from(parent.children);
    let i = 1;
    children.forEach(child => {
        child.style.transitionDelay = `${i * multiplier}s`;
        i++;
    });
}

function applyCssToChildren(parent, cssClass) {
    const children = Array.from(parent.target.children);
    children.forEach(child => {
        child.classList.add(cssClass);
    });
}

let targets = document.querySelectorAll(query);
targets.forEach(target => {
    observer.observe(target);
});