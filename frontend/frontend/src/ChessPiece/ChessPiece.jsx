class ChessPiece {
	constructor(rows, cols, color, type, isCaptured) {
		this.rows = rows;
		this.cols = cols;
		this.color = color;
		this.type = type;
		this.isCaptured = isCaptured;
	}
	
	getLegalMoves(board) {throw new Error("TODO"); }
	makeMove(move, board) {} 
	getCaptured() {}
}

//~ function ChessPiece() {
	
	//~ const c = new ChessPiece();
	
	//~ return (
		//~ <div>
		
		//~ </div>
	//~ )
//~ }

export default ChessPiece;
