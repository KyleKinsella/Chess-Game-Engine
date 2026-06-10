import Utils from "./utils.jsx";
import { initGameBoard, findPieceInBoard, pieceToProcess, movePiece } from "./board/Board.jsx";
import "./main.css";

// for testing purposes ONLY:
function freeSpot(board) {
	board[4][1] = Utils.NULL;
	board[1][1] = Utils.NULL;
	return board;
}

function App() {
	//
	// create the chess game board
	// 
	const b = initGameBoard(Utils.board, Utils.pieces, Utils.ROWS, Utils.COLS);
	
	// 
	// find all of the pieces on the board, once the board is created
	//
	const knights = findPieceInBoard(b, Utils.KNIGHT);
	const rooks = findPieceInBoard(b, Utils.ROOK);
	const bishops = findPieceInBoard(b, Utils.BISHOP);
	const queens = findPieceInBoard(b, Utils.QUEEN);
	const pawns = findPieceInBoard(b, Utils.PAWN);
	const kings = findPieceInBoard(b, Utils.KING);
	
	// 
	// legal moves for each piece - this updates the board to contain "#####" this is the legal moves for that piece
	//
	const values = ["knight", "rook", "bishop", "queen", "pawn", "king"];
	var rand = values[Math.floor(Math.random() * values.length)];
	
	//~ rand = "queen";
	
	switch (rand) {
	 	case "knight":
	 		freeSpot(b);
			
	 		const processKnight = pieceToProcess(b, knights[0], 1, Utils.KNIGHT);
	 		console.log(processKnight);
	 		break;
			
	 	case "rook":
	 		freeSpot(b);
	 		
			const processRook = pieceToProcess(b, rooks[0], 1, Utils.ROOK);
			console.log(processRook);	
			break;
	 		
	 	case "bishop":
	 		freeSpot(b);
			
	 		const processBishop = pieceToProcess(b, bishops[0], 1, Utils.BISHOP);
	 		console.log(processBishop);
	 		break;
		
	 	case "queen":
	 		freeSpot(b);
			
	 		const processQueen = pieceToProcess(b, queens[0], 0, Utils.QUEEN);
	 		console.log(processQueen);
	 		break;
			
	 	case "pawn":
			const n = 3;
			const processMe = pawns[n];
			
			const processPawn = pieceToProcess(b, processMe, n, Utils.PAWN);
			console.log(processPawn);
			
			const down = [0, 1, 2, 3, 4, 5, 6, 7];				
			for (var i = 0; i < down.length; i++) {
				if (n === down[i]) {
					var movePawn = movePiece(b, processMe, processPawn[0]);
					// TODO: moving your pawn to its legal move, then re-computing your legal moves (this actually works)! i just need a better way to compute it
				} 
			}
				
			const up = [8, 9, 10, 11, 12, 13, 14, 15];
			for (var i = 0; i < up.length; i++) {
				if (n === up[i]) {
					var movePawn = movePiece(b, processMe, processPawn[1]);
					// TODO: moving your pawn to its legal move, then re-computing your legal moves (this actually works)! i just need a better way to compute it
				} 
			}
				
			break;
			
	 	case "king":
	 		// TODO: don't move the king into check (aka, danger!) - not an issue for now - due to no team colors, just yet...
	 		const processKing = pieceToProcess(b, kings[0], 0, Utils.KING);
	 		console.log(processKing);
	 		break;
	 }
	 		
	return (  
		<div>
			<div className="board">
				{b.map((row, i) => (
					<div key={i}>
						{row.map((cell, j) => (
							<div key={j} className={`square ${(i + j) % 2 === 0 ? 'is_white' : 'is_black'}`}>
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
