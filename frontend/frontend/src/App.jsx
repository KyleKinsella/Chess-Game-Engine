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
	//~ const freeSpace = findPieceInBoard(b, Utils.freeSpace);	
	
	const processKnight = pieceToProcess(b, knights[0], Utils.KNIGHT);
	
	var processRook = pieceToProcess(b, rooks[0], Utils.ROOK);
	
	const processBishop = pieceToProcess(b, bishops[0], Utils.BISHOP);
	
	// TODO: this should be in the rook section in the "pieceToProcess" function...
	var findMe = findPieceInBoard(b, Utils.freeSpace);	
	processRook = pieceToProcess(b, findMe[0], Utils.ROOK);
	
	const processPawn = pieceToProcess(b, pawns[1], Utils.PAWN);
	
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
