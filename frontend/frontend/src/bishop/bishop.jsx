import ChessPiece from "../ChessPiece/ChessPiece.jsx";
import Utils from "../utils.jsx";
import { legalMoves } from "../board/Board.jsx";

class bishop extends ChessPiece {
	constructor() {
		super();
	}
	
	getLegalMoves(board, oldBishopLocation, color, pieceType) {
		const row = oldBishopLocation[0];
		const col = oldBishopLocation[1];
		
		const bishopMoves = [
			[-1, -1], // down, left
			[-1, 1], // up, left
			[1, -1], // down, right
			[1, 1] // up, right
		];
		
		const legal_Moves = [];
			
		for (const move of bishopMoves) {
			var newX = row + move[0];
			var newY = col + move[1];
			
			const moves = legalMoves(board, newX, newY, move[0], move[1], color, pieceType);
			for (var i = 0; i < moves.length; i++) {
				legal_Moves.push(moves[i]);
			}
		}
		return legal_Moves;
	}
	
	makeMove(move, legalMoves, board) {
		// WILL THIS BE THE EXACT SAME AS THE KNIGHT !?
	}
	
	getCaptured() {
		// TODO
	}
}

export default bishop;
