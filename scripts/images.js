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
const imageContainerId = `imageContainer_${randomId}`;
const imageContainerBackdropId = `imageContainer_${randomId}_backdrop`;
