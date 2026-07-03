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
	return initGameBoard(board, Utils.ROWS, Utils.COLS);
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

// 
// This function is not very optimal... (this is not good, for speed reasons...), it works perfectly for now, but this will be changed later on!
//
function cleanBoard(board) {
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            if (board[j][i] === Utils.iCanMoveToHere || board[j][i] === Utils.iCanCaptureYou) {
                board[j][i] = Utils.NULL;
            }
        }
    }
    return board;
}

function dontMoveToRandomSpotAnymore(legalPieceMoves) {
	const moves = [];
	for (var i = 0; i < legalPieceMoves.length; i++) {
		moves.push("\n" + legalPieceMoves[i]);
	}
	return moves;
}

function recomputeLegalMovesAfterMoving(board, oldPieceLocation, pieceType, pieceColor, obj, whereDoYouWishToMoveTo, moved) {
	const strToArray = JSON.parse("[" + whereDoYouWishToMoveTo + "]");
	const movePc = movePiece(board, oldPieceLocation, strToArray);
	
	const newPieceLocations = findPieceInBoard(movePc, pieceType);
	var computePiece = newPieceLocations[1];
	
	if (pieceType === Utils.WHITE_PAWN) {
		computePiece = newPieceLocations[7];
	} else if (pieceType === Utils.BLACK_PAWN) {
		computePiece = newPieceLocations[0];
	}
	
	if (pieceType === Utils.WHITE_QUEEN || pieceType === Utils.BLACK_QUEEN) {
		computePiece = newPieceLocations[0];
	}
	
	const cleanUp = cleanBoard(movePc);
	return obj.getLegalMoves(cleanUp, computePiece, pieceColor, pieceType, moved);
}

function userMovesPiece(legalPieceMoves) {
	// not a great idea, but it works for now, Lol !
	return prompt("What index would you like to move to?\n\nPick one of the following indexes:\n" + dontMoveToRandomSpotAnymore(legalPieceMoves));
	
	// TODO: check if what the user typed is in the "legalPieceMoves"!
}

export function pieceToProcess(board, oldPieceLocation, selectedPiece, pieceType, pieceColor) {
	switch (pieceType) {
		case Utils.WHITE_KNIGHT:
		case Utils.BLACK_KNIGHT:
			const k = new knight(0, 0, pieceColor, pieceType, false);
			var legalKnightMoves = k.getLegalMoves(board, oldPieceLocation, pieceColor, pieceType);
			
			if (selectedPiece === Utils.iCanMoveToHere || selectedPiece === Utils.iCanCaptureYou) {	
				const whereDoYouWishToMoveTo = userMovesPiece(legalKnightMoves);
				legalKnightMoves = recomputeLegalMovesAfterMoving(board, oldPieceLocation, pieceType, pieceColor, k, whereDoYouWishToMoveTo);
			}
			
			const isValid = k.makeMove(legalKnightMoves[1], legalKnightMoves, board);
			
			return legalKnightMoves;
			
		case Utils.WHITE_ROOK:
		case Utils.BLACK_ROOK:
			const r = new rook(0, 0, pieceColor, pieceType, false);
			var legalRookMoves = r.getLegalMoves(board, oldPieceLocation, pieceColor, pieceType);
			
			// TODO: Game-Loop, for doing this each time we want to process/move a rook piece and for any other piece!
			if (selectedPiece === Utils.iCanMoveToHere || selectedPiece === Utils.iCanCaptureYou) {	
				const whereDoYouWishToMoveTo = userMovesPiece(legalRookMoves);
				legalRookMoves = recomputeLegalMovesAfterMoving(board, oldPieceLocation, pieceType, pieceColor, r, whereDoYouWishToMoveTo);	
			}
			
			// TODO: is a move legal or not !?
			
			return legalRookMoves;
			
		case Utils.WHITE_BISHOP:
		case Utils.BLACK_BISHOP:					
			const b = new bishop(0, 0, pieceColor, pieceType, false);
			var legalBishopMoves = b.getLegalMoves(board, oldPieceLocation, pieceColor, pieceType);
			
			if (selectedPiece === Utils.iCanMoveToHere || selectedPiece === Utils.iCanCaptureYou) {	
				const whereDoYouWishToMoveTo = userMovesPiece(legalBishopMoves);
				legalBishopMoves = recomputeLegalMovesAfterMoving(board, oldPieceLocation, pieceType, pieceColor, b, whereDoYouWishToMoveTo);
			}
			
			// TODO: is a move legal or not !?
			
			return legalBishopMoves;
			
		case Utils.WHITE_QUEEN:		
		case Utils.BLACK_QUEEN:				
			const q = new queen(0, 0, pieceColor, pieceType, false);
			var legalQueenMoves = q.getLegalMoves(board, oldPieceLocation, pieceColor, pieceType);
			
			if (selectedPiece === Utils.iCanMoveToHere || selectedPiece === Utils.iCanCaptureYou) {	
				const whereDoYouWishToMoveTo = userMovesPiece(legalQueenMoves);
				legalQueenMoves = recomputeLegalMovesAfterMoving(board, oldPieceLocation, pieceType, pieceColor, q, whereDoYouWishToMoveTo);
			}
			
			// TODO: is a move legal or not !?
			
			return legalQueenMoves;
		
		case Utils.WHITE_PAWN:		
		case Utils.BLACK_PAWN:
			const p = new pawn(0, 0, pieceColor, pieceType, false);
			var legalPawnMoves = p.getLegalMoves(board, oldPieceLocation, pieceColor, false);
			
			if (selectedPiece === Utils.iCanMoveToHere || selectedPiece === Utils.iCanCaptureYou) {	
				const whereDoYouWishToMoveTo = userMovesPiece(legalPawnMoves);
				legalPawnMoves = recomputeLegalMovesAfterMoving(board, oldPieceLocation, pieceType, pieceColor, p, whereDoYouWishToMoveTo, true);
			}
				
			// TODO: is a move legal or not !?
			
			return legalPawnMoves;	
		
		case Utils.WHITE_KING:			
		case Utils.BLACK_KING:
			const ki = new king(0, 0, pieceColor, pieceType, false);
			const legalKingMoves = ki.getLegalMoves(board, oldPieceLocation);
			
			// TODO: is a move legal or not !?
			
			return legalKingMoves;
				
		default:
			console.log("Invalid piece input");
			break;
	}
}

export function detectCapture(piece) {	
	var capture = false;
	for (const white of Utils.white_pieces) {
		for (const black of Utils.black_pieces) {
			if (piece === white || piece === black) {
				capture = true;
			}
		}
	}
	return capture;
}

export function notify(piece, pieceCaptured) {
	if (detectCapture(piece)) {
		alert("A '" + pieceCaptured + "' has been captured.");
	}
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
				switch (color) {
					case Utils.WHITE:
						// don't capture your own pieces!
						if (board[newX][newY] === Utils.WHITE_PAWN || board[newX][newY] === Utils.WHITE_KNIGHT || board[newX][newY] === Utils.WHITE_ROOK || board[newX][newY] === Utils.WHITE_BISHOP || board[newX][newY] === Utils.WHITE_QUEEN || board[newX][newY] === Utils.WHITE_KING || board[newX][newY] === Utils.WHITE_KNIGHT2 || board[newX][newY] === Utils.WHITE_BISHOP2 || board[newX][newY] === Utils.WHITE_ROOK2) {
							continue;		
						} else {	
							board[newX][newY] += Utils.iCanCaptureYou;
							
							// A piece has been captured
							//~ notify(piece, board[newX][newY]);
							
							legalMoves.push([newX, newY]);
						}
						
					break;
					
					case Utils.BLACK:
						// don't capture your own pieces!
						if (board[newX][newY] === Utils.BLACK_PAWN || board[newX][newY] === Utils.BLACK_KNIGHT || board[newX][newY] === Utils.BLACK_ROOK || board[newX][newY] === Utils.BLACK_BISHOP || board[newX][newY] === Utils.BLACK_QUEEN || board[newX][newY] === Utils.BLACK_KING || board[newX][newY] === Utils.BLACK_KNIGHT2 || board[newX][newY] === Utils.BLACK_BISHOP2 || board[newX][newY] === Utils.BLACK_ROOK2) {
							continue;
						} else {
							board[newX][newY] += Utils.iCanCaptureYou;
							
							// A piece has been captured
							//~ notify(piece, board[newX][newY]);
							
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
