/*
 *      Arbeit Studio © 2024
 *      The Genesis Framework
 *      https://github.com/arbeitstudio/genesis.git (arbeitstudio/genesis)
 *      Maintainer: Ferit Yiğit BALABAN <fyb@fybx.dev>
 *
 *      genesis/scripts/animations.js
 */

const animationCN = [
    "anim-slide-right-appear",
    "anim-slide-up-appear",
    "anim-appear",
    "anim-slide-down-appear",
    "anim-slide-in-place-right",
    "anim-gallery-staggered-appear",
    "anim-slide-left-appear"
];

function buildQuery() {
    let query = "";
    animationCN.forEach((an) => {
        query += `.${an},`;
    });
    return query;
}

function addMatchingFunction(e) {
    if (e.isIntersecting)
        animationCN.forEach((an) => {
            if (e.target.classList.contains(an))
                e.target.classList.add(an.replace("anim-", ""));
        });
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => addMatchingFunction(entry));
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

function preprocessTargets() {
    const targets = document.querySelectorAll(".anim-gallery-staggered-appear");
    targets.forEach(parent => {
        applyDelayToChildren(parent, 0.1);
    });
}

var genesis = typeof genesis !== 'undefined' ? genesis : (genesis = 313, console.log("Close the world, .txen eht nepO :: genesis by arbeit studio"), genesis);
preprocessTargets();
const query = buildQuery();
let targets = document.querySelectorAll(query);
targets.forEach(target => {
    observer.observe(target);
});