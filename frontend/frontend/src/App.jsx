import Utils from "./utils.jsx";
import { initGameBoard, findPieceInBoard, pieceToProcess, movePiece } from "./board/Board.jsx";
import "./main.css";

function freeSpot(board) {
	board[1][4] = Utils.freeSpace + " ";
	board[1][1] = Utils.freeSpace + " ";
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
	
	rand = "pawn";
	
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
			const n = 4;
			const processMe = pawns[n];
			
			const processPawn = pieceToProcess(b, processMe, n, Utils.PAWN);
			console.log(processPawn);
						
			const down = [0, 1, 2, 3, 4, 5, 6, 7];
			for (var i = 0; i < down.length; i++) {
				if (n === down[i]) {
					var movePawn = movePiece(b, processMe, processPawn[0]);
					//~ var movePawn = movePiece(b, processMe, free[4]);
					
					//~ var movePawn = movePiece(b, processMe, processPawn[0]);
					
					//~ const newPawnLocations = findPieceInBoard(board, Utils.PAWN);
					//~ movePawn = movePiece(board, oldPieceLocation, updatedFreeSpaces[3]);
					//~ legalPawnMoves = p.getLegalMoves(movePawn, newPawnLocations[7]);
				}
			}
			
			const up = [8, 9, 10, 11, 12, 13, 14, 15];
			for (var i = 0; i < up.length; i++) {
				if (n === up[i]) {
					//~ var movePawn = movePiece(b, processMe, processPawn[1]);
					//~ var movePawn = movePiece(board, oldPieceLocation, updatedFreeSpaces[29]);
					
					
					//~ const newPawnLocations = findPieceInBoard(board, Utils.PAWN);
					//~ movePawn = movePiece(board, oldPieceLocation, legalPawnMoves[0]);
					//~ legalPawnMoves = p.getLegalMoves(board, newPawnLocations[8]);
				}
			}
			break;
			
		case "king":
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
							<span key={j}>{cell}</span>
						))}
					</div>
				))}       
			</div>
		</div>
	)
}

export default App;
