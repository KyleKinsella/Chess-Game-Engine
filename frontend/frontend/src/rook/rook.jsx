import ChessPiece from "../ChessPiece/ChessPiece.jsx";
import Utils from "../utils.jsx";

class rook extends ChessPiece {
	constructor() {
		super();
	}
	
	getLegalMoves(board, oldRookLocation) {
		const row = oldRookLocation[0];
		const col = oldRookLocation[1];
		
		const rookMoves = [
			[-1, 0], // left
			[1, 0], // right
			[0, -1], // down
 			[0, 1] // up
		];
		
		const legalMoves = [];
		
		for (const move of rookMoves) {
			const newX = row + move[0];
			const newY = col + move[1];
			
			if (newX >= 0 && newX < Utils.ROWS && newY >= 0 && newY < Utils.COLS) {
				if (board[newX][newY] === Utils.freeSpace + " ") {
					legalMoves.push([newX, newY]);
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

export default rook;
