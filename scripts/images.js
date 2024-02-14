/*
 *      Arbeit Studio © 2023
 *      The Genesis Framework
 *      https://git.arbeit.studio/genesis (arbeitstudio/genesis)
 *      Maintainer: Ferit Yiğit BALABAN <fyb@fybx.dev>
 *
 *      genesis/scripts/images.js
 */
let imageContainer;
let state = 0;
const randomId = Math.random().toString(36).substring(2, 12);
const imageContainerId = `ic_${randomId}`;
const imageContainerBackdropId = `ic_${randomId}_bd`;

function insertSitewideStyle() {
    const imageContainerBackdrop = document.createElement('div');
    imageContainerBackdrop.id = imageContainerBackdropId;
    imageContainerBackdrop.addEventListener("click", () => {
        if (state === 1)
            templateHideImage();
    });

    imageContainer = document.createElement('div');
    imageContainer.id = imageContainerId;
    imageContainer.style.display = "none";
    imageContainer.appendChild(imageContainerBackdrop);

    var style = document.createElement('style');
    style.textContent = `#${imageContainerId}{position:fixed;top:10%;left:10%;width:80%;height:80%;display:flex;justify-content:center;align-items:center}#${imageContainerBackdropId}{content:"";z-index:-1;position:fixed;top:0;left:0;right:0;bottom:0;backdrop-filter:blur(4px) brightness(0.25)}#${imageContainerId} img{max-width:100%;max-height:100%;height:auto;width:auto}`;

    document.body.appendChild(imageContainer);
    document.head.appendChild(style);
}

function hijackSitewideControl() {
    window.addEventListener("keydown", (event) => {
        if (state === 1 && event.key === "Escape")
            templateHideImage();
    });
}

function templateHideImage() {
    imageContainer.style.display = "none";
    imageContainer.removeChild(imageContainer.lastChild);
    document.body.style.overflow = "auto";
    state = 0;
}

function templateShowImage(imageElement) {
    var imageElementStripped = document.createElement("img");
    imageElementStripped.src = imageElement.src;
    imageContainer.appendChild(imageElementStripped);
    imageContainer.style.display = "flex";
    document.body.style.overflow = "hidden";
    state = 1;
}

function preprocessImages() {
    Array.from(document.getElementsByTagName("img")).forEach(image => {
        if (image.hasAttribute("data-clickable-image"))
            image.addEventListener("click", (event) => templateShowImage(event.target));
    });
}

var genesis = typeof genesis !== 'undefined' ? genesis : (genesis = 313, console.log("Close the world, .txen eht nepO :: genesis by arbeit studio"), genesis);
insertSitewideStyle();
hijackSitewideControl();
preprocessImages();
