package board

import (
    //"fmt"
    "net/http"
    "encoding/json"
)

//~ var (
    //~ BOARD = [...]string{}
//~ )

var (
    board [][]string
)

const (
    ROWS = 9
    COLS = 9
)

var b = [][]string {
        {"Color: White"},
        {"rook", "horse", "bishop", "queen", "king", "bishop", "horse", "rook"},
        {"pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"},
        {"...", "...", "...", "...", "...", "...", "...", "..."},
        {"...", "...", "...", "...", "...", "...", "...", "..."},
        {"...", "...", "...", "...", "...", "...", "...", "..."},
        {"...", "...", "...", "...", "...", "...", "...", "..."},
        {"pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"},
        {"rook", "horse", "bishop", "queen", "king", "bishop", "horse", "rook"},
        {"Color: Black"},
    }

//~ type Board struct {
    //~ board [][]int
    //~ rows int
    //~ cols int
//~ }

//~ func initBoard(b Board) *Board {
    //~ return &Board{
        //~ b.board: make([][]int, b.rows),
        
    //~ }
//~ }

//~ func CreateBoard(w http.ResponseWriter, r *http.Request) {
    //~ var board [][]int
    //~ for i := 0; i < ROWS; i++ {
        //~ for j := 0; j < COLS; j++ {
            //~ fmt.Println(board[i], ", ", board[j])
        //~ }
    //~ }
//~ }

// create an empty board
func initBoard() {
}

// update each part of the board with each piece 
func createBoard() {
}

// this will be the board for the start of the game (this is where the json will be encoded and put on an endpoint for my react to pull down!)
//~ func board() {
//~ }

func printBoard(w http.ResponseWriter) { //, board [][]string) {

    json.NewEncoder(w).Encode(b)

    //~ for _, n := range board {
        //~ fmt.Println(n)
    //~ }
} 

func CreateBoard2(w http.ResponseWriter, r *http.Request) {
    //var board [][]int

    //~ for _, n := range board {
        //~ fmt.Println(n)
    //~ }
    
    //bb := printBoard(w, b)

    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Content-Type", "application/json")


    if len(board) == 0 {
        json.NewEncoder(w).Encode(b)    
    }

    //~ json.NewEncoder(w).Encode()     //(printBoard(w, b))
    
    
    //~ for i := 0; i < ROWS - 1; i++ {
        //~ for j := 0; j < COLS - 1; j++ {
            //~ fmt.Println(board[i][j])
        //~ }
    //~ }
}
