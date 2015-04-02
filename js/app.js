var player = 'player1_logo.png';

// "grabs" the class 'box' from the css file

var boxes = document.getElementsByClassName('box');
console.log(boxes);

// iterates through every box on the game board

for (var i = 0; i < boxes.length; i++) {
	boxes[i].onclick = function() {
		this.style.backgroundImage = "url(images/" + player +")";
		switchPlayer();
	}
}

// switches the current click from player 1's click to player 2's click

function switchPlayer() {
	if (player === "player1_logo.png") {
		player = "blue";
	}else {
		player = "player1_logo.png";
	}
}

// prevents a selected box from being overwritten

function click() {
	console.log("hello");
}