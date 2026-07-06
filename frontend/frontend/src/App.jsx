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
	
	const [row, setI] = useState(0);
	const [col, setJ] = useState(0);
	
	const coords = [row, col];
	const rrr = JSON.parse("[" + coords + "]");
		
	switch (selectedPiece) {
		case Utils.WHITE_ROOK:
		case Utils.iCanMoveToHere:
		case Utils.iCanCaptureYou:	
			//~ freeSpot(b);
				
			const whiteRook = pieceToProcess(b, rrr, selectedPiece, Utils.WHITE_ROOK, white);
			console.log(whiteRook);
			break;
						
		case Utils.BLACK_ROOK:
			//~ freeSpot(b);
			
			const blackRook = pieceToProcess(b, rrr, selectedPiece, Utils.BLACK_ROOK, black);
			console.log(blackRook);
			break;
		
		case Utils.WHITE_KNIGHT:	
			//~ freeSpot(b);
			
			const whiteKnight = pieceToProcess(b, rrr, selectedPiece, Utils.WHITE_KNIGHT, white);
			console.log(whiteKnight);
			break;

		case Utils.BLACK_KNIGHT:
			//~ freeSpot(b);
			
			const blackKnight = pieceToProcess(b, rrr, selectedPiece, Utils.BLACK_KNIGHT, black);
			console.log(blackKnight);
			break;
		
		case Utils.WHITE_BISHOP:	
			//~ freeSpot(b);
			
			const whiteBishop = pieceToProcess(b, rrr, selectedPiece, Utils.WHITE_BISHOP, white);
			console.log(whiteBishop);
			break;
		
		case Utils.BLACK_BISHOP:
			//~ freeSpot(b);
			
			const blackBishop = pieceToProcess(b, rrr, selectedPiece, Utils.BLACK_BISHOP, black);
			console.log(blackBishop);
			break;
			
		case Utils.WHITE_QUEEN:
			//~ freeSpot(b);
			
			const wQueen = pieceToProcess(b, rrr, selectedPiece, Utils.WHITE_QUEEN, white);
			console.log(wQueen);
			break;
			
		case Utils.BLACK_QUEEN:
			//~ freeSpot(b);
				
			const bQueen = pieceToProcess(b, rrr, selectedPiece, Utils.BLACK_QUEEN, black);
			console.log(bQueen);
			break;
			
		case Utils.WHITE_PAWN:
			const whitePawn = pieceToProcess(b, rrr, selectedPiece, Utils.WHITE_PAWN, white);
			console.log(whitePawn);	
			break;
		
		case Utils.BLACK_PAWN:			
			const blackPawn = pieceToProcess(b, rrr, selectedPiece, Utils.BLACK_PAWN, black);
			console.log(blackPawn);
			break;
			
		// TODO: don't move the king into check (aka, danger!)...
		case Utils.WHITE_KING:
			const wKing = pieceToProcess(b, rrr, selectedPiece, Utils.WHITE_KING, white);
			console.log(wKing);
			break;
		
		case Utils.BLACK_KING:
			const bKing = pieceToProcess(b, rrr, selectedPiece, Utils.BLACK_KING, black);
			console.log(bKing);
			break;
	}
		
	return (  
		<div>
			<h3 className="rand">We are processing a {selectedPiece}</h3> 
			<br/>
						
			<div className="board" id="myDiv">
				{b.map((row, i) => (
					<div key={i}>
						{row.map((cell, j) => (
							<div key={j} onClick={() => { 
									setI(i);
									setJ(j);
								}} 
								className={`square ${(i + j) % 2 === 0 ? 'is_white' : 'is_black'} ${(j === 0 || j === 1) ? 'white' : 'black'} ${(j === 2 || j === 3 || j === 4 || j === 5) ? 'middle' : ''}`}>
								<span>{cell}</span>
							</div>
						))}
					</div>
				))}       
			</div>	
			
			{row} {col}
		</div>
	)
}

export default App;
