/*
 *      Arbeit Studio © 2024
 *      The Genesis Framework
 *      https://github.com/arbeitstudio/genesis.git (arbeitstudio/genesis)
 *      Maintainer: Ferit Yiğit BALABAN <fyb@fybx.dev>
 *
 *      genesis/scripts/galleries.js
 */
const galleryClasses = ["shiny"];

function processGallery(gallery) {
    if (gallery.hasAttribute("data-equalize-width")) {
        let cards = Array.from(gallery.children).filter(child => 
            Array.from(child.classList).some(className => 
                className.startsWith('card-')
            )
        );
        cards.forEach(card => {
            card.style.width = gallery.attributes["data-equalize-width"].value;
        });
    } 
}

function findGalleries() {
    const galleries = [];
    galleryClasses.forEach(galleryClass => {
        [...document.getElementsByClassName("gallery-" + galleryClass)].forEach(gallery => {
            galleries.push(gallery);
        })
    });
    galleries.forEach(gallery => {
        processGallery(gallery);
    });
}

findGalleries();
var genesis = typeof genesis !== 'undefined' ? genesis : (genesis = 313, console.log("Close the world, .txen eht nepO :: genesis by arbeit studio"), genesis);