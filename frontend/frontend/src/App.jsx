import Utils from "./utils.jsx";
import { initGameBoard, findPieceInBoard, movePiece } from "./board/Board.jsx";

function App() {
	const b = initGameBoard(Utils.board, Utils.pieces, Utils.ROWS, Utils.COLS);
	
	const pawns = findPieceInBoard(b, Utils.PAWN);
	const rooks = findPieceInBoard(b, Utils.ROOK);
	const knights = findPieceInBoard(b, Utils.KNIGHT);
	const bishops = findPieceInBoard(b, Utils.BISHOP);
	const queens = findPieceInBoard(b, Utils.QUEEN);
	const kings = findPieceInBoard(b, Utils.KING);
	const freeSpace = findPieceInBoard(b, Utils.freeSpace);	
		
	var move = movePiece(b, pawns[0], freeSpace[0]); // legal 
	//~ move = movePiece(b, knights[0], freeSpace[0]); // legal or is it... (this is legal if and ONLY if the space is not occupied)
	move = movePiece(b, knights[0], freeSpace[2]); // legal
	//~ move = movePiece(b, knights[0], freeSpace[6]); // totally illegal! 
	
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
