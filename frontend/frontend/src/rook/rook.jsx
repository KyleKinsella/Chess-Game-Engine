import ChessPiece from "../ChessPiece/ChessPiece.jsx";
import Utils from ".././utils.jsx";
import { legalMoves } from "../board/Board.jsx";

class rook extends ChessPiece {
	constructor() {
		super();
	}
	
	//~ moved
	getLegalMoves(board, oldRookLocation, color, pieceType) {
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
			
			 //~ const moves = legalMoves(
				//~ board,
				//~ row + move[0],
				//~ col + move[1],
				//~ move[0],
				//~ move[1],
				//~ color,
				//~ pieceType
			//~ );

			//~ console.log("direction", move, "moves:", moves, "\n\n");

			//~ legal_Moves.push(...moves);
			
			var newX = row + move[0];
			var newY = col + move[1];
		
			//~ moved
			const moves = legalMoves(board, newX, newY, move[0], move[1], color, pieceType);
			for (var i = 0; i < moves.length; i++) {
			
				//~ console.log(moves[i]);
			
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
