import Utils from "./utils.jsx";
import { initGameBoard, findPieceInBoard, pieceToProcess} from "./board/Board.jsx";

function App() {
	const b = initGameBoard(Utils.board, Utils.pieces, Utils.ROWS, Utils.COLS);

	const knights = findPieceInBoard(b, Utils.KNIGHT);
	const rooks = findPieceInBoard(b, Utils.ROOK);
	const bishops = findPieceInBoard(b, Utils.BISHOP);
	const queens = findPieceInBoard(b, Utils.QUEEN);
	const kings = findPieceInBoard(b, Utils.KING);	
	const pawns = findPieceInBoard(b, Utils.PAWN);
	//~ const freeSpace = findPieceInBoard(b, Utils.freeSpace);	
	
	const processKnight = pieceToProcess(b, knights[0], Utils.KNIGHT);
	var processRook = pieceToProcess(b, rooks[0], Utils.ROOK);
	const processBishop = pieceToProcess(b, bishops[0], Utils.BISHOP);
	
	// TODO: this should be in the rook section in the "pieceToProcess" function...
	var findMe = findPieceInBoard(b, Utils.freeSpace);	
	processRook = pieceToProcess(b, findMe[0], Utils.ROOK);
	
	const processQueen = pieceToProcess(b, queens[0], Utils.QUEEN);
	
	// TODO:
	const processKing = pieceToProcess(b, kings[0], Utils.KING);
	const processPawn = pieceToProcess(b, pawns[0], Utils.PAWN);
	
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
