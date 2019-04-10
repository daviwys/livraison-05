'use strict';

// initialization
let maxClick = 5;
document.getElementsByTagName('article')[0].innerHTML = 0;
document.getElementsByTagName('article')[1].innerHTML = 0;

/*let player1 = document.getElementsByTagName('div')[2];
let player2 = document.getElementsByTagName('div')[3];*/
let player1Count = +document.getElementsByTagName('article')[0].innerHTML;
let player2Count = +document.getElementsByTagName('article')[1].innerHTML;

function setClick() {
	maxClick = +document.getElementsByTagName('input')[0].value;
	(maxClick >= 5) ? maxClick = maxClick : maxClick = 5;
	document.getElementsByTagName('span')[0].innerHTML = maxClick;
}

function playerOne() {
	
	if(player1Count == maxClick - 1) {
		document.getElementsByTagName('article')[0].innerHTML = `<img src="img/ok.png" alt="bravo" />`;
	} else {
		document.getElementsByTagName('article')[0].innerHTML = player1Count + 1;
		player1Count++;
	}
}

function playerTwo() {

	if(player2Count == maxClick - 1) {
		document.getElementsByTagName('article')[1].innerHTML = `<img src="img/ok.png" alt="bravo" />`;
	} else {
		document.getElementsByTagName('article')[1].innerHTML = player2Count + 1;
		player2Count++;
	}
}

function darkMode() {

}
