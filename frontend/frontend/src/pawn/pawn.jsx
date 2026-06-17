import Utils from "../utils.jsx";
import ChessPiece from "../ChessPiece/ChessPiece.jsx";

function captureBlackPiece(board, col, row, n, m) {
	const moves = [];
	
	// TODO: have a better way of computing the col & row for checking if its a black pawn...
	if (board[col+3][row+1] === Utils.BLACK_PAWN) {
		//~ board[col+3][row+1] = Utils.iCanCaptureYou;
		moves.push([col+3, row+1]);
	}
		
	if (board[col+1][row+1] === Utils.BLACK_PAWN) {
		//~ board[col+1][row+1] = Utils.iCanCaptureYou;
		moves.push([col+1, row+1]);
	}
	
	return moves;
}

function goDown(board, col, row) {
	const legalMoves = [];
	const goDown = [0, -1];
	const goDownTwice = 2;
	
	const newRow = col + goDown[0]+goDownTwice+1; // this brings me down!
	const newCol = row + goDown[1]+1; // this brings me to the other column! (this will be incredibly useful for when we get to capturing pieces)
			
	if (goDownTwice === 2) {
		board[newCol][newRow-1] = Utils.iCanMoveToHere;
		legalMoves.push([newCol, newRow-1]);
	}
	
	if (board[newCol][newRow] === Utils.NULL) {
		board[newCol][newRow] = Utils.iCanMoveToHere;
		legalMoves.push([newCol, newRow]);	
	}
	
	const moves = captureBlackPiece(board, col, row);
	for (var i = 0; i < moves.length; i++) {
		legalMoves.push(moves[i]);
	}
	
	return legalMoves;
}

function captureWhitePiece(board, col, row) {
	const moves = [];
	
	// TODO: have a better way of computing the col & row for checking if its a white pawn...
	if (board[col-4][row] === Utils.WHITE_PAWN) {
		//~ board[col-4][row] = Utils.iCanCaptureYou;
		moves.push([col-4, row]);
	}
	
	if (board[col-2][row] === Utils.WHITE_PAWN) {
		//~ board[col-2][row] = Utils.iCanCaptureYou;
		moves.push([col-2, row]);
	}
	
	return moves;
}

function goUp(board, col, row) {
	const legalMoves = [];
	const goUp = [0, 1];
	const goUpTwice = 2;
	
	const newRow = col + goUp[0]+goUpTwice-4; // this brings me up!
	const newCol = row + goUp[0]; // this brings me to the other column! (this will be incredibly useful for when we get to capturing pieces)
	
	if (goUpTwice === 2) {
		board[newCol][newRow-1] = Utils.iCanMoveToHere;
		legalMoves.push([newCol, newRow-1]);
	} 
	
	if (board[newCol][newRow] === Utils.NULL) {
		board[newCol][newRow] = Utils.iCanMoveToHere;
		legalMoves.push([newCol, newRow]);	
	} 
	
	const moves = captureWhitePiece(board, col, row);
	for (var i = 0; i < moves.length; i++) {
		legalMoves.push(moves[i]);
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
	getLegalMoves(board, oldPawnLocation, pawnColor) {
		const row = oldPawnLocation[0];
		const col = oldPawnLocation[1];
		
		if (pawnColor === Utils.WHITE) {
			board[2][4] = Utils.BLACK_PAWN;
			board[4][4] = Utils.BLACK_PAWN;
			return goDown(board, col, row);
		} else {
			board[2][3] = Utils.WHITE_PAWN;
			board[4][3] = Utils.WHITE_PAWN;
			return goUp(board, col, row);
		}
		
		//~ return (pawnColor === Utils.WHITE) ? goDown(board, col, row) : goUp(board, col, row);
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
