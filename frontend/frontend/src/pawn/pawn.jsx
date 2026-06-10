import Utils from "../utils.jsx";
import ChessPiece from "../ChessPiece/ChessPiece.jsx";

function goDown(board, col, row) {
	const legalMoves = [];
	const goDown = [0, -1];
	const goDownTwice = 2;
	
	const newRow = col + goDown[0]+goDownTwice; // this brings me down!
	const newCol = row + goDown[1]+1; // this brings me to the other column! (this will be incredibly useful for when we get to capturing pieces)
			
	if (goDownTwice === 2) {
		board[newCol][newRow-1] = Utils.iCanMoveToHere;
		legalMoves.push([newCol, newRow-1]);
	}
	
	if (board[newCol][newRow] === Utils.NULL) {
		board[newCol][newRow] = Utils.iCanMoveToHere;
		legalMoves.push([newCol, newRow]);	
	} 
	
	return legalMoves;
}

function goUp(board, col, row) {
	const legalMoves = [];
	const goUp = [0, 1];
	const goUpTwice = 2;
	
	const newRow = col + goUp[0]+goUpTwice-3; // this brings me up!
	const newCol = row + goUp[0]; // this brings me to the other column! (this will be incredibly useful for when we get to capturing pieces)
	
	if (goUpTwice === 2) {
		board[newCol][newRow-1] = Utils.iCanMoveToHere;
		legalMoves.push([newCol, newRow-1]);
	} 
	
	if (board[newCol][newRow] === Utils.NULL) {
		board[newCol][newRow] = Utils.iCanMoveToHere;
		legalMoves.push([newCol, newRow]);	
	} 
		
	return legalMoves;
} 

class pawn extends ChessPiece {
	constructor() {
		super();
	}
	
	getLegalMoves(board, oldPawnLocation) {
		const row = oldPawnLocation[0];
		const col = oldPawnLocation[1];
		
		//
		// Note: you need to be very careful on what way you want to move your pawn!
		// for example: if "oldPawnLocation" is any of the pawns in row 1 you MUST call goDown(...), otherwise you MUST call goUp(...) if you dont follow this, the pawns will break!
		// the fix to this problem is TEAM COLORS! 				
		//
				
		return goDown(board, col, row);
		//~ return goUp(board, col, row);
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
