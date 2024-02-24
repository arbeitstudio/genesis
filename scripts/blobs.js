/*
 *      Arbeit Studio © 2024
 *      The Genesis Framework
 *      https://github.com/arbeitstudio/genesis.git (arbeitstudio/genesis)
 *      Maintainer: Ferit Yiğit BALABAN <fyb@fybx.dev>
 *
 *      genesis/scripts/blobs.js
 */
let blobPositionAlgorithm;
let blobContainerTuples = [];
const body = document.body;

function readDocument() {
	// default position algorithm is absolute
	if (body.getAttribute('data-blob-algorithm') == 'relative') {
		blobPositionAlgorithm = positionRelative;
		window.addEventListener('scroll', updater);
	} else {
		blobPositionAlgorithm = positionAbsolute;
	}
	window.addEventListener('resize', updater);
}

function injectSitewideStyle() {
	const style = body.style;
	style.position = 'relative';
	style.zIndex = '0';
}

function positionRelative(container, image) {
	const rect = container.getBoundingClientRect();
	image.style.top = `${rect.bottom}px`;

    // shit's crazy bad, can't think of another solution
    if (image.complete)
        this.style.left = `${rect.left + rect.width / 2 - this.width / 2}px`;
    else {
        setTimeout(() => { positionRelative(container, image) }, 100);
    }
}

function positionAbsolute(container, image) {
	image.style.top = `${container.offsetTop}px`;
	if (image.complete)
        image.style.left = `${container.offsetLeft + container.offsetWidth / 2 - image.width / 2}px`;
    else {
        setTimeout(() => { positionAbsolute(container, image) }, 100);
    }
}

function updater() {
	blobContainerTuples.forEach((tuple) => {
		blobPositionAlgorithm(tuple.container, tuple.img);
	});
}
