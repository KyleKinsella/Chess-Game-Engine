class ChessPiece {
	constructor(row, col, color, type, isCaptured) {
		this.row = row;
		this.col = col;
		this.color = color;
		this.type = type;
		this.isCaptured = isCaptured;
	}
	
	getLegalMoves(board, oldLocation) {throw new Error("Method 'getLegalMoves' must be implemented."); }
	makeMove(move, legalMoves, board) {} 
	getCaptured() {}
}

export default ChessPiece;
