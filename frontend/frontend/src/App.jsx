//import { useState, useEffect } from "react";
//import "./main.css";

const ROWS = 8;
const COLS = 8;

const ROOK = "rook";
const KNIGHT = "knight";
const BISHOP = "bishop";
const QUEEN = "queen";
const KING = "king";
const BISHOP2 = "bishop";
const KNIGHT2 = "knight";
const ROOK2 = "rook";
const PAWN = "pawn";

const pieces = [ROOK, KNIGHT, BISHOP, QUEEN, KING, BISHOP2, KNIGHT2, ROOK2, PAWN];

var board = [[], [], [], [], [], [], [], []];

// TODO: have - "a,b,c,d,e,f,g,h" at the bottom of the board and at the left hand side of the board have - "8 7 6 5 4 3 2 1"
function initGameBoard(board, pieces, rows, cols) {
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (i === 0 || i === 7) {
                board[i][j] = pieces[j] + " ";
            }
                
            if (i === 1 || i === 6) {                
                for (var pawn = 0; pawn < pieces.length; pawn++) {
                     if (pieces[pawn] === PAWN) {
						 board[i][j] = pieces[pawn] + " ";
					 }
                }
            }

            if (i === 2 || i === 3 || i === 4 || i === 5) {
                board[i][j] = "..........." + " ";
            }
        }
    }   
    return board;
} 

// TODO: make a pawn move from one location to another 
function movePawn(board, pawnLocation, newPawnLocation, rows, cols) {
}

function App() {
    var gameBoard = initGameBoard(board, pieces, ROWS, COLS);
    var pawn = movePawn(gameBoard, "a7", "a6", ROWS, COLS);
        
    return (    
		<div>
			{gameBoard.map((row, i) => (
				<div key={i}>
					{row.map((cell, j) => (
						<span key={j}>{cell}</span>
					))}
				</div>
			))}           
		  </div>
	)
}
             
export default App;
