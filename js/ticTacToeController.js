// IIFE
(function(){
	angular
		.module('ticTacToeApp')
		.controller('ticTacToeController', ticTacToeController);


		// the controller itself (allows acces between the model, or data, and the view, or user interface)
		function ticTacToeController(){
			// capture variable that references the Controller
			var self = this;

				// determines who is currently playing
			var turn = 1;


			// prevents the clicked object from being overwritten
			self.click = function($index) {
					console.log($index);

					if (self.board[$index].space) {
						return false;
					}
					if (turn === 1){
						self.board[$index].space = "X";
						turn++;
					}else {
						self.board[$index].space = "O";
						turn--;
					}
			};
		


// creates an object that makes 9 cells on the game board (by replicating it 9 times)

	self.board = [
		{space: null},
		{space: null},
		{space: null},
		{space: null},
		{space: null},
		{space: null},
		{space: null},
		{space: null},
		{space: null},
		];

// places an image inside of the box that is clicked (selected)

function playerMove() {
	 self.click.cells = alert("you win");
}







}
})(); // ends IIFE



	
