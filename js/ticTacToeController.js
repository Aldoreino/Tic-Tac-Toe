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

			


function checkForWinnerX() {
		// checks for wins in a horizontal direction
		if (self.board[0].space === "X" && self.board[1].space === "X" && self.board[2].space === "X"){
			alert("X wins");
		}
		if (self.board[3].space === "X" && self.board[4].space === "X" && self.board[5].space === "X"){
			alert("X wins");

		}
		if (self.board[6].space === "X" && self.board[7].space === "X" && self.board[8].space === "X"){
			alert("X wins");
		}
		// checks for wins in a vertical dierction
		if (self.board[0].space === "X" && self.board[3].space === "X" && self.board[6].space === "X"){
			alert("X wins");
		}
		if (self.board[1].space === "X" && self.board[4].space === "X" && self.board[7].space === "X"){
			alert("X wins");
		}
		if (self.board[2].space === "X" && self.board[5].space === "X" && self.board[8].space === "X"){
			alert("X wins");
		}
		// checks for wins in a diagonal direction
		if (self.board[0].space === "X" && self.board[4].space === "X" && self.board[8].space === "X"){
			alert("X wins");
		}
		if (self.board[2].space === "X" && self.board[4].space === "X" && self.board[6].space === "X"){
			alert("X wins");
		}
}
		// checks to see if O has won in a horizontal direction
		function checkForWinnerO() {
			if (self.board[0].space === "O" && self.board[1].space ==="O" && self.board[2].space === "O"){
				alert("O wins");
			}
			if (self.board[3].space === "O" && self.board[4].space === "O" && self.board[5].space === "O"){
				alert("O wins");
			}
			if (self.board[6].space === "O" && self.board[7].space === "O" && self.board[8].space === "O"){
				alert("O wins");
			}
			// checks to see if O has won in a vertical direction			
			if (self.board[0].space === "O" && self.board[3].space === "O" && self.board[6].space === "O"){
				alert("O wins");
			}			
			if (self.board[1].space === "O" && self.board[4].space === "O" && self.board[7].space === "O"){
				alert("O wins");
			}			
			if (self.board[2].space === "O" && self.board[5].space === "O" && self.board[8].space === "O"){
				alert("O wins");
			}
			// checks to see if O has won in a diagonal direction			
			if (self.board[0].space === "O" && self.board[4].space === "O" && self.board[8].space === "O"){
				alert("O wins");
			}			
			if (self.board[2].space === "O" && self.board[4].space === "O" && self.board[6].space === "O"){
				alert("O wins");
			}
		}






			// prevents the clicked object from being overwritten
			self.click = function($index) {
					console.log($index);

					if (self.board[$index].space) {
						return false;
					}
					if (turn == 1){

						self.board[$index].space = "X";

						turn++;
					//checks for winner after move has been made
						checkForWinnerX();
					
					}else {
						self.board[$index].space = "O";

						turn--;
					// check for winner after move has been made
						checkForWinnerO();
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







 }
})(); // ends IIFE



	
