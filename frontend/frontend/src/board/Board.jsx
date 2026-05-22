import Utils from "../utils.jsx";
import knight from "../knight/knight.jsx";
import rook from "../rook/rook.jsx";
import bishop from "../bishop/bishop.jsx";

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
				board[i][j] = Utils.PAWN + " ";
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
	switch (pieceType) {
		case Utils.KNIGHT:
			const k = new knight(0, 0, "white", Utils.KNIGHT, false);
			
			const updatedFreeSpaces = findPieceInBoard(board, Utils.freeSpace);	
			
			const moveKnight = movePiece(board, oldPieceLocation, updatedFreeSpaces[0]);
			
			const newKnightLocations = findPieceInBoard(moveKnight, Utils.KNIGHT);
			
			const computeKnight = newKnightLocations[1];
			
			const legalKnightMoves = k.getLegalMoves(moveKnight, computeKnight);
			
			const isValid = k.makeMove(legalKnightMoves[1], legalKnightMoves, newKnightLocations);
			
			console.log("Legal Moves: (for " + pieceType + ")", legalKnightMoves, " from this location: ", computeKnight, (isValid) ? "this is a legal move !" : "this is an illegal move, you cannot do this move...");
			
			break;
		
		case Utils.ROOK:
			const r = new rook(0, 0, "white", Utils.ROOK, false);
			
			const updatedFreeSpaces2 = findPieceInBoard(board, Utils.freeSpace);
			
			const moveRook = movePiece(board, oldPieceLocation, updatedFreeSpaces2[0]);
			
			const newRookLocations = findPieceInBoard(moveRook, Utils.ROOK);
			
			const computeRook = newRookLocations[0];
			
			const legalRookMoves = r.getLegalMoves(moveRook, computeRook);
			
			// TODO: is a move legal or not !?
			
			console.log("Legal Moves: (for " + pieceType + ")", legalRookMoves, "from this location:", computeRook);
			
			break;
						
		case Utils.BISHOP:
			const b = new bishop(0, 0, "white", Utils.BISHOP, false);
			
			const updatedFreeSpaces3 = findPieceInBoard(board, Utils.freeSpace);	
			
			const moveBishop = movePiece(board, oldPieceLocation, updatedFreeSpaces3[13]);
			
			const newBishopLocations = findPieceInBoard(moveBishop, Utils.BISHOP);
			
			const computeBishop = newBishopLocations[1];
			
			const legalBishopMoves = b.getLegalMoves(moveBishop, computeBishop);
			
			// TODO: is a move legal or not !?
			
			console.log("Legal Moves: (for " + pieceType + ")", legalBishopMoves, "from this location:", computeBishop);
			break;
			
		case Utils.QUEEN:
			break;
			
		case Utils.KING:
			break;
			
		case Utils.PAWN:
			break;
		
		default:
			console.log("Invalid piece input");
			break;
	}
}
