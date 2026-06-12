class Utils {
	
	static ROWS = 8;
	static COLS = 8;

	static WHITE_ROOK = "w_rook";
	static WHITE_KNIGHT = "w_knight";
	static WHITE_BISHOP = "w_bishop";
	static WHITE_QUEEN = "w_queen";
	static WHITE_KING = "w_king";
	static WHITE_BISHOP2 = "w_bishop";
	static WHITE_KNIGHT2 = "w_knight";
	static WHITE_ROOK2 = "w_rook";
	static WHITE_PAWN = "w_pawn";
	
	static BLACK_ROOK = "b_rook";
	static BLACK_KNIGHT = "b_knight";
	static BLACK_BISHOP = "b_bishop";
	static BLACK_QUEEN = "b_queen";
	static BLACK_KING = "b_king";
	static BLACK_BISHOP2 = "b_bishop";
	static BLACK_KNIGHT2 = "b_knight";
	static BLACK_ROOK2 = "b_rook";
	static BLACK_PAWN = "b_pawn";
	
	static freeSpace = "..........."; // not using anymore, but will keep, just in case we might need him for some reason...
	
	// not in use just yet...
	static letters = "a b c d e f g h";
	static nums = "8 7 6 5 4 3 2 1";
	
	static NULL = "";
	static iCanMoveToHere = "#####"; // this is a visual cue for us to see where a piece can move to, we also have the coordinates of where the piece can move to! 
	static iCanCaptureYou = "$";
		
	static WHITE = "white";
	static BLACK = "black";
	
	static white_pieces = [this.WHITE_ROOK, this.WHITE_KNIGHT, this.WHITE_BISHOP, this.WHITE_QUEEN, this.WHITE_KING, this.WHITE_BISHOP2, this.WHITE_KNIGHT2, this.WHITE_ROOK2];
	static black_pieces = [this.BLACK_ROOK, this.BLACK_KNIGHT, this.BLACK_BISHOP, this.BLACK_QUEEN, this.BLACK_KING, this.BLACK_BISHOP2, this.BLACK_KNIGHT2, this.BLACK_ROOK2];
	static board = [[], [], [], [], [], [], [], []];
}

export default Utils;
