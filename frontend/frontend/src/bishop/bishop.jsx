import ChessPiece from "../ChessPiece/ChessPiece.jsx";
import Utils from "../utils.jsx";

class bishop extends ChessPiece {
	constructor() {
		super();
	}
	
	// TODO: if a pawn moves forward, the bishop legal moves should be able to go backwards, this doesnt happen as of right now...
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
			
			// i am not using the value of i here, i know LOL.......
			for (var i = 0; i < board.length; i++) {
				if (newX >= 0 && newX < Utils.ROWS && newY >= 0 && newY < Utils.COLS) {
					if (board[newX][newY] === Utils.freeSpace + " ") {						
						board[newX][newY] = "#####" + " "; // this is a visual cue for us to see where the bishop can move to, we also have the coordinates of where the bishop can move to! 
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
		// WILL THIS BE THE EXACT SAME AS THE KNIGHT !?
	}
	
	getCaptured() {
		// TODO
	}
}

export default bishop;
