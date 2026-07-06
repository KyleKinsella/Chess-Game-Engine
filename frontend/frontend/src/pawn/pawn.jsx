import Utils from "../utils.jsx";
import ChessPiece from "../ChessPiece/ChessPiece.jsx";

function goDown(board, col, row, moved) {
	const legalMoves = [];
	const goDown = [0, -1];
	
	var newRow = col + goDown[0]+2; // this brings me down!
	const newCol = row + goDown[1]+1; // this brings me to the other column! (this will be incredibly useful for when we get to capturing pieces)
		
	if (!moved) {
		board[newCol][newRow-1] = Utils.iCanMoveToHere;
		legalMoves.push([newCol, newRow-1]);
			
		board[newCol][newRow] = Utils.iCanMoveToHere;
		legalMoves.push([newCol, newRow]);
	} else {
		board[newCol][newRow-1] = Utils.iCanMoveToHere;
		legalMoves.push([newCol, newRow-1]);
		
		// TODO: Capturing...
	}
		
	return legalMoves;
}

function goUp(board, col, row, moved) {
	const legalMoves = [];
	const goUp = [0, 1];
	
	const newRow = col + goUp[0]+2-3; // this brings me up!
	const newCol = row + goUp[0]; // this brings me to the other column! (this will be incredibly useful for when we get to capturing pieces)
	
	if (!moved) {
		board[newCol][newRow-1] = Utils.iCanMoveToHere;
		legalMoves.push([newCol, newRow-1]);
				
		board[newCol][newRow] = Utils.iCanMoveToHere;
		legalMoves.push([newCol, newRow]);	
	} else {
		board[newCol][newRow] = Utils.iCanMoveToHere;
		legalMoves.push([newCol, newRow]);
		
		// TODO: Capturing...
	}
	
	return legalMoves;
} 

class pawn extends ChessPiece {
	constructor() {
		super();
	}
	
	//
	// Notes: 
	// 1. can my pawn go forward, if their is a pawn or any piece in front of him?
	// 2. if my pawn has not moved at all (they have 2 legal moves, on their opening move), but if i have a pawn on my last spot... what does my code do ? 
	// 	  in this scenario, i only have 1 legal move, until this pawn moves or is captured, then i have 2 legal moves... then the pawn works as normal...
	// 3. if i have not moved my pawn at all, but the other team has moved into one of my spots (one of my legal moves), i cant move forward, 2 spots, i can only go forward 1 spot.
	//	  BUT, if the other teams piece moves directly in front of my pawn, i cant go anywhere because im blocked...
	//
	getLegalMoves(board, oldPawnLocation, pawnColor, moved) {
		const row = oldPawnLocation[0];
		const col = oldPawnLocation[1];
		
		return (pawnColor === Utils.WHITE) ? goDown(board, col, row, moved) : goUp(board, col, row, moved);
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
