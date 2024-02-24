/*
 *      Arbeit Studio © 2024
 *      The Genesis Framework
 *      https://github.com/arbeitstudio/genesis.git (arbeitstudio/genesis)
 *      Maintainer: Ferit Yiğit BALABAN <fyb@fybx.dev>
 *
 *      genesis/scripts/galleries.js
 */
const galleryClasses = ['shiny', 'cmv'];

function processGallery(gallery) {
	const cards = Array.from(document.querySelectorAll('*')).filter((el) =>
		Array.from(el.classList).some((className) => className.startsWith('card-'))
	);

	const equalizeWidth = gallery.hasAttribute('data-equalize-width');
    const equalizeHeight = gallery.hasAttribute('data-equalize-height');
	const keepSameHeight = cards.length > 0 && gallery.hasAttribute('data-keep-same-height');

	if (equalizeWidth) {
		cards.forEach((card) => (card.style.width = gallery.dataset.equalizeWidth));
	} else if (equalizeHeight) {
        cards.forEach((card) => (card.style.height = gallery.dataset.equalizeHeight));
    } else if (keepSameHeight) {
		const longestHeight = Math.max(...cards.map((card) => card.offsetHeight));
        console.log(...cards.map((card) => card.offsetHeight));
		cards.forEach(
			(card) => {
                card.style.height = card.offsetHeight < longestHeight ? `${longestHeight}px` : card.style.height;
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