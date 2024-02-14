/*
 *      Arbeit Studio © 2024
 *      The Genesis Framework
 *      https://git.arbeit.studio/genesis (arbeitstudio/genesis)
 *      Maintainer: Ferit Yiğit BALABAN <fyb@fybx.dev>
 *
 *      genesis/scripts/typing.js
 */

/*
 *      Original logic:    Gregory Schier, https://schier.co/
 *      source:             https://codepen.io/gschier/pen/DLmXKJ
 */

var TxtRotate = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

	var that = this;
	var delta = 300 - Math.random() * 100; // how fast each character will be deleted or added

	if (this.isDeleting) {
		delta /= 2;
	}

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function () {
		that.tick();
	}, delta);
};

function preprocessTypeables() {
    Array.from(document.getElementsByClassName('txt-rotate')).forEach((el) => {
		if (el.getAttribute('data-rotate'))
			new TxtRotate(el, JSON.parse(el.getAttribute('data-rotate')), el.getAttribute('data-period'));
    });
}

function insertStyle() {
    const styling = document.createElement('style');
	styling.innerHTML = '.txt-rotate>.wrap{border-right:0.08em solid#666}';
	document.body.appendChild(styling);
}

window.onload = function () {
	preprocessTypeables();
    insertStyle();
};

var genesis = typeof genesis !== 'undefined' ? genesis : (genesis = 313, console.log("Close the world, .txen eht nepO :: genesis by arbeit studio"), genesis);
