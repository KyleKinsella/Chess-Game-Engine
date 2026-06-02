import Utils from "../utils.jsx";
import ChessPiece from "../ChessPiece/ChessPiece.jsx";

function goDown(board, row, col) {
	const legalMoves = [];
	const goDown = [0, -1];
	var goDownTwice = 2;
	
	var newRow = row + goDown[0]+goDownTwice; // this brings me down!
	const newCol = col + goDown[1]+1; // this brings me to the other column! (this will be incredibly useful for when we get to capturing pieces)
		
	// have you moved your pawn down? if so, you only have one legal move to continue forward
	if (board[newRow-2][newCol-1] === Utils.freeSpace + " ") { //|| board[1][0] === board[newRow][newCol] || board[1][0] === Utils.freeSpace + " ") {
		newRow = row + goDown[0]+1;
		goDownTwice = 1;
	} 
	
	if (goDownTwice === 2) {
		board[newRow-1][newCol] = "#####" + " ";					
		legalMoves.push([newRow-1, newCol]);		
	}
	
	if (board[newRow][newCol] === Utils.freeSpace + " ") {
		board[newRow][newCol] = "#####" + " ";					
		legalMoves.push([newRow, newCol]);	
	} 
	
	return legalMoves;
}

function goUp(board, row, col) {
	const legalMoves = [];
	const goUp = [0, 1];
	var goUpTwice = 2;
	
	var newRow = row + goUp[0]+goUpTwice-3; // this brings me up!
	const newCol = col + goUp[0]; // this brings me to the other column! (this will be incredibly useful for when we get to capturing pieces)
	
	// have you moved your pawn up? if so, you only have one legal move to continue forward
	//~ if (board[newRow+2][newCol+1] === Utils.freeSpace + " " || board[5][6] === board[newRow+2][newCol+1] || board[5][6] === Utils.freeSpace + " ") {
		//~ newRow = row + goUp[0]+1; // this brings me up!
		//~ goUpTwice = 1;
	//~ } 
	
	if (goUpTwice === 2) {
		board[newRow+1][newCol] = "#####" + " ";					
		legalMoves.push([newRow+1, newCol]);		
	}
	
	if (board[newRow][newCol] === Utils.freeSpace + " ") {
		board[newRow][newCol] = "#####" + " ";					
		legalMoves.push([newRow, newCol]);	
	}
	
	return legalMoves;
} 

class pawn extends ChessPiece {
	constructor() {
		super();
	}
	
	//
	// TODO: when a pawn moves the current implementation breaks!
	//
	getLegalMoves(board, oldPawnLocation) {
		const row = oldPawnLocation[0];
		const col = oldPawnLocation[1];
		
		//
		// Note: you need to be very careful on what way you want to move your pawn!
		// for example: if "oldPawnLocation" is any of the pawns in row 1 you MUST call goDown(...), otherwise you MUST call goUp(...) if you dont follow this, the pawns will break!
		//
				
		return goDown(board, row, col);
		//~ return goUp(board, row, col);
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
