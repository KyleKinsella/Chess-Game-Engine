import Utils from "../utils.jsx";
import ChessPiece from "../ChessPiece/ChessPiece.jsx";

class pawn extends ChessPiece {
	constructor() {
		super();
	}
	
	getLegalMoves(board, oldPawnLocation) {
	}
	
	makeMove(move, legalMoves, board) {
	}
	
	getCaptured() {
	}
	
	enPassant(board) {
		// TODO - https://www.chess.com/terms/en-passant
	}
	
	promotePawn(board) {
		// TODO - any pawn that gets into the other teams end part of the board, can promote their pawn to be either: a queen, rook, bishop or a knight!
	}
}

export default pawn;
