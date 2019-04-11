'use strict';

// initialization
let maxClick = 5;
document.getElementsByTagName('article')[0].innerHTML = 0;
document.getElementsByTagName('article')[1].innerHTML = 0;
document.getElementsByTagName('span')[0].innerHTML = `Winning score : ${maxClick}`;

document.getElementsByTagName('input')[0].addEventListener('keyup', action => { (action.key == 'Enter') ? setClick() : null });

let player1Count = +document.getElementsByTagName('article')[0].innerHTML;
let player2Count = +document.getElementsByTagName('article')[1].innerHTML;

function refresh(style) {
//	document.location.reload(true);
	maxClick = 5;
	document.getElementsByTagName('input')[0].value = 5;
	document.getElementsByTagName('span')[0].innerHTML = `Winning score : ${maxClick}`;
	(style == 'dark') ? darkMode() : whiteMode();
/*
	document.getElementsByTagName('link')[0].href = 'css/dark.css';
	document.getElementsByTagName('button')[3].setAttribute('onclick', `whiteMode()`);
	document.getElementsByTagName('button')[3].innerHTML = 'White mode'; */
	let elem = document.getElementsByTagName('article')[0];
	(elem.hasAttribute('class') == true) ? elem.removeAttribute('class') : null; // style red or green delete on player 1!
	let elem2 = document.getElementsByTagName('article')[1];
	(elem2.hasAttribute('class') == true) ? elem2.removeAttribute('class') : null; // style red or green delete on player 2!
	document.getElementsByTagName('span')[0].innerHTML = `Winning score : 5`; // reset to 5 !
	document.getElementsByTagName('article')[0].innerHTML = 0; // reset score player 1 to 0!
	document.getElementsByTagName('article')[1].innerHTML = 0; // reset score paleyr 2 to 0!
	let player1 = document.getElementsByTagName('button')[2];
	(player1.hasAttribute('disabled') == true) ? player1.removeAttribute('disabled') : null; // button player 1 : actived!
	let player2 = document.getElementsByTagName('button')[4];
	(player2.hasAttribute('disabled') == true) ? player2.removeAttribute('disabled') : null; // button player 2 : actived!
	player1Count = 0;
	player2Count = 0;
}

function setClick() {
	maxClick = +document.getElementsByTagName('input')[0].value;

	document.getElementsByTagName('article')[0].innerHTML = 0;
	let elem = document.getElementsByTagName('article')[0];
	(elem.hasAttribute('class') == true) ? elem.removeAttribute('class') : null;
	let elem2 = document.getElementsByTagName('article')[1];
	(elem2.hasAttribute('class') == true) ? elem2.removeAttribute('class') : null;
	document.getElementsByTagName('span')[0].innerHTML = `Winning score : ${maxClick}`;
	document.getElementsByTagName('article')[0].innerHTML = 0;
	document.getElementsByTagName('article')[1].innerHTML = 0;
	let player1 = document.getElementsByTagName('button')[2];
	(player1.hasAttribute('disabled') == true) ? player1.removeAttribute('disabled') : null;
	let player2 = document.getElementsByTagName('button')[4];
	(player2.hasAttribute('disabled') == true) ? player2.removeAttribute('disabled') : null;
	player1Count = 0;
	player2Count = 0;
}

function playerOne() {
	
	if(player1Count == maxClick - 1) {
		document.getElementsByTagName('article')[0].innerHTML = `<img src="img/ok.png" alt="bravo" />`;
		document.getElementsByTagName('article')[0].classList.toggle('vert');
		document.getElementsByTagName('article')[1].classList.toggle('red');
		document.getElementsByTagName('button')[2].disabled = true;
		document.getElementsByTagName('button')[4].disabled = true;
	} else {
		document.getElementsByTagName('article')[0].innerHTML = player1Count + 1;
		player1Count++;
	}
}

function playerTwo() {

	if(player2Count == maxClick - 1) {
		document.getElementsByTagName('article')[1].innerHTML = `<img src="img/ok.png" alt="bravo" />`;
		document.getElementsByTagName('article')[1].classList.toggle('vert');
		document.getElementsByTagName('article')[0].classList.toggle('red');
		document.getElementsByTagName('button')[2].disabled = true;
		document.getElementsByTagName('button')[4].disabled = true;
	} else {
		document.getElementsByTagName('article')[1].innerHTML = player2Count + 1;
		player2Count++;
	}
}

function darkMode() {
	document.getElementsByTagName('link')[0].href = 'css/dark.css';
	document.getElementsByTagName('button')[3].setAttribute('onclick', `whiteMode()`);
	document.getElementsByTagName('button')[3].innerHTML = 'White mode';
	document.getElementsByTagName('button')[1].setAttribute('onclick', `refresh('dark')`);
}

function whiteMode() {
	document.getElementsByTagName('link')[0].href = 'css/style.css';
	document.getElementsByTagName('button')[3].setAttribute('onclick', `darkMode()`);
	document.getElementsByTagName('button')[3].innerHTML = 'Dark mode';
	document.getElementsByTagName('button')[1].setAttribute('onclick', `refresh('white')`);
}
