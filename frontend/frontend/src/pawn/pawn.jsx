import Utils from "../utils.jsx";
import ChessPiece from "../ChessPiece/ChessPiece.jsx";

function randomSpot() {
	// pawns can move either one or two postions on there opening move...
	const opening = [1, 2];
	
	const randomElement = opening[Math.floor(Math.random() * opening.length)];
	// randomElement is for testing purposes only! // 
	
	return randomElement;
}

function goDown(board, row, col) {
	const legalMoves = [];
	
	const down = [0, -1]; // go down
	
	//~ const newRow = row + down[0]+1+1; // this brings me down!
	//~ const newCol = col + down[1]+1+1; // this brings me to the other column!

	var rand = randomSpot();

	const newRow = row + down[0]+rand; // this brings me down!
	const newCol = col + down[1]+1; // this brings me to the other column! (this will be incredibly useful for when we get to capturing pieces!)...
	
	if (rand === 2) {
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

	const up = [0, 1]; // go up
	
	const rand = randomSpot();
	
	const newRow = row + up[0]+rand-3; // this brings me up!
	//~ const newCol2 = col + up[1]+2; // this brings me to the other column! 
	const newCol = col + up[0]; // this brings me to the other column! 
	
	if (rand === 2) {
		board[newRow-1][newCol] = "#####" + " ";					
		legalMoves.push([newRow-1, newCol]);		
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
		
		//~ return goDown(board, row, col);
		return goUp(board, row, col);
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
