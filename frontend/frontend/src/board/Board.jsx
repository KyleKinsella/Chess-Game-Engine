import Utils from "../utils.jsx";
import knight from "../knight/knight.jsx";
import rook from "../rook/rook.jsx";
import bishop from "../bishop/bishop.jsx";
import queen from "../queen/queen.jsx";
import king from "../king/king.jsx";
import pawn from "../pawn/pawn.jsx";
import Square from "./Square.jsx";
// TODO: have - "a,b,c,d,e,f,g,h" at the bottom of the board and at the left hand side of the board have - "8 7 6 5 4 3 2 1"
export function initGameBoard(board, pieces, rows, cols) {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            
            if (i === 0 || i === 7) {
                board[i][j] = new Square({ coords: [i, j], isFree: false, piece: Utils.pieces[j], highlight: false });
            }
             
			if (i === 2 || i === 3 || i === 4 || i === 5) {
                board[i][j] = new Square({ coords: [i, j], isFree: true, piece: "", highlight: false });
            }
                
            if (i === 1 || i === 6) {  
				// i am stupid (Charles Leclerc - Ferrari Driver) -- when i remove all of the pawns off the board 
				// i as not replacing it with anything, so i was removing 2 rows!   
				//board[i][j] = new Square({ coords: [i, j], isFree: false, piece: Utils.PAWN, highlight: false });
				board[i][j] = new Square({ coords: [i, j], isFree: true, piece: "", highlight: false });
            }
        }
    }   
    return board;
}

// will need later on in the project...
export function resetBoard(board) {
	return initGameBoard(board, Utils.pieces, Utils.ROWS, Utils.COLS);
}

export function findPieceInBoard(board, pieceToFind) {
	const pieces = [];
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board[i].length; j++) {			
			if (board[i][j] === pieceToFind + " ") {
				pieces.push([i, j]);
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
	board[oldRow][oldCol] = Utils.freeSpace + " ";
	
	return board;
}

export function pieceToProcess(board, oldPieceLocation, index, pieceType) {		
	const updatedFreeSpaces = findPieceInBoard(board, Utils.freeSpace);	
	const randomElement = updatedFreeSpaces[Math.floor(Math.random() * updatedFreeSpaces.length)];
	// randomElement is for testing purposes only! // 
	
	switch (pieceType) {
		case Utils.KNIGHT:						
			const moveKnight = movePiece(board, oldPieceLocation, randomElement);
			
			const newKnightLocations = findPieceInBoard(moveKnight, Utils.KNIGHT);
			
			const computeKnight = newKnightLocations[index];
			
			const k = new knight(0, 0, "white", Utils.KNIGHT, false);
			const legalKnightMoves = k.getLegalMoves(moveKnight, computeKnight);
			
			const isValid = k.makeMove(legalKnightMoves[1], legalKnightMoves, newKnightLocations);
			
			return legalKnightMoves;
			
		case Utils.ROOK:			
			const moveRook = movePiece(board, oldPieceLocation, randomElement);
			
			const newRookLocations = findPieceInBoard(moveRook, Utils.ROOK);
			
			const computeRook = newRookLocations[index];
			
			const r = new rook(0, 0, "white", Utils.ROOK, false);
			const legalRookMoves = r.getLegalMoves(moveRook, computeRook);
			
			// TODO: is a move legal or not !?
			
			return legalRookMoves;
						
		case Utils.BISHOP:			
			const moveBishop = movePiece(board, oldPieceLocation, randomElement);		
				
			const newBishopLocations = findPieceInBoard(moveBishop, Utils.BISHOP);
			
			const computeBishop = newBishopLocations[index];
				
			const b = new bishop(0, 0, "white", Utils.BISHOP, false);
			const legalBishopMoves = b.getLegalMoves(moveBishop, computeBishop);
			
			// TODO: is a move legal or not !?
			
			return legalBishopMoves;
			
		case Utils.QUEEN:						
			const moveQueen = movePiece(board, oldPieceLocation, randomElement);
			
			const newQueenLocations = findPieceInBoard(moveQueen, Utils.QUEEN);
			
			const computeQueen = newQueenLocations[index];
			
			const q = new queen(0, 0, "white", Utils.QUEEN, false);
			const legalQueenMoves = q.getLegalMoves(moveQueen, computeQueen);
			
			// TODO: is a move legal or not !?
			
			return legalQueenMoves;
		
		case Utils.PAWN:			
			//~ const movePawn = movePiece(board, oldPieceLocation, updatedFreeSpaces[0]);
			
			const pawns = findPieceInBoard(board, Utils.PAWN);
			
			const computePawn = pawns[index];
			
			const p = new pawn(0, 0, "white", Utils.PAWN, false);
			var legalPawnMoves = p.getLegalMoves(board, computePawn);
			
			// TODO: is a move legal or not !?
			
			const down = [0, 1, 2, 3, 4, 5, 6, 7];
			for (var i = 0; i < down.length; i++) {
				if (index === down[i]) {
					var movePawn = movePiece(board, oldPieceLocation, legalPawnMoves[1]);
			
					for (var i = 0; i < board.length; i++) {
						for (var j = 0; j < board[i].length; j++) {
							if (board[i][j-1] === "#####" + " " || board[i][j-1] === Utils.freeSpace + " ") { // || board[1][7] === Utils.freeSpace + " ") {
								board[i][j-1] = Utils.freeSpace + " ";
								board[2][7] = Utils.freeSpace + " "; // this WILL be an issue...
							}
						}
					}
				
					const newPawnLocations = findPieceInBoard(board, Utils.PAWN);
					
					movePawn = movePiece(board, oldPieceLocation, updatedFreeSpaces[3]);
					
					legalPawnMoves = p.getLegalMoves(board, newPawnLocations[7]);
					break;
				}
			}
			
			const up = [8, 9, 10, 11, 12, 13, 14, 15];
			for (var i = 0; i < up.length; i++) {
				if (index === up[i]) {
					var movePawn = movePiece(board, oldPieceLocation, legalPawnMoves[1]);
			
					for (var i = 0; i < board.length; i++) {
						for (var j = 0; j < board[i].length; j++) {
							if (board[i][j+1] === "#####" + " " || board[i][j+1] === Utils.freeSpace + " ") { // || board[1][7] === Utils.freeSpace + " ") {
								board[i][j+1] = Utils.freeSpace + " ";
								//~ board[2][7] = Utils.freeSpace + " "; // this WILL be an issue...
							}
						}
					}
				
					const newPawnLocations = findPieceInBoard(board, Utils.PAWN);
					
					movePawn = movePiece(board, newPawnLocations[8], updatedFreeSpaces[32]);
					
					//~ legalPawnMoves = p.getLegalMoves(board, newPawnLocations[7]);
					break;
				}
			}
			
			return legalPawnMoves;	
		
		case Utils.KING:			
			const moveKing = movePiece(board, oldPieceLocation, randomElement);
			
			const newKingLocations = findPieceInBoard(moveKing, Utils.KING);
			
			const computeKing = newKingLocations[index];
			
			const ki = new king(0, 0, "white", Utils.KING, false);
			const legalKingMoves = ki.getLegalMoves(moveKing, computeKing);
			
			// TODO: is a move legal or not !?
			
			return legalKingMoves;
				
		default:
			console.log("Invalid piece input");
			break;
	}
}
