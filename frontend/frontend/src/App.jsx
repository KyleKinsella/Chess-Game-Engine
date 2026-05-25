import Utils from "./utils.jsx";
import { initGameBoard, findPieceInBoard, pieceToProcess} from "./board/Board.jsx";

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
	// process each piece, each variable, returns their legal moves (un-comment whatever piece you wish to see the legal moves for, this will update the board with ##### this is the legal moves for that piece)
	// note: the king and pawn piece has not implemented just yet...
	// note: if you un-comment the knight, rook, bishop, and the queen, you will see lots of #####... so go into whatever pieces class and comment out the ##### line of code, this is just a visual cue for us to see 
	// 		 on the board, instead of looking through an array of 20 legal moves... (be careful lol! :) )
	//
	//~ const processKnight = pieceToProcess(b, knights[0], Utils.KNIGHT);
	//~ const processRook = pieceToProcess(b, rooks[0], Utils.ROOK);
	//~ const processBishop = pieceToProcess(b, bishops[0], Utils.BISHOP);
	const processQueen = pieceToProcess(b, queens[0], Utils.QUEEN);
	
	// TODO: 
	//~ const processKing = pieceToProcess(b, kings[0], Utils.KING);
	//~ const processPawn = pieceToProcess(b, pawns[0], Utils.PAWN);
	
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
