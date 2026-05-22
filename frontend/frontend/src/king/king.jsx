import Utils from "../utils.jsx";
import ChessPiece from "../ChessPiece/ChessPiece.jsx";

class king extends ChessPiece {
	constructor() {
		super();
	}
	
	getLegalMoves(board, oldKingLocation) {
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
