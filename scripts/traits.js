/*
 *      Arbeit Studio © 2024
 *      The Genesis Framework
 *      https://github.com/arbeitstudio/genesis.git (arbeitstudio/genesis)
 *      Maintainer: Ferit Yiğit BALABAN <fyb@fybx.dev>
 *
 *      genesis/scripts/traits.js
 */
const traitClasses = "trait-gradient";

function preprocessTraitables() {
    [...document.getElementsByClassName(traitClasses)].forEach(element => {
        if (element.classList.contains("trait-gradient")) {
            renderTraitGradient(element);
        }
    })
}

function renderTraitGradient(element) {
    const angle = element.getAttribute("data-angle");
    const gradient = element.getAttribute("data-gradient");
    element.style.backgroundImage = `linear-gradient(${angle}, ${gradient})`;
}

var genesis = typeof genesis !== 'undefined' ? genesis : (genesis = 313, console.log("Close the world, .txen eht nepO :: genesis by arbeit studio"), genesis);
preprocessTraitables();