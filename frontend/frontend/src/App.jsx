import { useState, useEffect } from "react";
import "./main.css"

//~ const countDown = (max) => {
    //~ var data = [];
    //~ for (var i = max; i > 0; i--) {
        //~ data.push(i);
        //~ console.log(i);
    //~ }
//~ }      

//~ function pawns() {
    //~ for (var i = 0; i < 7; i++) {
        //~ fetch("http://192.168.200.89:8080/p")
            //~ .then(res => res.json())
            //~ .then(data => setPawn(data))
    //~ }

    //~ return pawns;
//~ }

const ROOK = "rook";
const KNIGHT = "knight";
const BISHOP = "bishop";
const QUEEN = "queen";
const KING = "king";
const BISHOP2 = "bishop";
const KNIGHT2 = "knight";
const ROOK2 = "rook";
const PAWN = "pawn";
//const freeSpace = "___";

var specialPieces = [ROOK, KNIGHT, BISHOP, QUEEN, KING, BISHOP2, KNIGHT2, ROOK2];
var pawns = [PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN];
//var free = [freeSpace, freeSpace, freeSpace, freeSpace, freeSpace, freeSpace, freeSpace, freeSpace];

//~ var pieces = [ROOK, KNIGHT, BISHOP, QUEEN, KING, BISHOP2, KNIGHT2, ROOK2, PAWN];


const ROWS = 8;
const COLS = 8;

var board = [
    [], [],
    [],
    [],
    [],
    [],
    [],
    [],
];

function initGameBoard(board, specialPieces, pawns, rows, cols) {
    //~ board[0][0] = ROOK;
    //~ board[0][1] = KNIGHT;
    //~ board[0][2] = BISHOP;
    //~ board[0][3] = QUEEN;
    //~ board[]
    
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            //board[]

            //console.log(i);


            if (i === 0 || i === 7) {  // || j === 0) {
                board[i][j] = specialPieces[j] + " ";
               // continue;
            }

            

            //else

            if (i === 1 || i === 6) {
                //board[i] = [];

                board[i][j] = pawns[j] + " ";

                //board[i][j] = pawns[j] + " ";


                //~ for (var pawn = 0; pawn < 7; pawn++) {
                                //~ board[i][j] = pawns[pawn] + " ";
                //~ }
            }

            if (i === 2 || i === 3 || i === 4 || i === 5) {
                board[i][j] = "..........." + " ";   //free[j] + "";
            }

                            //}

            //if (i === 1) {
                //board[i][j] = pawns[j] + " ";

                                        //'board[i][j] = pawns[j]       + " ";

                //~ for (var k = 0; k < pawns.length; k++) {
                    //~ if (pawns[k] === PAWN) {
                        //~ board[i][j] = pawns[j] + " ";
                    //~ }
                //~ }
            //}
    
            //else {
                //board[i][j] = PAWN;
            //}

            //~ if (i === 1 || j === 1) {
                //~ board[i][j] = "";
                                //~ return;
            //~ }

            //~ if (i === 1 || rows === 1 || rows === 2) {
                //~ board[i][j] = PAWN;
            //~ } 
        }
    }
    return board;
} 

{/*
function initGameBoard(rook1, knight1, bishop1, queen, king, bishop2, knight2, rook2) {
                    ```
                    <div class="chessboard">
                  <div class="white" id="piece">8 {ROOK}</div>
                  <div class="black"></div>

                
                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>
               

                  <div class="black">7 </div>
                  <div class="white" id="piece"></div>

                  <div class="black"></div>
                  <div class="white" id="piece"></div>

                  <div class="black"></div>
                  <div class="white" id="piece"></div>

                  <div class="black"></div>
                  <div class="white" id="piece"></div>


                  <div class="white" id="piece">6</div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="black">5</div>
                  <div class="white" id="piece"></div>
                  
                  <div class="black"></div>
                  <div class="white" id="piece"></div>

                  <div class="black"></div>
                  <div class="white" id="piece"></div>

                  <div class="black"></div>
                  <div class="white" id="piece"></div>


                  <div class="white" id="piece">4</div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="black">3</div>
                  <div class="white" id="piece"></div>
                  
                  <div class="black"></div>
                  <div class="white" id="piece"></div>

                  <div class="black"></div>
                  <div class="white" id="piece"></div>

                  <div class="black"></div>
                  <div class="white" id="piece"></div>

                  <div class="white" id="piece">2 </div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="black">1  <br/><br/><br/><br/><br/>a</div>
                  <div class="white" id="piece"> <br/><br/><br/><br/><br/>b</div>

                  <div class="black"> <br/><br/><br/><br/><br/>c</div>
                  <div class="white" id="piece"> <br/><br/><br/><br/><br/>d</div>

                  <div class="black"> <br/><br/><br/><br/><br/>e</div>
                  <div class="white" id="piece"> <br/><br/><br/><br/><br/>f</div>

                  <div class="black"> <br/><br/><br/><br/><br/>g</div>
                  <div class="white" id="piece"> <br/><br/><br/><br/><br/>h</div>
                    */}

                  {/* 62 more */}

                {/*
                </div>
                ```

}
*/}

function App() {
    //const [board, setBoard] = useState([]);

    {/*
    const [pawn, setPawn] = useState("");
    const [rook, setRook] = useState("");
    const [knight, setKnight] = useState("");
    const [bishop, setBishop] = useState("");
    const [queen, setQueen] = useState("");
    const [king, setKing] = useState("");
    const [freeSpot, setFreeSpot] = useState("");

    useEffect(() => {
        fetch("http://192.168.200.89:8080/r")
            .then(res => res.json())
            .then(rook => {
                setRook(rook);
            })
    }, []);

    useEffect(() => {
        fetch("http://192.168.200.89:8080/h")
            .then(res => res.json())
            .then(knight => {
                setKnight(knight);
            })
    }, []);

    useEffect(() => {
        fetch("http://192.168.200.89:8080/b")
            .then(res => res.json())
            .then(bishop => {
                setBishop(bishop);
            })
    }, []);

    useEffect(() => {
        fetch("http://192.168.200.89:8080/q")
            .then(res => res.json())
            .then(queen => {
                setQueen(queen);
            })
    }, []);

    useEffect(() => {
        fetch("http://192.168.200.89:8080/k")
            .then(res => res.json())
            .then(king => {
                setKing(king);
            })
    }, []);

    useEffect(() => {
        fetch("http://192.168.200.89:8080/p")
            .then(res => res.json())
            .then(pawn => {
                setPawn(pawn);
            })
    }, []);

    useEffect(() => {
        fetch("http://192.168.200.89:8080/free")
            .then(res => res.json())
            .then(freeSpot => {
                setFreeSpot(freeSpot);
            })
    }, []);
    */}

    {/*
    const sendDataToBackend = (e) => {
        e.preventDefault();
        
        const piece = e.target.piece.value;

        alert(piece);
    };
    */}

    const gameBoard = initGameBoard(board, specialPieces, pawns, ROWS, COLS);
    
    return (
        <div>
            {/*
            <div>
			*/}
                {/*
                <p id="piece">{rook}</p> <p id="piece">{knight}</p>  <p id="piece">{bishop}</p>  <p id="piece">{queen}</p>  <p id="piece">{king}</p>  <p id="piece">{bishop}</p> <p id="piece">{knight}</p> <p id="piece">{rook}</p>      
                */}

                {/*
                {initGameBoard(ROOK, KNIGHT, BISHOP, QUEEN, KING, BISHOP2, KNIGHT2, ROOK2)}
                */}



               
                 <div class="chessboard">
                  <div class="white" id="piece">8 {ROOK}</div>
                  <div class="black">{KNIGHT}</div>

                
                  <div class="white" id="piece">{BISHOP}</div>
                  <div class="black">{QUEEN}</div>

                  <div class="white" id="piece">{KING}</div>
                  <div class="black">{BISHOP2}</div>

                  <div class="white" id="piece">{KNIGHT2}</div>
                  <div class="black">{ROOK2}</div>
               

                  <div class="black">7 {PAWN}</div>
                  <div class="white" id="piece">{PAWN}</div>

                  <div class="black">{PAWN}</div>
                  <div class="white" id="piece">{PAWN}</div>

                  <div class="black">{PAWN}</div>
                  <div class="white" id="piece">{PAWN}</div>

                  <div class="black">{PAWN}</div>
                  <div class="white" id="piece">{PAWN}</div>


                  <div class="white" id="piece">6</div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="black">5</div>
                  <div class="white" id="piece"></div>
                  
                  <div class="black"></div>
                  <div class="white" id="piece"></div>

                  <div class="black"></div>
                  <div class="white" id="piece"></div>

                  <div class="black"></div>
                  <div class="white" id="piece"></div>


                  <div class="white" id="piece">4</div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="white" id="piece"></div>
                  <div class="black"></div>

                  <div class="black">3</div>
                  <div class="white" id="piece"></div>
                  
                  <div class="black"></div>
                  <div class="white" id="piece"></div>

                  <div class="black"></div>
                  <div class="white" id="piece"></div>

                  <div class="black"></div>
                  <div class="white" id="piece"></div>

                  <div class="white" id="piece">2 {PAWN}</div>
                  <div class="black">{PAWN}</div>

                  <div class="white" id="piece">{PAWN}</div>
                  <div class="black">{PAWN}</div>

                  <div class="white" id="piece">{PAWN}</div>
                  <div class="black">{PAWN}</div>

                  <div class="white" id="piece">{PAWN}</div>
				  <div class="black">{PAWN}</div>	
                </div>
                
              </div>
             )
		 }
             
export default App;
