import Utils from "../utils.jsx";
import ChessPiece from "../ChessPiece/ChessPiece.jsx";

class queen extends ChessPiece {
	constructor() {
		super();
	}
	
	//
	// TODO: i have most of the queen working due to having the rook and bishop "mainly working..." (the queen is the rook and bishop combined), but the queen has her own issues now,
	// but i expected this to happen, because the rook and bishop pieces have a bug / issue in each of them... 
	
	// ALSO, as the queen has moved, my rook piece should be able to go left once and right twice (but for some bizare stupid reason my rook doesnt go right two positions... he only goes 1 position to the right!)
	//
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
			
			for (var i = 0; i < board.length; i++) {
				if (newX >= 0 && newX < Utils.ROWS && newY >= 0 && newY < Utils.COLS) {
					if (board[newX][newY] === Utils.freeSpace + " ") {
						board[newX][newY] = "#####" + " ";
						legalMoves.push([newX, newY]);
					} 
					
					// not an ideal check but it works for now
					if (board[newX][newY] === Utils.BISHOP + " " || board[newX][newY] === Utils.PAWN + " ") {
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
