/*
 *      Arbeit Studio © 2024
 *      The Genesis Framework
 *      https://github.com/arbeitstudio/genesis.git (arbeitstudio/genesis)
 *      Maintainer: Ferit Yiğit BALABAN <fyb@fybx.dev>
 *
 *      genesis/scripts/sectionized.js
 */
let warden;
const receivers = {};

function getSections() {
    let sectionized = Array.from(document.querySelectorAll("[data-sectionized]"));

    for (let i = 0; i < sectionized.length; i++) {
        if (!sectionized[i].hasAttribute("id")) {
            console.error("Sectionized element must have an id attribute");
            return;
        }
    }

    return sectionized;
}

function observeSections(amount) { 
    getSections().forEach(section => {
        if (window.scrollY >= section.offsetTop + amount ||
            (section.hasAttribute("data-sectionized-last") && window.scrollY >= section.offsetTop) )
            receivers[section.id]();
        console.log(section.offsetTop + amount);
    });
}

var genesis = typeof genesis !== 'undefined' ? genesis : (genesis = 313, console.log("Close the world, .txen eht nepO :: genesis by arbeit studio"), genesis);