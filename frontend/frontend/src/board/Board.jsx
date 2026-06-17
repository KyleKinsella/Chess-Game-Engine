import Utils from "../utils.jsx";
import knight from "../knight/knight.jsx";
import rook from "../rook/rook.jsx";
import bishop from "../bishop/bishop.jsx";
import queen from "../queen/queen.jsx";
import pawn from "../pawn/pawn.jsx";
import king from "../king/king.jsx";

// TODO: have - "a,b,c,d,e,f,g,h" at the bottom of the board and at the left hand side of the board have - "8 7 6 5 4 3 2 1"
export function initGameBoard(board, rows, cols) {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
			         
			if (i === 0) {
				board[j][i] = Utils.white_pieces[j];
			}

			//
			// Note: if you want to remove the pawns off the board, comment the code for the pawn creation, when i is 1 & 6 and uncomment the other line of code.
			// BUT, if you have removed all pawns off of the board and you try and process a pawn (when rand = pawn, in App.jsx) the project will break. 
			//
			if (i === 1) {
				//~ board[j][i] = Utils.NULL;
				board[j][i] = Utils.WHITE_PAWN;
			}
			
			if (i === 2 || i === 3 || i === 4 || i === 5) {
				board[j][i] = Utils.NULL;
            }
                
			if (i === 6) {
				//~ board[j][i] = Utils.NULL;
				board[j][i] = Utils.BLACK_PAWN;
			}
			
			if (i === 7) {
				board[j][i] = Utils.black_pieces[j];
			}
        }
    }   
    return board;
}

// will need later on in the project...
export function resetBoard(board) {
	return initGameBoard(board, Utils.pieces, Utils.ROWS, Utils.COLS);
}

// 
// This function is not very optimal... (this is not good, for speed reasons...), it works perfectly for now, but this will be changed later on!
//
export function findPieceInBoard(board, pieceToFind) {
	const pieces = [];
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[i].length; j++) {					
			if (board[j][i] === pieceToFind) {
				pieces.push([j, i]);
			}
		}
	}
	return pieces;
}

export function movePiece(board, oldLoc, newLoc) {		
	const oldRow = oldLoc[0];
	const oldCol = oldLoc[1];
	
	const newRow = newLoc[0];
	const newCol = newLoc[1];
	
	const b = board[oldRow][oldCol];		
	board[newRow][newCol] = b;
	board[oldRow][oldCol] = Utils.NULL;
	
	return board;
}

export function pieceToProcess(board, oldPieceLocation, index, pieceType, pieceColor) {
	const updatedFreeSpaces = findPieceInBoard(board, Utils.NULL);
	const randomElement = updatedFreeSpaces[Math.floor(Math.random() * updatedFreeSpaces.length)];
	// randomElement is for testing purposes only! // 
	
	const blackRooks = findPieceInBoard(board, Utils.BLACK_ROOK);
	const whiteRooks = findPieceInBoard(board, Utils.WHITE_ROOK);
	
	const blackKnights = findPieceInBoard(board, Utils.BLACK_KNIGHT);
	const whiteKnights = findPieceInBoard(board, Utils.WHITE_KNIGHT);
	
	const blackBishops = findPieceInBoard(board, Utils.BLACK_BISHOP);
	const whiteBishops = findPieceInBoard(board, Utils.WHITE_BISHOP);
	
	const blackQueen = findPieceInBoard(board, Utils.BLACK_QUEEN);
	const whiteQueen = findPieceInBoard(board, Utils.WHITE_QUEEN);
	
	const blackPawns = findPieceInBoard(board, Utils.BLACK_PAWN);
	const whitePawns = findPieceInBoard(board, Utils.WHITE_PAWN);
	
	switch (pieceType) {
		case Utils.WHITE_KNIGHT:
		case Utils.BLACK_KNIGHT:
			//~ const moveKnight = movePiece(board, oldPieceLocation, randomElement);
			
			//
			// TODO: have a better way of moving pieces around the board
			// AND
			// only move a piece if the move is legal!
			// 
			var moveKnight;
			if (pieceColor === Utils.WHITE) {
				moveKnight = movePiece(board, oldPieceLocation, blackKnights[1]);	
			} else {
				moveKnight = movePiece(board, oldPieceLocation, whiteKnights[1]);	
			}
			
			const newKnightLocations = findPieceInBoard(moveKnight, pieceType);
			
			const computeKnight = newKnightLocations[index];
			
			const k = new knight(0, 0, pieceColor, pieceType, false);
			const legalKnightMoves = k.getLegalMoves(moveKnight, computeKnight, pieceColor, pieceType);
			
			const isValid = k.makeMove(legalKnightMoves[1], legalKnightMoves, newKnightLocations);
			
			return legalKnightMoves;
			
		case Utils.WHITE_ROOK:
		case Utils.BLACK_ROOK:
			//~ const moveRook = movePiece(board, oldPieceLocation, randomElement);
			
			//
			// TODO: have a better way of moving pieces around the board
			// AND
			// only move a piece if the move is legal!
			// 
			var moveRook;
			if (pieceColor === Utils.WHITE) {
				moveRook = movePiece(board, oldPieceLocation, blackPawns[1]);	
			} else {
				moveRook = movePiece(board, oldPieceLocation, whitePawns[1]);	
			}
			
			const newRookLocations = findPieceInBoard(moveRook, pieceType);
			
			const computeRook = newRookLocations[index];
			
			const r = new rook(0, 0, pieceColor, pieceType, false);
			const legalRookMoves = r.getLegalMoves(moveRook, computeRook, pieceColor, pieceType);
			
			// TODO: is a move legal or not !?
						
			return legalRookMoves;
						
		case Utils.WHITE_BISHOP:
		case Utils.BLACK_BISHOP:				
			//~ const moveBishop = movePiece(board, oldPieceLocation, randomElement);	
			
			//
			// TODO: have a better way of moving pieces around the board
			// AND
			// only move a piece if the move is legal!
			// 
			var moveBishop;
			if (pieceColor === Utils.WHITE) {
				moveBishop = movePiece(board, oldPieceLocation, blackKnights[1]);	
			} else {
				moveBishop = movePiece(board, oldPieceLocation, whitePawns[3]);	
			}
			
			//~ const moveBishop = movePiece(board, oldPieceLocation, bk[1]);	
			//~ const moveBishop = movePiece(board, oldPieceLocation, black_pawns[3]);	
			
			const newBishopLocations = findPieceInBoard(moveBishop, pieceType);
			
			const computeBishop = newBishopLocations[index];
				
			const b = new bishop(0, 0, pieceColor, pieceType, false);
			const legalBishopMoves = b.getLegalMoves(moveBishop, computeBishop, pieceColor, pieceType);
			
			// TODO: is a move legal or not !?
			
			return legalBishopMoves;
			
		case Utils.WHITE_QUEEN:		
		case Utils.BLACK_QUEEN:				
			//~ const moveQueen = movePiece(board, oldPieceLocation, randomElement);
			
			//
			// TODO: have a better way of moving pieces around the board
			// AND
			// only move a piece if the move is legal!
			// 
			var moveQueen;
			if (pieceColor === Utils.WHITE) {
				moveQueen = movePiece(board, oldPieceLocation, blackPawns[1]);
			} else {
				moveQueen = movePiece(board, oldPieceLocation, whitePawns[1]);	
			}
			
			const newQueenLocations = findPieceInBoard(moveQueen, pieceType);
			
			const computeQueen = newQueenLocations[index];
			
			const q = new queen(0, 0, pieceColor, pieceType, false);
			const legalQueenMoves = q.getLegalMoves(moveQueen, computeQueen, pieceColor, pieceType);
			
			// TODO: is a move legal or not !?
			
			return legalQueenMoves;
		
		case Utils.WHITE_PAWN:		
		case Utils.BLACK_PAWN:
			const pawns = findPieceInBoard(board, pieceType);
			
			const computePawn = pawns[index];
			
			const p = new pawn(0, 0, pieceColor, pieceType, false);
			var legalPawnMoves = p.getLegalMoves(board, computePawn, pieceColor);
			
			// TODO: is a move legal or not !?
			
			return legalPawnMoves;	
		
		case Utils.WHITE_KING:			
		case Utils.BLACK_KING:
			const moveKing = movePiece(board, oldPieceLocation, randomElement);
			
			const newKingLocations = findPieceInBoard(moveKing, pieceType);
			
			const computeKing = newKingLocations[index];
			
			const ki = new king(0, 0, pieceColor, pieceType, false);
			const legalKingMoves = ki.getLegalMoves(moveKing, computeKing);
			
			// TODO: is a move legal or not !?
			
			return legalKingMoves;
				
		default:
			console.log("Invalid piece input");
			break;
	}
}

export function detectCapture(piece) {	
	const whitePieces = [
		Utils.WHITE_PAWN,
		Utils.WHITE_ROOK,
		Utils.WHITE_KNIGHT,
		Utils.WHITE_BISHOP,
		Utils.WHITE_QUEEN,
		Utils.WHITE_KING
	];
	
	const blackPieces = [
		Utils.BLACK_PAWN,
		Utils.BLACK_ROOK,
		Utils.BLACK_KNIGHT,
		Utils.BLACK_BISHOP,
		Utils.BLACK_QUEEN,
		Utils.BLACK_KING
	];
	
	var capture = false;
	for (const white of whitePieces) {
		for (const black of blackPieces) {
			if (piece === white || piece === black) {
				capture = true;
			}
		}
	}
	return capture;
}

export function legalMoves(board, newX, newY, move1, move2, color, piece) {
	const legalMoves = [];
	
	// i am not using the value of i here, i know LOL.......
	for (var i = 0; i < board.length; i++) {
		if (newX >= 0 && newX < Utils.ROWS && newY >= 0 && newY < Utils.COLS) {
			if (board[newX][newY] === Utils.NULL) {
				board[newX][newY] = Utils.iCanMoveToHere;
				legalMoves.push([newX, newY]);
			} else {
				switch(color) {
					case Utils.WHITE:
						// don't capture your own pieces!
						if (board[newX][newY] === Utils.WHITE_PAWN || board[newX][newY] === Utils.WHITE_KNIGHT || board[newX][newY] === Utils.WHITE_ROOK || board[newX][newY] === Utils.WHITE_BISHOP || board[newX][newY] === Utils.WHITE_QUEEN || board[newX][newY] === Utils.WHITE_KING || board[newX][newY] === Utils.WHITE_KNIGHT2 || board[newX][newY] === Utils.WHITE_BISHOP2 || board[newX][newY] === Utils.WHITE_ROOK2) {
							continue;
						} else {	
							//~ board[newX][newY] = Utils.iCanCaptureYou;
							if (detectCapture(piece)) {
								alert("you have been captured...");
							}
							
							legalMoves.push([newX, newY]);
						}
						
					break;
						
					case Utils.BLACK:
						// don't capture your own pieces!
						if (board[newX][newY] === Utils.BLACK_PAWN || board[newX][newY] === Utils.BLACK_KNIGHT || board[newX][newY] === Utils.BLACK_ROOK || board[newX][newY] === Utils.BLACK_BISHOP || board[newX][newY] === Utils.BLACK_QUEEN || board[newX][newY] === Utils.BLACK_KING || board[newX][newY] === Utils.BLACK_KNIGHT2 || board[newX][newY] === Utils.BLACK_BISHOP2 || board[newX][newY] === Utils.BLACK_ROOK2) {
							continue;
						} else {
							//~ board[newX][newY] = Utils.iCanCaptureYou;
							if (detectCapture(piece)) {
								alert("you have been captured...");
							}

							legalMoves.push([newX, newY]);
						}
						
					break;
				}
				
				break;
			}
													
			newX += move1;
			newY += move2;
		}
	}
	return legalMoves;
}
