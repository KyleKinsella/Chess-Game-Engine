class Utils {
	
	static ROWS = 8;
	static COLS = 8;

	static ROOK = "rook";
	static KNIGHT = "knight";
	static BISHOP = "bishop";
	static QUEEN = "queen";
	static KING = "king";
	static BISHOP2 = "bishop";
	static KNIGHT2 = "knight";
	static ROOK2 = "rook";
	static PAWN = "pawn";
	static freeSpace = "..........."; // not using anymore, but will keep, just in case we might need him for some reason...
	
	static letters = "a b c d e f g h";
	static nums = "8 7 6 5 4 3 2 1";
	
	static NULL = "";
	static iCanMoveToHere = "#####"; // this is a visual cue for us to see where a piece can move to, we also have the coordinates of where the piece can move to! 
	
	static pieces = [this.ROOK, this.KNIGHT, this.BISHOP, this.QUEEN, this.KING, this.BISHOP2, this.KNIGHT2, this.ROOK2];
	static board = [[], [], [], [], [], [], [], []];
}

export default Utils;
