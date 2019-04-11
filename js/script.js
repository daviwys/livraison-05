'use strict';

// initialization
let maxClick = 5;
document.getElementsByTagName('article')[0].innerHTML = 0;
document.getElementsByTagName('article')[1].innerHTML = 0;
document.getElementsByTagName('span')[0].innerHTML = `Winning score : ${maxClick}`;

document.getElementsByTagName('input')[0].addEventListener('keyup', action => { (action.key == 'Enter') ? setClick() : null });

let player1Count = +document.getElementsByTagName('article')[0].innerHTML;
let player2Count = +document.getElementsByTagName('article')[1].innerHTML;

function setClick() {
	maxClick = +document.getElementsByTagName('input')[0].value;
	if(player1Count >= maxClick || player2Count >= maxClick) {
		console.log('no!');
		document.getElementsByTagName('span')[0].innerHTML = `score already reached !`;
		document.getElementsByTagName('span')[0].classList.add('redTxt');
	} else {
		(maxClick >= 5) ? maxClick = maxClick : maxClick = 5;
		document.getElementsByTagName('span')[0].innerHTML = `Winning score : ${maxClick}`;
		document.getElementsByTagName('span')[0].classList.remove('redTxt');
	}
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
}

function whiteMode() {
	document.getElementsByTagName('link')[0].href = 'css/style.css';
	document.getElementsByTagName('button')[3].setAttribute('onclick', `darkMode()`);
	document.getElementsByTagName('button')[3].innerHTML = 'Dark mode';
}
