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
	getLegalMoves(board, oldKnightLocation, color) {	
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

			const newX = row + move[0];
			const newY = col + move[1];
			
			// TODO: you cannot move to a postion that is occupied by another piece!
			if (newX >= 0 && newX < Utils.ROWS && newY >= 0 && newY < Utils.COLS) {
				if (board[newX][newY] === Utils.NULL) {		
					board[newX][newY] = Utils.iCanMoveToHere;
					legalMoves.push([newX, newY]);
				} else {
					switch(color) {
						case Utils.WHITE:
							// don't let use capture our own pieces! (not good code for checking each piece, Utils won't let me use the white or black pieces arrays, idk why)...
							if (board[newX][newY] === Utils.WHITE_PAWN || board[newX][newY] === Utils.WHITE_KNIGHT || board[newX][newY] === Utils.WHITE_ROOK || board[newX][newY] === Utils.WHITE_BISHOP || board[newX][newY] === Utils.WHITE_QUEEN || board[newX][newY] === Utils.WHITE_KING || board[newX][newY] === Utils.WHITE_KNIGHT2 || board[newX][newY] === Utils.WHITE_BISHOP2 || board[newX][newY] === Utils.WHITE_ROOK2) {
								continue;
							} else {	
								board[newX][newY] = Utils.iCanCaptureYou;
								legalMoves.push([newX, newY]);
							}
							
						break;
							
						case Utils.BLACK:
							// don't let use capture our own pieces! (not good code for checking each piece, Utils won't let me use the white or black pieces arrays, idk why)...
							if (board[newX][newY] === Utils.BLACK_PAWN || board[newX][newY] === Utils.BLACK_KNIGHT || board[newX][newY] === Utils.BLACK_ROOK || board[newX][newY] === Utils.BLACK_BISHOP || board[newX][newY] === Utils.BLACK_QUEEN || board[newX][newY] === Utils.BLACK_KING || board[newX][newY] === Utils.BLACK_KNIGHT2 || board[newX][newY] === Utils.BLACK_BISHOP2 || board[newX][newY] === Utils.BLACK_ROOK2) {
								continue;
							} else {
								board[newX][newY] = Utils.iCanCaptureYou;
								legalMoves.push([newX, newY]);
							}
							
						break;
					}
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
