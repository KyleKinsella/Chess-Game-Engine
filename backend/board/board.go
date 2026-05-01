package board

import (
    "net/http"
    "encoding/json"
)

const (
    //~ FREE_SPOT = 0
    //~ _ int = iota
    //~ ROOK
    //~ HORSE
    //~ BISHOP
    //~ QUEEN
    //~ KING
    //~ PAWN
    
    //BAR = "|"    
    ROOK = "rook" //+ BAR
    HORSE = "horse" //+ BAR
    BISHOP = "bishop" //+ BAR
    QUEEN = "queen" //+ BAR
    KING = "king" //+ BAR
    PAWN = "pawn" //+ BAR
    FREE_SPOT = "______" //+ BAR
    //SIZE = 64
)

//~ type Board struct {
    //~ board [][]string
//~ }

//~ func New() *Board {
    //~ return &Board{
        //~ board: make([][]string, SIZE)
    //~ }
//~ }  

//~ func createGrid(rows, cols int) {
    //~ for i := 0; i < rows; i++ {
        //~ for j := 0; j < cols; j++ {
            //~ if board[i][j] == 
        //~ }
    //~ }
//~ }

//~ var b = [][]string {
        //~ {ROOK, HORSE, BISHOP, QUEEN, KING, BISHOP, HORSE, ROOK},
        //~ {PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN},
        //~ {FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT},
        //~ {FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT},
        //~ {FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT},
        //~ {FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT},
        //~ {PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN},
        //~ {ROOK, HORSE, BISHOP, QUEEN, KING, BISHOP, HORSE, ROOK},
//~ }

func CreateRook(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Content-Type", "application/json")

    json.NewEncoder(w).Encode(ROOK)    
}

func CreateKnight(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Content-Type", "application/json")

    json.NewEncoder(w).Encode(HORSE)    
}

func CreateBishop(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Content-Type", "application/json")

    json.NewEncoder(w).Encode(BISHOP)    
}

func CreateQueen(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Content-Type", "application/json")

    json.NewEncoder(w).Encode(QUEEN)    
}

func CreateKing(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Content-Type", "application/json")

    json.NewEncoder(w).Encode(KING)    
}

func CreatePawn(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Content-Type", "application/json")

    json.NewEncoder(w).Encode(PAWN)    
}

func CreateFreeSpot(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Content-Type", "application/json")

    json.NewEncoder(w).Encode(FREE_SPOT)    
}

//~ func CreateBoard(w http.ResponseWriter, r *http.Request) {
    //~ w.Header().Set("Access-Control-Allow-Origin", "*")
    //~ w.Header().Set("Content-Type", "application/json")

    //~ json.NewEncoder(w).Encode(b)    
//~ }
