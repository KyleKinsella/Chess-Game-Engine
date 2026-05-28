import ChessPiece from "../ChessPiece/ChessPiece.jsx";
import Utils from ".././utils.jsx";

class knight extends ChessPiece {
	constructor () {
		super();
	}

	//
	// you mentioned to only pass in the board, i belive that we should pass in the oldlocation of the knight that we want to find where that knight can move to, we should not need the board for this i believe....
	// this is javascripts way of over-riding the parent function of "getLegalMoves(...)".
	//
	getLegalMoves(board, oldKnightLocation) {	
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
			
			// TODO: you cannot move to a postion that is occupied by another piece!
			if (newRow >= 0 && newRow < Utils.ROWS && newCol >= 0 && newCol < Utils.COLS) {
				if (board[newRow][newCol] === Utils.freeSpace + " ") {		
					board[newRow][newCol] = "#####" + " ";
					legalMoves.push([newRow, newCol]);
				} 
			}
		}
		return legalMoves;
	}

	//
	// i think we should pass in the legal moves, in order to find out if a given move is legal or not...
	// TODO: process board...
	//
	makeMove(move, legalMoves, board) {	
		
		for (const mv of legalMoves) {
			if (move === mv) {
				return true;
			}
		}
		
		return false;
	}
	
	getCaptured() {
		// TODO
	}
}

export default knight;
