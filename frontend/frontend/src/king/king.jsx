import Utils from "../utils.jsx";
import ChessPiece from "../ChessPiece/ChessPiece.jsx";
import knight from "../knight/knight.jsx";
import rook from "../rook/rook.jsx";
import bishop from "../bishop/bishop.jsx";
import queen from "../queen/queen.jsx";
import { findPieceInBoard } from "../board/Board.jsx";

// i am really not happy with this code, this is not good (duplication)!!
function canKingMove(board, pieceType) {
	var moves = [];
	
	switch (pieceType) {
		case Utils.KNIGHT:
		
			// just for testing purposes! (play around with the index to see if you can break it!)
			board[3][4] = Utils.KNIGHT + " ";
			
			const knights = findPieceInBoard(board, Utils.KNIGHT);
			
			const k = new knight(0, 0, "white", Utils.KNIGHT, false);
			const legalKnightMoves = k.getLegalMoves(board, knights[2]);
			
			moves.push(legalKnightMoves);
			break;
			
		case Utils.ROOK:
		
			// just for testing purposes! (play around with the index to see if you can break it!)
			board[3][3] = Utils.ROOK + " ";
			
			const rooks = findPieceInBoard(board, Utils.ROOK);
			
			const r = new rook(0, 0, "white", Utils.ROOK, false);			
			const legalRookMoves = r.getLegalMoves(board, rooks[2]);
			
			moves.push(legalRookMoves);
			break;
			
		case Utils.BISHOP:
		
			// just for testing purposes! (play around with the index to see if you can break it!)
			board[3][4] = Utils.BISHOP + " ";
			
			const bishops = findPieceInBoard(board, Utils.BISHOP);
			
			const b = new bishop(0, 0, "white", Utils.BISHOP, false);
			const legalBishopMoves = b.getLegalMoves(board, bishops[2]);
			
			moves.push(legalBishopMoves);
			break;
		
		case Utils.QUEEN:
		
			// just for testing purposes! (play around with the index to see if you can break it!)
			board[3][3] = Utils.QUEEN + " ";
			
			const queens = findPieceInBoard(board, Utils.QUEEN);
			
			const q = new queen(0, 0, "white", Utils.QUEEN, false);
			const legalQueenMoves = q.getLegalMoves(board, queens[1]);
			
			moves.push(legalQueenMoves);
			break;
		
		default:
			console.log("cannot find this piece, lol :) try again");
			return;
	}
	
	return moves;
}

class king extends ChessPiece {
	constructor() {
		super();
	}
	
	getLegalMoves(board, oldKingLocation) {
		const row = oldKingLocation[0];
		const col = oldKingLocation[1];
		
		const kingMoves = [
			[-1, 1],
			[-1, 0],
			[-1, -1],
			[0, -1],
			[0, 1],
			[1, -1],
			[1, 0],				
			[1, 1],
			[0, 1]
		];
		
		const legalMoves = [];
		
		const pieces = [Utils.KNIGHT, Utils.ROOK, Utils.BISHOP, Utils.QUEEN];
		const randomElement = pieces[Math.floor(Math.random() * pieces.length)];
		// randomElement is for testing purposes only! // 
			
		for (const move of kingMoves) {
			const newX = row + move[0];
			const newY = col + move[1];
			
			if (newX >= 0 && newX < Utils.ROWS && newY >= 0 && newY < Utils.COLS) {
				//~ const dontMoveToCheck = canKingMove(board, randomElement);
				//~ if (dontMoveToCheck) {
					//~ if (board[newX][newY] === Utils.freeSpace + " ") {
						//~ board[newX][newY] = "_____" + " ";
						//~ legalMoves.push([newX, newY]);
					//~ } 
				//~ } 
								
				if (board[newX][newY] === Utils.freeSpace + " ") {
					board[newX][newY] = "_____" + " ";
					legalMoves.push([newX, newY]);
				} 
			}
		}
		return legalMoves;
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
