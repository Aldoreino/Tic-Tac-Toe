// IIFE
(function(){
	angular
		.module('ticTacToeApp')
		.controller('ticTacToeController', ticTacToeController);

		function ticTacToeController(){
			// Capture variable that references the Controller
			var self = this;
		}
})();