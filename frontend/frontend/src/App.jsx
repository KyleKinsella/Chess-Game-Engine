//import Board from "./board/Board.jsx";
import Utils from "./utils.jsx";
import { initGameBoard } from "./board/Board.jsx";
import { movePiece } from "./board/Board.jsx";

function App() {
	const b = initGameBoard(Utils.board, Utils.pieces, Utils.ROWS, Utils.COLS);
	var move = movePiece(b, 0, 1, 2, 2);
	
    return (  
		<div>
			{b.map((row, i) => (
				<div key={i}>
					{row.map((cell, j) => (
						<span key={j}>{cell}</span>
					))}
				</div>
			))}       
		
			{/*
			<Board />	
			*/}
		</div>
	)
}

export default App;
