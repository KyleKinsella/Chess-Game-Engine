import Utils from "./utils.jsx";
import { initGameBoard, findPieceInBoard, pieceToProcess } from "./board/Board.jsx";

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
	const kings = findPieceInBoard(b, Utils.KING);	
	const pawns = findPieceInBoard(b, Utils.PAWN);
	
	// 
	// legal moves for each piece - this updates the board to contain "#####" this is the legal moves for that piece
	//
	const values = ["k", "r", "b", "q"]
	const rand = values[Math.floor(Math.random() * values.length)];

	const processPawn = pieceToProcess(b, pawns[3], Utils.PAWN);
	switch (rand) {
		case "k":
			const processKnight = pieceToProcess(b, knights[0], Utils.KNIGHT);
			console.log(processKnight);
			break;
			
		case "r":
			const processRook = pieceToProcess(b, rooks[0], Utils.ROOK);
			console.log(processRook);
			break;

		case "b":
			const processBishop = pieceToProcess(b, bishops[0], Utils.BISHOP);
			console.log(processBishop);
			break;
		
		case "q":
			const processQueen = pieceToProcess(b, queens[0], Utils.QUEEN);
			console.log(processQueen);
			break;
	}
	
	// TODO: 
	//~ const processKing = pieceToProcess(b, kings[0], Utils.KING);
	
    return (  
		<div>
			<div>
				{b.map((row, i) => (
					<div key={i}>
						{row.map((cell, j) => (
							<span key={j}>{cell}</span>
						))}
					</div>
				))}       
			</div>
		</div>
	)
}

export default App;
