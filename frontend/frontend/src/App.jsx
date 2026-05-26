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
	// process each piece, each variable, returns their legal moves (un-comment whatever piece you wish to see the legal moves for, this will update the board with ##### this is the legal moves for that piece)
	// note: the king and pawn piece has not implemented just yet...
	// note: if you un-comment the knight, rook, bishop, and the queen, you will see lots of #####... so go into whatever pieces class and comment out the ##### line of code, this is just a visual cue for us to see 
	// 		 on the board, instead of looking through an array of 20 legal moves... (be careful lol! :) )
	//
	
	//
	// turns out, the order of how we process each piece really matters... !
	// for example, if i wish to process moving a pawn and that it underneath all of the special pieces (knight, rook, bishop, queen & king - not coded yet) all of the other special pieces dont know that the pawn has moved...
	// therefore those pieces cannot move into that new free spot - even do it shows that it can be done on the frontend - but on the backend the special pieces dont know about the pawn and the new updated free spot...
	// so, what was the fix ? 
	// put the pawn at the very top before we process any other piece... this now means that the special pieces know that there is a free spot that they can move to assuming this is a legal move for said piece.
	// BUT, there is a slight problem (again, lol):
	// say we process a piece and that piece is the rook, with the below layout this will show all of the legal moves for the rook with ##### at the location [0, 1].
	// but then say we want to process a bishop piece next, the bishop will have all of its legal moves but 1... so to fix that is we move the bishop processing down, then this fixes the bishop but due to the swapping of 
	// processing the rook first and the bishop second, and now the bishop is first and the rook is second the rook works but part of him breaks!
	
	// eg 1:
	//~ const processPawn = pieceToProcess(b, pawns[1], Utils.PAWN);
	//  const processKnight = pieceToProcess(b, knights[0], Utils.KNIGHT);
	//~ const processBishop = pieceToProcess(b, bishops[0], Utils.BISHOP);
	//~ const processQueen = pieceToProcess(b, queens[0], Utils.QUEEN);
	//~ const processRook = pieceToProcess(b, rooks[0], Utils.ROOK);

	// this outputs all of the legal moves for the rook at location [0, 1].

	// eg 2:
	//~ const processPawn = pieceToProcess(b, pawns[1], Utils.PAWN);
	//~ const processKnight = pieceToProcess(b, knights[0], Utils.KNIGHT);
	//~ const processQueen = pieceToProcess(b, queens[0], Utils.QUEEN);
	//~ const processRook = pieceToProcess(b, rooks[0], Utils.ROOK);
	//~ const processBishop = pieceToProcess(b, bishops[0], Utils.BISHOP);
	
	// this outputs all of the legal moves for the bishop at location [3, 3].
	// but if you were to try and process your rook again... he would have most of his legal moves but he would not have two of his moves, these moves are to the rooks right from the location [0, 1].
	
	// so to mostly summarize, whatever piece is last to be processed gets all of there legal moves, otherwise they will be missing some of there legal moves but they will have most of there legal moves, but this 
	// is not good enough! we need to have all of the legal moves no matter where the piece is on the board!
	
	// this is out current bug, TODO:
	const processPawn = pieceToProcess(b, pawns[1], Utils.PAWN);

	const processKnight = pieceToProcess(b, knights[0], Utils.KNIGHT);
	const processQueen = pieceToProcess(b, queens[0], Utils.QUEEN);
	const processBishop = pieceToProcess(b, bishops[0], Utils.BISHOP);
	const processRook = pieceToProcess(b, rooks[0], Utils.ROOK);
	
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
