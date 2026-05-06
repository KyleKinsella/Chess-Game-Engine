import Utils from "./utils.jsx";
import { initGameBoard, movePiece, resetBoard } from "./board/Board.jsx";
import ChessPiece from "./ChessPiece/ChessPiece.jsx";

function App() {
	const rows = Utils.ROWS;
	const cols = Utils.COLS;
	
	const b = initGameBoard(Utils.board, Utils.pieces, rows, cols);

	// i know this is hard-coded... we need to change / update this... // 
	//~ var pieceToMove = Utils.PAWN;
	
	//~ var pawn1 = movePiece(b, pieceToMove, 1, 0, 2, 0);
	//~ var pawn2 = movePiece(b, pieceToMove, 1, 1, 2, 1);
	//~ var pawn3 = movePiece(b, pieceToMove, 1, 2, 2, 2);
	//~ var pawn4 = movePiece(b, pieceToMove, 1, 3, 2, 3);
	//~ var pawn5 = movePiece(b, pieceToMove, 1, 4, 2, 4);
	//~ var pawn6 = movePiece(b, pieceToMove, 1, 5, 2, 5);
	//~ var pawn7 = movePiece(b, pieceToMove, 1, 6, 2, 6);
	//~ var pawn8 = movePiece(b, pieceToMove, 1, 7, 2, 7);
	
	//~ var pawn9 = movePiece(b, pieceToMove, 6, 0, 5, 0);
	//~ var pawn10 = movePiece(b, pieceToMove, 6, 1, 5, 1);
	//~ var pawn11 = movePiece(b, pieceToMove, 6, 2, 5, 2);
	//~ var pawn12 = movePiece(b, pieceToMove, 6, 3, 5, 3);
	//~ var pawn13 = movePiece(b, pieceToMove, 6, 4, 5, 4);
	//~ var pawn14 = movePiece(b, pieceToMove, 6, 5, 5, 5);
	//~ var pawn15 = movePiece(b, pieceToMove, 6, 6, 5, 6);
	//~ var pawn16 = movePiece(b, pieceToMove, 6, 7, 5, 7);
	
	//~ var reset = resetBoard(b);
	
	const piece = new ChessPiece(0, 0, "white", "pawn", false);
	//~ alert(piece.getCaptured());
	
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
			
			<br/> <br/>
		
			{piece.rows} <br/>
			{piece.cols} <br />
			{piece.color} <br/>
			{piece.type} <br/>
			{JSON.stringify(piece.isCaptured)}
		</div>
	)
}

export default App;
