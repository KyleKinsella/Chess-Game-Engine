import Utils from "../utils.jsx";

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
	switch (pieceType) {
		case Utils.ROOK:
			break
			
		case Utils.KNIGHT:
			return whereCanKnightMoveTo(board, oldPieceLoc);
			//break;
			
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

export function whereCanKnightMoveTo(board, oldKnightLoc) {

    const row = oldKnightLoc[0];
    const col = oldKnightLoc[1];

    const knightMoves = [
        [-2, -1], // up 2, left 1
        [-2,  1], // up 2, right 1
        [-1, -2], // up 1, left 2
        [-1, 2], // up 1, right 2
        
        [1, -2], // down 1, left 2
        [1, 2], // down 1, right 2
        [2, -1], // down 2, left 1
        [2, 1] // down 2, right 1
    ];

    const legalMoves = [];

    for (const move of knightMoves) {

        const newRow = row + move[0];
        const newCol = col + move[1];

        if (newRow >= 0 && newRow < Utils.ROWS && newCol >= 0 && newCol < Utils.COLS) {
            legalMoves.push([newRow, newCol]);
        }
    }

	return legalMoves;
}
