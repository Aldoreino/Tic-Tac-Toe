// IIFE
(function(){
	angular
		.module('ticTacToeApp')
		.controller('ticTacToeController', ticTacToeController);

		ticTacToeController.$inject = ['$firebaseArray', '$firebaseObject']


	// the controller itself (allows acces between the model, or data, and the view, or user interface)
	function ticTacToeController($firebaseArray, $firebaseObject){
		
		// var location = ("https://tictacticaltoe.firebaseio.com/"); 

		// var ref = new Firebase(location);
		// var binding = $firebaseObject(ref);
		// binding.test = {test:"testing"};
		// binding.$save(binding);

		// capture variable that references the Controller
		var self = this;
		self.game = getGame();
		self.click = click;
		changeStatus();
		console.log(self.game.boxes);

		function getGame(){
			var ref = new Firebase("https://tictacticaltoe.firebaseio.com/game");
			var game = $firebaseObject(ref);
			game.boxes = [ {id: 0, status: ""}, 
				{id: 1, status: ""}, 
				{id: 2, status: ""}, 
				{id: 3, status: ""}, 
				{id: 4, status: ""}, 
				{jd: 5, status: ""}, 
				{id: 6, status: ""}, 
				{id: 7, status: ""}, 
				{id: 8, status: ""} ]
			game.player1 = false;
			game.player2 = false;
			game.turnCounter = 0;
			game.$save();
			return game;2



		}
		function click(num){
			if (self.game.turn === 1){
				self.game.boxes[num].status = "O";
				self.game.turn = 0;
			}else {
				self.game.turn = 1;
				self.game.boxes[num].status = "X";
			}
			checkForWinnerX();
			checkForWinnerO();
			self.game.$save();
		}

		self.game.turn = 1;
		// plays the game music
		var snd = new Audio("audio.mp3/alert_sound.mp3");
		var turnCounter = 0;
		var playerScore = 0;



		


function checkForWinnerX() {
	console.log(self);
	// checks for wins in a horizontal direction
	if (self.game.boxes[0].status === "X" && self.game.boxes[1].status === "X" && self.game.boxes[2].status === "X"){
		snd.play();
		alert("X wins"); 
		playerScore++;
		console.log(playerScore);
	}
	if (self.game.boxes[3].status === "X" && self.game.boxes[4].status === "X" && self.game.boxes[5].status === "X"){
		snd.play();
		alert("X wins");

	}
	if (self.game.boxes[6].status === "X" && self.game.boxes[7].status === "X" && self.game.boxes[8].status === "X"){
		snd.play();
		alert("X wins");
	}
	// checks for wins in a vertical dierction
	if (self.game.boxes[0].status === "X" && self.game.boxes[3].status === "X" && self.game.boxes[6].status === "X"){
		snd.play();
		alert("X wins");
	}
	if (self.game.boxes[1].status === "X" && self.game.boxes[4].status === "X" && self.game.boxes[7].status === "X"){
		snd.play();
		alert("X wins");
	}
	if (self.game.boxes[2].status === "X" && self.game.boxes[5].status === "X" && self.game.boxes[8].status === "X"){
		snd.play();
		alert("X wins");
	}
	// checks for wins in a diagonal direction
	if (self.game.boxes[0].status === "X" && self.game.boxes[4].status === "X" && self.game.boxes[8].status === "X"){
		snd.play();
		alert("X wins");
	}
	if (self.game.boxes[2].status === "X" && self.game.boxes[4].status === "X" && self.game.boxes[6].status === "X"){
		snd.play();
		alert("X wins");
	}
}// end of function "checkForWinnerX"

	// checks to see if O has won in a horizontal direction
	function checkForWinnerO() {
		if (self.game.boxes[0].status === "O" && self.game.boxes[1].status ==="O" && self.game.boxes[2].status === "O"){
			snd.play();
			alert("O wins");
		}
		if (self.game.boxes[3].status === "O" && self.game.boxes[4].status === "O" && self.game.boxes[5].status === "O"){
			alert("O wins");
		}
		if (self.game.boxes[6].status === "O" && self.game.boxes[7].status === "O" && self.game.boxes[8].status === "O"){
			snd.play();
			alert("O wins");
		}
		// checks to see if O has won in a vertical direction			
		if (self.game.boxes[0].status === "O" && self.game.boxes[3].status === "O" && self.game.boxes[6].status === "O"){
			snd.play();
			alert("O wins");
		}			
		if (self.game.boxes[1].status === "O" && self.game.boxes[4].status === "O" && self.game.boxes[7].status === "O"){
			snd.play();
			alert("O wins");
		}			
		if (self.game.boxes[2].status === "O" && self.game.boxes[5].status === "O" && self.game.boxes[8].status === "O"){
			snd.play();
			alert("O wins");
		}
		// checks to see if O has won in a diagonal direction			
		if (self.game.boxes[0].status === "O" && self.game.boxes[4].status === "O" && self.game.boxes[8].status === "O"){
			snd.play();
			alert("O wins");
		}			
		if (self.game.boxes[2].status === "O" && self.game.boxes[4].status === "O" && self.game.boxes[6].status === "O"){
			snd.play();
			alert("O wins");
		}if (turnCounter === 9){
			alert("Cats game!")
		}
	} // end of function "checkForWinnerO"


		// prevents the clicked object from being overwritten

		function changeStatus(num){
			if(self.game.boxes.status){
				return false;
			}
		}


	}
})(); // ends IIFE

			// determines who is currently playing
















		// self.click = function($index) {
		// 		turnCounter++;
		// 		if (turnCounter === 9){
		// 			alert("cats game!")
		// 		}
		// 		if (self.game.boxes[$index].status) {
		// 			return false;
		// 		}
		// 		if (turn == 1){

		// 			self.game.boxes[$index].status = "X";
		// 			self.game.$save();
		// 			turn++;
		// 		//checks for winner after move has been made
		// 			checkForWinnerX();
		// 		}else {
		// 			self.game.boxes[$index].status = "O";
		// 			self.game.$save();
		// 			turn--;
		// 		// check for winner after move has been made
		// 			checkForWinnerO();

		// 		}
		// };




// creates an object that makes 9 cells on the game game (by replicating it 9 times)

//	self.binding.board = [
//		{space: null},
//		{space: null},
//		{space: null},
//		{space: null},
//		{space: null},
//		{space: null},
//		{space: null},
//		{space: null},
//		{space: null},
//		];
//		self.binding.$save();






// }




