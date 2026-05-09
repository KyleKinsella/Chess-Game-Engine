class ChessPiece {
	constructor(row, col, color, type, isCaptured) {
		this.row = row;
		this.col = col;
		this.color = color;
		this.type = type;
		this.isCaptured = isCaptured;
	}
	
	getLegalMoves(board) {throw new Error("TODO"); }
	makeMove(move, board) {} 
	getCaptured() {}
}

export default ChessPiece;
