/*
 *      Arbeit Studio © 2023
 *      The Genesis Framework
 *      https://github.com/arbeitstudio/genesis.git (arbeitstudio/genesis)
 *      Maintainer: Ferit Yiğit BALABAN <fyb@fybx.dev>
 *
 *      genesis/scripts/person-gallery.js
 */


const personvideoArr
    = document.querySelectorAll(".c-p-video")

function addListener($el) {
    $el.playbackRate = 1.5;
    $el.addEventListener("mouseover", function (){
        $el.play();
    });
    $el.addEventListener("mouseout", function () {
       $el.pause();
       $el.currentTime = 0;
    });
}

personvideoArr.forEach($el => addListener($el));