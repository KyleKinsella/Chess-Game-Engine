import Utils from "./utils.jsx";
import { initGameBoard, findPieceInBoard, movePiece } from "./board/Board.jsx";
import knight from "./knight/knight.jsx";

function App() {
	const b = initGameBoard(Utils.board, Utils.pieces, Utils.ROWS, Utils.COLS);
	
	const pawns = findPieceInBoard(b, Utils.PAWN);
	const rooks = findPieceInBoard(b, Utils.ROOK);
	const knights = findPieceInBoard(b, Utils.KNIGHT);
	const bishops = findPieceInBoard(b, Utils.BISHOP);
	const queens = findPieceInBoard(b, Utils.QUEEN);
	const kings = findPieceInBoard(b, Utils.KING);
	const freeSpace = findPieceInBoard(b, Utils.freeSpace);	
		
	//~ var move = movePiece(b, pawns[0], freeSpace[0]); // legal 
	//~ move = movePiece(b, knights[0], freeSpace[0]); // legal or is it... (this is legal if and ONLY if the space is not occupied)
	//~ move = movePiece(b, knights[0], freeSpace[2]); // legal
	//~ move = movePiece(b, knights[0], freeSpace[6]); // totally illegal! 
	
	//~ resetBoard(b);
	
	// shows all of the spots of the knights on the chess board
	console.log("init knights: ", knights);
	 
	// this returns all of the locations that the knight at knights[1] can move to 
	//~ const process = pieceToProcess(b, knights[1], Utils.KNIGHT);
	//~ console.log(process);
	
	// move the knight
	var moveP = movePiece(b, knights[0], freeSpace[0]);
	
	// find the new location(s) for the moved knight piece
	var newLocs = findPieceInBoard(moveP, Utils.KNIGHT);
	console.log("new locs: ", newLocs);
	console.log(newLocs[1]); //this is ->   2 | 0
	
	// now we have all of the moves that the knight at knights[1] can do
	const k = new knight(0, 0, "white", Utils.KNIGHT, false);
	const loc = newLocs[1];
	
	var legalKnightMoves = k.getLegalMoves(loc);
	console.log("here are the legal moves that can be done from this location: ", loc, ":\n", legalKnightMoves);
	
	const isValid = k.makeMove(legalKnightMoves[3], legalKnightMoves, newLocs);
	console.log(isValid);
	
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
