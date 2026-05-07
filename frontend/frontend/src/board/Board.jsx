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

// TODO: this function moves any piece anywhere on the board - need to make this more strict!
//~ export function movePiece(board, piece, oldRow, oldCol, newRow, newCol) { //piece	
	//~ switch (piece) {
		//~ case Utils.PAWN:
			//~ break;
			
		//~ case Utils.ROOK:
			//~ break;
			
		//~ case Utils.KNIGHT:
			//~ break;
			
		//~ case Utils.BISHOP:
			//~ break;
			
		//~ case Utils.QUEEN:
			//~ break;
			
		//~ case Utils.KING:
			//~ break;
	//~ }
		
	//~ const b = board[oldRow][oldCol];
	
	//~ board[newRow][newCol] = b;
	//~ board[oldRow][oldCol] = Utils.freeSpace + " ";
	
	//~ return board;
//~ }

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

// need to add edge cases to this function... (kinda doing this: a2 -> a3)
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

//~ function Board() {
	//~ var board = initGameBoard(Utils.board, Utils.pieces, Utils.ROWS, Utils.COLS);
	//~ var move = movePiece(board, 0, 1, 1, 3);
	
	//return move;
//~ }

//~ export default Board;
