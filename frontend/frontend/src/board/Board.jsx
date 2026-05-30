import Utils from "../utils.jsx";
import knight from "../knight/knight.jsx";
import rook from "../rook/rook.jsx";
import bishop from "../bishop/bishop.jsx";
import queen from "../queen/queen.jsx";
import king from "../king/king.jsx";
import pawn from "../pawn/pawn.jsx";

// TODO: have - "a,b,c,d,e,f,g,h" at the bottom of the board and at the left hand side of the board have - "8 7 6 5 4 3 2 1"
export function initGameBoard(board, pieces, rows, cols) {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            
            if (i === 0 || i === 7) {
                board[i][j] = Utils.pieces[j] + " ";
            }
             
			if (i === 2 || i === 3 || i === 4 || i === 5) {
                board[i][j] = Utils.freeSpace + " ";
            }
                
            if (i === 1 || i === 6) {  
				// i am stupid (Charles Leclerc - Ferrari Driver) -- when i remove all of the pawns off the board 
				// i as not replacing it with anything, so i was removing 2 rows!   
				board[i][j] = Utils.PAWN + " ";
				//~ board[i][j] = Utils.freeSpace + " ";
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

// pieceToProcess function usage:
// Steps for each piece (how do we process each piece) ?
// Step 1: create a piece object (whatever piece you want to process)
// Step 2: find all of the updated free spots on the board
// Step 3: move your piece
// Step 4: find all of the updated piece locations, since you have just moved a piece
// Step 5: pick a spot that you want to compute the legal moves for
// Step 6: now you have all of the legal moves from Step 5
// Step 7: check if the move is a valid or invalid move
// Step 8: print some of the data to ensure correct output

export function pieceToProcess(board, oldPieceLocation, pieceType) {		
	const updatedFreeSpaces = findPieceInBoard(board, Utils.freeSpace);	
	const randomElement = updatedFreeSpaces[Math.floor(Math.random() * updatedFreeSpaces.length)];
	// randomElement is for testing purposes only! // 
	
	switch (pieceType) {
		case Utils.KNIGHT:
			const k = new knight(0, 0, "white", Utils.KNIGHT, false);
						
			const moveKnight = movePiece(board, oldPieceLocation, randomElement);
			
			const newKnightLocations = findPieceInBoard(moveKnight, Utils.KNIGHT);
			
			// you need to be careful of the value of "oldPieceLocation" that is passed to this function, because depending on the location on the passed in piece, that will affect the output of "newRookLocations", 
			// and if the "oldPieceLocation" is the same as the "newRookLocations" at a certain index it won't show the "#####"....
			const computeKnight = newKnightLocations[1];
			
			const legalKnightMoves = k.getLegalMoves(moveKnight, computeKnight);
			
			const isValid = k.makeMove(legalKnightMoves[1], legalKnightMoves, newKnightLocations);
			
			return legalKnightMoves;
			
		case Utils.ROOK:
			const r = new rook(0, 0, "white", Utils.ROOK, false);
			
			//~ updatedFreeSpaces[0]
			const moveRook = movePiece(board, oldPieceLocation, randomElement);
			
			const newRookLocations = findPieceInBoard(moveRook, Utils.ROOK);
			
			// you need to be careful of the value of "oldPieceLocation" that is passed to this function, because depending on the location on the passed in piece, that will affect the output of "newRookLocations", 
			// and if the "oldPieceLocation" is the same as the "newRookLocations" at a certain index it won't show the "#####"....
			
			// for example, if oldPieceLocation = rooks[0], and computeRook = newRookLocations[0] -- this depends on the ouput of newRookLocations, we won't see the "#####". But if the "oldPieceLocation" = rooks[0], and 
			// computeRook = newRookLocations[1] -- this depends on the ouput of newRookLocations, and we will see the "#####"!
			const computeRook = newRookLocations[1];
			
			const legalRookMoves = r.getLegalMoves(moveRook, computeRook);
			
			// TODO: is a move legal or not !?
			
			return legalRookMoves;
						
		case Utils.BISHOP:
			const b = new bishop(0, 0, "white", Utils.BISHOP, false);
						
			// this is not an ideal thing to do, but it works for now!
			board[0][0] = Utils.freeSpace + " ";
			
			//~ const moveBishop = movePiece(board, oldPieceLocation, updatedFreeSpaces[46]); // only do this if you have removed the pawns off of the board! (otherwise, it will break...)
			const moveBishop = movePiece(board, oldPieceLocation, randomElement);		
				
			const newBishopLocations = findPieceInBoard(moveBishop, Utils.BISHOP);
			
			// you need to be careful of the value of "oldPieceLocation" that is passed to this function, because depending on the location on the passed in piece, that will affect the output of "newRookLocations", 
			// and if the "oldPieceLocation" is the same as the "newRookLocations" at a certain index it won't show the "#####"....
			const computeBishop = newBishopLocations[1];
				
			const legalBishopMoves = b.getLegalMoves(moveBishop, computeBishop);
			
			// TODO: is a move legal or not !?
			
			return legalBishopMoves;
			
		case Utils.QUEEN:
			const q = new queen(0, 0, "white", Utils.QUEEN, false);
			
			// this is not an ideal thing to do, but it works for now!
			board[0][0] = Utils.freeSpace + " ";
									
			const moveQueen = movePiece(board, oldPieceLocation, randomElement);
			
			const newQueenLocations = findPieceInBoard(moveQueen, Utils.QUEEN);
			
			// you need to be careful of the value of "oldPieceLocation" that is passed to this function, because depending on the location on the passed in piece, that will affect the output of "newRookLocations", 
			// and if the "oldPieceLocation" is the same as the "newRookLocations" at a certain index it won't show the "#####"....
			const computeQueen = newQueenLocations[0];
			
			const legalQueenMoves = q.getLegalMoves(moveQueen, computeQueen);
			
			// TODO: is a move legal or not !?
			
			return legalQueenMoves;
			
		case Utils.KING:
			const ki = new king(0, 0, "white", Utils.KING, false);
			
			const moveKing = movePiece(board, oldPieceLocation, updatedFreeSpaces[27]);
			
			const newKingLocations = findPieceInBoard(moveKing, Utils.KING);
			//~ console.log(newKingLocations);
			
			// you need to be careful of the value of "oldPieceLocation" that is passed to this function, because depending on the location on the passed in piece, that will affect the output of "newRookLocations", 
			// and if the "oldPieceLocation" is the same as the "newRookLocations" at a certain index it won't show the "#####"....
			
			// for example, if oldPieceLocation = rooks[0], and computeRook = newRookLocations[0] -- this depends on the ouput of newRookLocations, we won't see the "#####". But if the "oldPieceLocation" = rooks[0], and 
			// computeRook = newRookLocations[1] -- this depends on the ouput of newRookLocations, and we will see the "#####"!
			const computeKing = newKingLocations[0];
			
			const legalKingMoves = ki.getLegalMoves(moveKing, computeKing);
			
			// TODO: is a move legal or not !?
			
			return legalKingMoves;
					
		case Utils.PAWN:
			const p = new pawn(0, 0, "white", Utils.PAWN, false);
			
			//~ const movePawn = movePiece(board, oldPieceLocation, updatedFreeSpaces[0]);
			
			const newPawnLocations = findPieceInBoard(board, Utils.PAWN);
			
			// you need to be careful of the value of "oldPieceLocation" that is passed to this function, because depending on the location on the passed in piece, that will affect the output of "newRookLocations", 
			// and if the "oldPieceLocation" is the same as the "newRookLocations" at a certain index it won't show the "#####"....
			const computePawn = newPawnLocations[11];
			
			const legalPawnMoves = p.getLegalMoves(board, computePawn);
			
			// TODO: is a move legal or not !?
			
			return legalPawnMoves;
			
		default:
			console.log("Invalid piece input");
			break;
	}
}
