import ChessPiece from "../ChessPiece/ChessPiece.jsx";
import Utils from "../utils.jsx";

class knight extends ChessPiece {
	constructor () {
		super();
	}

	//
	// you mentioned to only pass in the board, i belive that we should pass in the oldlocation of the knight that we want to find where that knight can move to, we should not need the board for this i believe....
	// this is javascripts way of over-riding the parent function of "getLegalMoves(...)".
	//
	getLegalMoves(oldKnightLocation) {	
		const row = oldKnightLocation[0];
		const col = oldKnightLocation[1];

		const knightMoves = [
			[-2, -1], // up 2, left 1
			[-2, 1], // up 2, right 1
			[-1, -2], // up 1, left 2
			[-1, 2], // up 1, right 2
			
			[1, -2], // down 1, left 2
			[1, 2], // down 1, right 2
			[2, -1], // down 2, left 1
			[2, 1] // down 2, right 1
		];

		const legalMoves = [];

		for (const move of knightMoves) {

			const newRow = row + move[0];
			const newCol = col + move[1];
					
			if (newRow >= 0 && newRow < Utils.ROWS && newCol >= 0 && newCol < Utils.COLS) {
				legalMoves.push([newRow, newCol]);
			}
		}

		return legalMoves;
	}
	
	makeMove(move, board) {
	}
	
	getCaptured() {
	}
}

export default knight;
