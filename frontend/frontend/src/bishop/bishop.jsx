import ChessPiece from "../ChessPiece/ChessPiece.jsx";
import Utils from "../utils.jsx";

class bishop extends ChessPiece {
	constructor() {
		super();
	}
	
	getLegalMoves(board, oldBishopLocation) {
		const row = oldBishopLocation[0];
		const col = oldBishopLocation[1];
		
		const bishopMoves = [
			[-1, -1], // down, left
			[-1, 1], // up, left
			[1, -1], // down, right
			[1, 1] // up, right
		];
		
		const legalMoves = [];
		
		for (const move of bishopMoves) {
			var newX = row + move[0];
			var newY = col + move[1];
			
			if (newX >= 0 && newX < Utils.ROWS && newY >= 0 && newY < Utils.COLS) {
				legalMoves.push([newX, newY]);				
				
				//
				// this if statement works but it also causes some (major) problems !
				//
				if (board[newX][newY] === Utils.freeSpace + " ") {
				}				
			}
		}
		return legalMoves;
	}
	
	makeMove(move, legalMoves, board) {
	}
	
	getCaptured() {
	}
}

export default bishop;
