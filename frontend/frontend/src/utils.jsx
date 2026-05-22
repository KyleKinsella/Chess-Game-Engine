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
	static freeSpace = "...........";
	
	static letters = "a b c d e f g";
	static nums = "8 7 6 5 4 3 2 1";
	
	static pieces = [this.ROOK, this.KNIGHT, this.BISHOP, this.QUEEN, this.KING, this.BISHOP2, this.KNIGHT2, this.ROOK2];
	static board = [[], [], [], [], [], [], [], []];
}

export default Utils;
