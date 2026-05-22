import ChessPiece from "../ChessPiece/ChessPiece.jsx";
import Utils from ".././utils.jsx";

class rook extends ChessPiece {
	constructor() {
		super();
	}
	
	// TODO: when a pawn moves forward the rook should be able to go into that spot where the pawn previously was...
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
			var newX = row + move[0];
			var newY = col + move[1];
			
			for (var i = 0; i < board.length; i++) {
				if (newX >= 0 && newX < Utils.ROWS && newY >= 0 && newY < Utils.COLS) {
					if (board[newX][newY] === Utils.freeSpace + " ") {
						//~ board[newX][newY] = "#####" + " ";
						legalMoves.push([newX, newY]);
					} 
					
					if (board[newX][newY] === Utils.PAWN + " ") {
						break;
					} 
								
					newX += move[0];
					newY += move[1];
				}
			}
		}
		return legalMoves;
	}
	
	makeMove(move, legalMoves, board) {
		// WILL THIS BE THE EXACT SAME AS THE KNIGHT !?
	}
	
	getCaptured() {
		// TODO
	}
}

export default rook;
