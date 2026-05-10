import Utils from "../utils.jsx";
import knight from "../knight/knight.jsx";
import rook from "../rook/rook.jsx";

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
export function pieceToProcess(board, oldPieceLoc, pieceType) {	
	const freeSpace = findPieceInBoard(board, Utils.freeSpace);	
	
	switch (pieceType) {
		case Utils.KNIGHT:
			// create a knight object, from the knight class
			const k = new knight(0, 0, "white", Utils.KNIGHT, false);
	
			// all of the knights on the chess board, at the very start of the game
			const knights = findPieceInBoard(board, Utils.KNIGHT);
			
			// move a knight
			var moveKnight = movePiece(board, knights[0], freeSpace[0]);

			// find the new locations of the knights, since we moved a knight, see above ^^^^
			var newKnightLocations = findPieceInBoard(moveKnight, Utils.KNIGHT);
	
			// this is the spot that we want to find all of the legal moves for
			const computeKnight = newKnightLocations[1];
			
			// this returns an array of all of the legal moves that "spotToCompute" can do
			var legalKnightMoves = k.getLegalMoves(moveKnight, computeKnight);

			// this will return true if the move is legal and false if it's illegal
			const isValid = k.makeMove(legalKnightMoves[1], legalKnightMoves, newKnightLocations);
			
			// print everything to make sure all data is correct!
			console.log("init knights: ", knights, "updated knight locations: ", newKnightLocations, "you can do the following legal moves: ", legalKnightMoves, " from this location: ", computeKnight, "\n\n", (isValid) ? "this is a legal move !" : "this is an illegal move, you cannot do this move...");
			
			break;
		
		case Utils.ROOK:
			// create a rook object, from the rook class
			const r = new rook(0, 0, "white", Utils.ROOK, false);
	
			// all of the rooks on the chess board, at the very start of the game
			const rooks = findPieceInBoard(board, Utils.ROOK);
			
			// this contains all of the free spaces on the updated board
			var updatedFreeSpaces = findPieceInBoard(board, Utils.freeSpace);

			// move a rook
			var moveRook = movePiece(board, rooks[0], updatedFreeSpaces[0]);
			
			// find the new locations of the rooks, since we moved a rook, see above ^^^^
			var newRookLocations = findPieceInBoard(board, Utils.ROOK);
			
			// this is the spot that we want to find all of the legal moves for
			const computeRook = newRookLocations[0];
			
			// this returns an array of all of the legal moves that "spotToCompute" can do
			var legalRookMoves = r.getLegalMoves(board, computeRook);
			
			// TODO: is a move legal or not !?
			
			// print everything to make sure all data is correct!
			console.log("\ninit rooks: ", rooks, "updated rook locations: ", newRookLocations, " you can do the following legal moves: ", legalRookMoves, " from this location: ", computeRook);	//, "\n\n" , (isValid) ? "this is a legal move !" : "this is an illegal move, you cannot do this move...");
			
			break
						
		case Utils.BISHOP:
			break;
		
		case Utils.QUEEN:
			break;
			
		case Utils.KING:
			break;
			
		case Utils.PAWN:
			break;
	}
}
