import ChessPiece from "../ChessPiece/ChessPiece.jsx";
import Utils from ".././utils.jsx";
import { legalMoves } from "../board/Board.jsx";

class rook extends ChessPiece {
	constructor() {
		super();
	}
	
	getLegalMoves(board, oldRookLocation) {
		const row = oldRookLocation[0];
		const col = oldRookLocation[1];
		
		const rookMoves = [
			[-1, 0], // left
			[1, 0], // right
			[0, -1], // down
 			[0, 1] // up
		];
		
		const legal_Moves = [];
				
		for (const move of rookMoves) {
			var newX = row + move[0];
			var newY = col + move[1];
			
			const moves = legalMoves(board, newX, newY, move[0], move[1]);
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

export default rook;
