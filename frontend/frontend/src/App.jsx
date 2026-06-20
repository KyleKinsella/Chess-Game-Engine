import Utils from "./utils.jsx";
import { initGameBoard, findPieceInBoard, pieceToProcess, movePiece } from "./board/Board.jsx";
import "./main.css";

import { useEffect, useState } from "react";

// for testing purposes ONLY:
function freeSpot(board) {
	board[4][1] = Utils.NULL;
	board[1][1] = Utils.NULL;
	
	board[2][6] = Utils.NULL
	board[5][6] = Utils.NULL;
	return board;
}

function App() {
	//
	// create the chess game board
	// 
	const b = initGameBoard(Utils.board, Utils.ROWS, Utils.COLS);
	
	// 
	// find all of the pieces on the board, once the board is created
	//
	// WHITE //
	const whiteKnights = findPieceInBoard(b, Utils.WHITE_KNIGHT);
	const whiteRooks = findPieceInBoard(b, Utils.WHITE_ROOK);
	const whiteBishops = findPieceInBoard(b, Utils.WHITE_BISHOP);
	const whiteQueen = findPieceInBoard(b, Utils.WHITE_QUEEN);
	const whitePawns = findPieceInBoard(b, Utils.WHITE_PAWN);
	const whiteKing = findPieceInBoard(b, Utils.WHITE_KING);
		
	// BLACK //
	const blackKnights = findPieceInBoard(b, Utils.BLACK_KNIGHT);
	const blackRooks = findPieceInBoard(b, Utils.BLACK_ROOK);
	const blackBishops = findPieceInBoard(b, Utils.BLACK_BISHOP);
	const blackQueen = findPieceInBoard(b, Utils.BLACK_QUEEN);
	const blackPawns = findPieceInBoard(b, Utils.BLACK_PAWN);
	const blackKing = findPieceInBoard(b, Utils.BLACK_KING);
	
	// 
	// legal moves for each piece - this updates the board to contain "#####" and "$" this is the legal moves for that piece
	//
	const [selectedPiece, setSelectedPiece] = useState("");
	
	useEffect(() => {
		const clickDiv = (text) => {			
			setSelectedPiece(text.srcElement.innerText);
		};
		
		const div = document.getElementById("myDiv");
		div.addEventListener("click", clickDiv, selectedPiece);
		
		return () => {
			div.removeEventListener("click", clickDiv, selectedPiece);
		};
	}, []);
	
	const white = Utils.WHITE;
	const black = Utils.BLACK;
	
	switch (selectedPiece) {
		case Utils.WHITE_ROOK:
			freeSpot(b);
			
			const whiteProcessRook = pieceToProcess(b, whiteRooks[0], 1, Utils.WHITE_ROOK, white);
			console.log(whiteProcessRook);	
			break;
		
		case Utils.BLACK_ROOK:
			freeSpot(b);
			
			const blackProcessRook = pieceToProcess(b, blackRooks[1], 0, Utils.BLACK_ROOK, black);
			console.log(blackProcessRook);
			break;
		
		case Utils.WHITE_KNIGHT:
			freeSpot(b);
			
			const whiteProcessKnight = pieceToProcess(b, whiteKnights[0], 1, Utils.WHITE_KNIGHT, white);
			console.log(whiteProcessKnight);
			break;

		case Utils.BLACK_KNIGHT:
			freeSpot(b);
			
			const blackProcessKnight = pieceToProcess(b, blackKnights[0], 0, Utils.BLACK_KNIGHT, black);
			console.log(blackProcessKnight);
			break;
		
		case Utils.WHITE_BISHOP:
			freeSpot(b);
			
			const whiteProcessBishop = pieceToProcess(b, whiteBishops[0], 1, Utils.WHITE_BISHOP, white);
			console.log(whiteProcessBishop);
			break;
		
		case Utils.BLACK_BISHOP:
			freeSpot(b);
			
			const blackProcessBishop = pieceToProcess(b, blackBishops[1], 0, Utils.BLACK_BISHOP, black);
			console.log(blackProcessBishop);
			break;
				
		case Utils.WHITE_QUEEN:
			freeSpot(b);
			
			const whiteProcessQueen = pieceToProcess(b, whiteQueen[0], 0, Utils.WHITE_QUEEN, white);
			console.log(whiteProcessQueen);
			break;
			
		case Utils.BLACK_QUEEN:
			freeSpot(b);
			
			const blackProcessQueen = pieceToProcess(b, blackQueen[0], 0, Utils.BLACK_QUEEN, black);
			console.log(blackProcessQueen);
			break;
			
		case Utils.WHITE_PAWN:
			const down1 = [0, 1, 2, 3, 4, 5, 6, 7];
			const whiteN = 3;
			const processMe1 = whitePawns[whiteN];
							
			const whiteProcessPawn = pieceToProcess(b, processMe1, whiteN, Utils.WHITE_PAWN, white);
			console.log(whiteProcessPawn);
			
			for (var i = 0; i < down1.length; i++) {
				if (whiteN === down1[i]) {
					var movePawn = movePiece(b, processMe1, whiteProcessPawn[0]);
					// TODO: moving your pawn to its legal move, then re-computing your legal moves (this actually works)! i just need a better way to compute it					
				} 
			}
			
			break;
		
		case Utils.BLACK_PAWN:
			const down = [0, 1, 2, 3, 4, 5, 6, 7];				
			const blackN = 3;
			const processMe2 = blackPawns[blackN];
			
			const blackProcessPawn = pieceToProcess(b, processMe2, blackN, Utils.BLACK_PAWN, black);
			console.log(blackProcessPawn);
				
			for (var i = 0; i < down.length; i++) {
				if (blackN === down[i]) {
					var movePawn = movePiece(b, processMe2, blackProcessPawn[1]);
					//~ // TODO: moving your pawn to its legal move, then re-computing your legal moves (this actually works)! i just need a better way to compute it					
				} 
			}
						
			break;
			
		// TODO: don't move the king into check (aka, danger!)...
		case Utils.WHITE_KING:
			const whiteProcessKing = pieceToProcess(b, whiteKing[0], 0, Utils.WHITE_KING, white);
			console.log(whiteProcessKing);
			break;
		
		case Utils.BLACK_KING:
			const blackProcessKing = pieceToProcess(b, blackKing[0], 0, Utils.BLACK_KING, black);
			console.log(blackProcessKing);
			break;
	}
	
	return (  
		<div>			
			<h3 className="rand">We are processing a {selectedPiece}</h3>
						
			<div className="board" id="myDiv">
				{b.map((row, i) => (
					<div key={i}>
						{row.map((cell, j) => (
							<div key={j} className={`square ${(i + j) % 2 === 0 ? 'is_white' : 'is_black'} ${(j === 0 || j === 1) ? 'white' : 'black'} ${(j === 2 || j === 3 || j === 4 || j === 5) ? 'middle' : ''}`}>
								<span>{cell}</span>
							</div>
						))}
					</div>
				))}       
			</div>
		</div>
	)
}

export default App;
