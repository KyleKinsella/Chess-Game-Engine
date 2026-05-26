import Utils from "../utils.jsx";
import ChessPiece from "../ChessPiece/ChessPiece.jsx";

class queen extends ChessPiece {
	constructor() {
		super();
	}
	
	getLegalMoves(board, oldQueenLocation) {
		const row = oldQueenLocation[0];
		const col = oldQueenLocation[1];
		
		const queenMoves = [
			//~ // bishop moves
			//~ [-1, -1], // down, left
			//~ [-1, 1], // up, left
			//~ [1, -1], // down, right // issue!
			//~ [1, 1] // up, right
			
			//~ // rook moves
			//~ [-1, 0], // left
			//~ [1, 0], // right
			//~ [0, -1], // down
 			//~ [0, 1] // up  // issue!
 			
 			[-1, -1],
			[-1, 0],
			[-1, 1],
			[0, -1],
			[0, 1],
			[1, -1],
			[1, 0],
			[1, 1]
		];
		
		const legalMoves = [];
		
		for (const move of queenMoves) {
			var newX = row + move[0];
			var newY = col + move[1];
			
			// i am not using the value of i here, i know LOL.......
			for (var i = 0; i < board.length; i++) {
				if (newX >= 0 && newX < Utils.ROWS && newY >= 0 && newY < Utils.COLS) {
					if (board[newX][newY] === Utils.freeSpace + " ") {
						//~ board[newX][newY] = "#####" + " ";
						legalMoves.push([newX, newY]);
					} else {
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
	}
	
	getCaptured() {
	}
}

export default queen;
