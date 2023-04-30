/*
 *      Anticverse Webraider
 *
 *      Maintainer: Ferit Yiğit BALABAN <balaban.ferityigit@anticverse.com>
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