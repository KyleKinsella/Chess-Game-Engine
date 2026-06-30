import Utils from "../utils.jsx";
import ChessPiece from "../ChessPiece/ChessPiece.jsx";
import { legalMoves } from "../board/Board.jsx";

class queen extends ChessPiece {
	constructor() {
		super();
	}
	
	getLegalMoves(board, oldQueenLocation, color, pieceType) {
		const row = oldQueenLocation[0];
		const col = oldQueenLocation[1];
		
		const queenMoves = [
 			[-1, -1], // down, left
			[-1, 0], // left
			[-1, 1], // up, left
			[0, -1], // down
			[0, 1], // up 
			[1, -1], // down, right
			[1, 0], // right
			[1, 1] // up, right
		];
		
		const legal_Moves = [];
		
		for (const move of queenMoves) {
			const newX = row + move[0];
			const newY = col + move[1];
			
			const moves = legalMoves(board, newX, newY, move[0], move[1], color, pieceType);
			for (var i = 0; i < moves.length; i++) {
				legal_Moves.push(moves[i]);
			}
		}
		return legal_Moves;
	}
	
	makeMove(move, legalMoves, board) {
	}
	
	getCaptured() {
	}
}

export default queen;
