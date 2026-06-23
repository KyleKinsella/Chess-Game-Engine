import ChessPiece from "../ChessPiece/ChessPiece.jsx";
import Utils from ".././utils.jsx";
import { detectCapture, notify } from "../board/Board.jsx";

class knight extends ChessPiece {
	constructor () {
		super();
	}
	
	getLegalMoves(board, oldKnightLocation, color, piece) {	
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
			
			if (newX >= 0 && newX < Utils.ROWS && newY >= 0 && newY < Utils.COLS) {
				if (board[newX][newY] === Utils.NULL ) {	
					board[newX][newY] = Utils.iCanMoveToHere;
					legalMoves.push([newX, newY]);
				} else {
					switch(color) {
						case Utils.WHITE:
							// don't capture your own pieces!
							if (board[newX][newY] === Utils.WHITE_PAWN || board[newX][newY] === Utils.WHITE_KNIGHT || board[newX][newY] === Utils.WHITE_ROOK || board[newX][newY] === Utils.WHITE_BISHOP || board[newX][newY] === Utils.WHITE_QUEEN || board[newX][newY] === Utils.WHITE_KING || board[newX][newY] === Utils.WHITE_KNIGHT2 || board[newX][newY] === Utils.WHITE_BISHOP2 || board[newX][newY] === Utils.WHITE_ROOK2) {
								continue;
							} else {	
								board[newX][newY] = Utils.iCanMoveToHere;
								//~ notify(piece);
								legalMoves.push([newX, newY]);
							}
						
						break;
						
						case Utils.BLACK:
							// don't capture your own pieces!
							if (board[newX][newY] === Utils.BLACK_PAWN || board[newX][newY] === Utils.BLACK_KNIGHT || board[newX][newY] === Utils.BLACK_ROOK || board[newX][newY] === Utils.BLACK_BISHOP || board[newX][newY] === Utils.BLACK_QUEEN || board[newX][newY] === Utils.BLACK_KING || board[newX][newY] === Utils.BLACK_KNIGHT2 || board[newX][newY] === Utils.BLACK_BISHOP2 || board[newX][newY] === Utils.BLACK_ROOK2) {
								continue;
							} else {
								board[newX][newY] = Utils.iCanMoveToHere;
								//~ notify(piece);
								legalMoves.push([newX, newY]);
							}
							
						break;
					}
					
					// This poses a lot of problems, when it comes to moving a piece and then re-computing that pieces legal moves!
					break;
				}
			}
		}
		return legalMoves;
	}
	
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
