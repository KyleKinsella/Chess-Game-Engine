import Utils from "../utils.jsx";
//import { initGameBoard } from "../board/Board.jsx";

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

// TODO: this function moves any piece anywhere on the board - need to make this more strict!
export function movePiece(board, oldRow, oldCol, newRow, newCol) {
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
