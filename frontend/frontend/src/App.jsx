import Utils from "./utils.jsx";
import { initGameBoard, findPieceInBoard, pieceToProcess} from "./board/Board.jsx";

function App() {
	const b = initGameBoard(Utils.board, Utils.pieces, Utils.ROWS, Utils.COLS);
	
	const pawns = findPieceInBoard(b, Utils.PAWN);
	const rooks = findPieceInBoard(b, Utils.ROOK);
	const knights = findPieceInBoard(b, Utils.KNIGHT);
	const bishops = findPieceInBoard(b, Utils.BISHOP);
	const queens = findPieceInBoard(b, Utils.QUEEN);
	const kings = findPieceInBoard(b, Utils.KING);
	const freeSpace = findPieceInBoard(b, Utils.freeSpace);	
	
	// these work!!! //
	const processKnight = pieceToProcess(b, knights[0], Utils.KNIGHT);
	const processRook = pieceToProcess(b, rooks[0], Utils.ROOK);
	
	
	//~ console.log("init bishops: ", bishops);
	const processBishop = pieceToProcess(b, bishops[1], Utils.BISHOP);
	
	//~ console.log(pawns);
	const processPawn = pieceToProcess(b, pawns[3], Utils.PAWN);
	
	//~ const removePawn = b[1][1];
	
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
