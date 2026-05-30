import Utils from "../utils.jsx";
import ChessPiece from "../ChessPiece/ChessPiece.jsx";

class king extends ChessPiece {
	constructor() {
		super();
	}
	
	getLegalMoves(board, oldKingLocation) {
		const row = oldKingLocation[0];
		const col = oldKingLocation[1];
		
		const kingMoves = [
			[-1, 1],
			[-1, 0],
			[-1, -1],
			[0, -1],
			[0, 1],
			[1, -1],
			[1, 0],				
			[1, 1],
			[0, 1]
		];
		
		const legalMoves = [];
		
		for (const move of kingMoves) {
			const newX = row + move[0];
			const newY = col + move[1];
			
			if (newX >= 0 && newX < Utils.ROWS && newY >= 0 && newY < Utils.COLS) {
				if (board[newX][newY] === Utils.freeSpace + " ") {
					board[newX][newY] = "#####" + " ";
					legalMoves.push([newX, newY]);
				} else {
					break;
				}
			}
		}
		return legalMoves;
	}
	
	makeMove(move, legalMoves, board) {
	}
	
	getCaptured() {
	}
	
	isKingInCheck(board, kingCurrentLocation) {
		// TODO - https://www.chess.com/terms/chess-king
	}
	
	castleKingWithRook(board, kingCurrentLocation, rookCurrentLocation) {
		// TODO - https://www.chess.com/article/view/how-to-castle-in-chess
	}
}

export default king;
