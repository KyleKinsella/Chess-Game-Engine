import Utils from "./utils.jsx";
import { initGameBoard, findPieceInBoard, pieceToProcess, movePiece } from "./board/Board.jsx";
import "./main.css";

// for testing purposes ONLY:
function freeSpot(board) {
	board[4][1] = Utils.NULL;
	board[1][1] = Utils.NULL;
	
	board[2][6] = Utils.NULL
	board[5][6] = Utils.NULL;
	return board;
}

function App() {
	//
	// create the chess game board
	// 
	const b = initGameBoard(Utils.board, Utils.ROWS, Utils.COLS);
	
	// 
	// find all of the pieces on the board, once the board is created
	//
	// WHITE //
	const whiteKnights = findPieceInBoard(b, Utils.WHITE_KNIGHT);
	const whiteRooks = findPieceInBoard(b, Utils.WHITE_ROOK);
	const whiteBishops = findPieceInBoard(b, Utils.WHITE_BISHOP);
	const whiteQueen = findPieceInBoard(b, Utils.WHITE_QUEEN);
	const whitePawns = findPieceInBoard(b, Utils.WHITE_PAWN);
	const whiteKing = findPieceInBoard(b, Utils.WHITE_KING);
	
	// BLACK //
	const blackKnights = findPieceInBoard(b, Utils.BLACK_KNIGHT);
	const blackRooks = findPieceInBoard(b, Utils.BLACK_ROOK);
	const blackBishops = findPieceInBoard(b, Utils.BLACK_BISHOP);
	const blackQueen = findPieceInBoard(b, Utils.BLACK_QUEEN);
	const blackPawns = findPieceInBoard(b, Utils.BLACK_PAWN);
	const blackKing = findPieceInBoard(b, Utils.BLACK_KING);
	
	// 
	// legal moves for each piece - this updates the board to contain "#####" this is the legal moves for that piece
	//
	const values = ["knight", "rook", "bishop", "queen", "pawn", "king"];
	var rand = values[Math.floor(Math.random() * values.length)];
	//~ rand = "";
	
	const colors = [Utils.WHITE, Utils.BLACK];
	const whiteOrBlack = colors[Math.floor(Math.random() * colors.length)];
		
	switch (rand) {
	 	case "knight":
	 		freeSpot(b);
			
			switch (whiteOrBlack) {
				case Utils.WHITE:
					const whiteProcessKnight = pieceToProcess(b, whiteKnights[0], 1, Utils.WHITE_KNIGHT, whiteOrBlack);
					console.log(whiteProcessKnight);
					break;
				
				case Utils.BLACK:
					const blackProcessKnight = pieceToProcess(b, blackKnights[0], 0, Utils.BLACK_KNIGHT, whiteOrBlack);
					console.log(blackProcessKnight);
					break;
			}
			
	 		break;
			
	 	case "rook":
	 		freeSpot(b);
	 		
			switch (whiteOrBlack) {
				case Utils.WHITE:
					const whiteProcessRook = pieceToProcess(b, whiteRooks[0], 1, Utils.WHITE_ROOK, whiteOrBlack);
					console.log(whiteProcessRook);	
					break;
				
				case Utils.BLACK:
					const blackProcessRook = pieceToProcess(b, blackRooks[1], 0, Utils.BLACK_ROOK, whiteOrBlack);
					console.log(blackProcessRook);
					break;
			}
			
			break;
	 		
	 	case "bishop":
	 		freeSpot(b);
	 		
	 		switch (whiteOrBlack) {
				case Utils.WHITE:
					const whiteProcessBishop = pieceToProcess(b, whiteBishops[0], 1, Utils.WHITE_BISHOP, whiteOrBlack);
					console.log(whiteProcessBishop);
					break;
				
				case Utils.BLACK:
					const blackProcessBishop = pieceToProcess(b, blackBishops[1], 0, Utils.BLACK_BISHOP, whiteOrBlack);
					console.log(blackProcessBishop);
					break;
			}
			
	 		break;
		
	 	case "queen":
	 		freeSpot(b);
	 		
	 		switch (whiteOrBlack) {
				case Utils.WHITE:
					const whiteProcessQueen = pieceToProcess(b, whiteQueen[0], 0, Utils.WHITE_QUEEN, whiteOrBlack);
					console.log(whiteProcessQueen);
					break;
				
				case Utils.BLACK:
					const blackProcessQueen = pieceToProcess(b, blackQueen[0], 0, Utils.BLACK_QUEEN, whiteOrBlack);
					console.log(blackProcessQueen);
					break;
			}
			
	 		break;
			
	 	case "pawn":
			var n = 3;
			var processMe = [];
			
			const down = [0, 1, 2, 3, 4, 5, 6, 7];	
			const up = [8, 9, 10, 11, 12, 13, 14, 15];

			switch (whiteOrBlack) {
				case Utils.WHITE:
					processMe = whitePawns[n];
					const whiteProcessPawn = pieceToProcess(b, processMe, n, Utils.WHITE_PAWN, whiteOrBlack);
					console.log(whiteProcessPawn);
					
					for (var i = 0; i < down.length; i++) {
						if (n === down[i]) {
							var movePawn = movePiece(b, processMe, whiteProcessPawn[0]);
							// TODO: moving your pawn to its legal move, then re-computing your legal moves (this actually works)! i just need a better way to compute it					
						} 
					}
								
					for (var i = 0; i < up.length; i++) {
						if (n === up[i]) {
							var movePawn = movePiece(b, processMe, whiteProcessPawn[1]);
							// TODO: moving your pawn to its legal move, then re-computing your legal moves (this actually works)! i just need a better way to compute it
						} 
					}
					
					break;
						
				case Utils.BLACK:
					processMe = blackPawns[n];
					const blackProcessPawn = pieceToProcess(b, processMe, n, Utils.BLACK_PAWN, whiteOrBlack);
					console.log(blackProcessPawn);
						
					for (var i = 0; i < down.length; i++) {
						if (n === down[i]) {
							var movePawn = movePiece(b, processMe, blackProcessPawn[1]);
							// TODO: moving your pawn to its legal move, then re-computing your legal moves (this actually works)! i just need a better way to compute it					
						} 
					}
								
					for (var i = 0; i < up.length; i++) {
						if (n === up[i]) {
							var movePawn = movePiece(b, processMe, blackProcessPawn[0]);
							// TODO: moving your pawn to its legal move, then re-computing your legal moves (this actually works)! i just need a better way to compute it
						} 
					}
					
					break;
			}
			
			break;
			
	 	case "king":
	 		// TODO: don't move the king into check (aka, danger!) - not an issue for now - due to no team colors, just yet...
	 		
	 		switch (whiteOrBlack) {
				case Utils.WHITE:
					const whiteProcessKing = pieceToProcess(b, whiteKing[0], 0, Utils.WHITE_KING, whiteOrBlack);
					console.log(whiteProcessKing);
					break;
				
				case Utils.BLACK:
					const blackProcessKing = pieceToProcess(b, blackKing[0], 0, Utils.BLACK_KING, whiteOrBlack);
					console.log(blackProcessKing);
					break;
			}
			
	 		break;
	 }
	  
	return (  
		<div>			
			<h3 className="rand">We are processing a <u> {whiteOrBlack} {rand}</u></h3>
				
			<div className="board">
				{b.map((row, i) => (
					<div key={i}>
						{row.map((cell, j) => (
							<div key={j} className={`square ${(i + j) % 2 === 0 ? 'is_white' : 'is_black'} ${(j === 0 || j === 1) ? 'white' : 'black'} ${(j === 2 || j === 3 || j === 4 || j === 5) ? 'middle' : ''}`}>
								<span>{cell}</span>
							</div>
						))}
					</div>
				))}       
			</div>
		</div>
	)
}

export default App;
