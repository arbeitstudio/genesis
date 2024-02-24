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
