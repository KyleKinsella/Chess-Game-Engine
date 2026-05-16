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
                for (var pawn = 0; pawn < Utils.pieces.length; pawn++) {
                     if (pieces[pawn] === Utils.PAWN) {
						 board[i][j] = Utils.pieces[pawn] + " ";
						 //~ board[i][j] = Utils.freeSpace + " ";
					 }
                }
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

// this is not being used as of right now, but it will be...
export function pieceToProcess(board, oldPieceLocation, pieceType) {	
	const freeSpace = findPieceInBoard(board, Utils.freeSpace);	
	
	switch (pieceType) {
		case Utils.KNIGHT:
			// create a knight object, from the knight class
			const k = new knight(0, 0, "white", Utils.KNIGHT, false);
			
			// move a knight
			var moveKnight = movePiece(board, oldPieceLocation, freeSpace[0]);

			// find the new locations of the knights, since we moved a knight, see above ^^^^
			var newKnightLocations = findPieceInBoard(moveKnight, Utils.KNIGHT);
	
			// this is the spot that we want to find all of the legal moves for
			const computeKnight = newKnightLocations[1];
			
			// this returns an array of all of the legal moves that "computeKnight" can do
			var legalKnightMoves = k.getLegalMoves(moveKnight, computeKnight);

			// this will return true if the move is legal and false if it's illegal
			const isValid = k.makeMove(legalKnightMoves[1], legalKnightMoves, newKnightLocations);
			
			// print everything to make sure all data is correct!
			console.log("Legal Moves: (for " + pieceType + ")", legalKnightMoves, " from this location: ", computeKnight, (isValid) ? "this is a legal move !" : "this is an illegal move, you cannot do this move...");
			
			break;
		
		case Utils.ROOK:
			// create a rook object, from the rook class
			const r = new rook(0, 0, "white", Utils.ROOK, false);
	
			// this contains all of the free spaces on the updated board
			//~ var updatedFreeSpaces = findPieceInBoard(board, Utils.freeSpace);

			// move a rook
			var moveRook = movePiece(board, oldPieceLocation, freeSpace[0]);
			//~ console.log("a rook has been moved: ", moveRook);
			
			// find the new locations of the rooks, since we moved a rook, see above ^^^^
			var newRookLocations = findPieceInBoard(moveRook, Utils.ROOK);
			//~ console.log(newRookLocations);
			
			// this is the spot that we want to find all of the legal moves for
			const computeRook = newRookLocations[0];
			
			// this returns an array of all of the legal moves that "computeRook" can do
			var legalRookMoves = r.getLegalMoves(moveRook, computeRook);
			
			// TODO: is a move legal or not !?
			
			// print everything to make sure all data is correct!
			console.log("Legal Moves: (for " + pieceType + ")", legalRookMoves, "from this location:", computeRook);
			
			break
						
		case Utils.BISHOP:
			// create a bishop object, from the bishop class
			const b = new bishop(0, 0, "white", Utils.BISHOP, false);
			
			// this contains all of the free spaces on the updated board
			var updatedFreeSpaces = findPieceInBoard(board, Utils.freeSpace);
			
			// move the bishop
			//~ const moveBishop = movePiece(board, oldPieceLocation, updatedFreeSpaces[4]);
			
			const moveBishop = movePiece(board, oldPieceLocation, updatedFreeSpaces[12]);
			
			// find the new locations of the bishops, since we moved a bishop, see above ^^^^
			var newBishopLocations = findPieceInBoard(moveBishop, Utils.BISHOP);
			
			// this is the spot that we want to find all of the legal moves for
			const computeBishop = newBishopLocations[1];
			
			// this returns an array of all of the legal moves that "computeBishop" can do
			const legalBishopMoves = b.getLegalMoves(moveBishop, computeBishop);
			
			// TODO: is a move legal or not !?
			
			// print everything to make sure all data is correct!
			console.log("Legal Moves: (for " + pieceType + ")", legalBishopMoves, "from this location:", computeBishop);
			
			break;
		
		case Utils.QUEEN:
			break;
			
		case Utils.KING:
			break;
			
		case Utils.PAWN:
			//
		
			// this contains all of the free spaces on the updated board
			var updatedFreeSpaces = findPieceInBoard(board, Utils.freeSpace);
			
			const movePawn = movePiece(board, oldPieceLocation, updatedFreeSpaces[3]);
			
			//~ board[1][0] = Utils.freeSpace + " ";
			//~ board[1][1] = Utils.freeSpace + " ";
			//~ board[1][2] = Utils.freeSpace + " ";
			
			break;
		
		default:
			console.log("Invalid piece input");
			break;
	}
}
