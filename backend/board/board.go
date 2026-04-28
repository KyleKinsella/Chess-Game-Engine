package board

import (
    "net/http"
    "encoding/json"
)

const (
    BAR = "|"    
    ROOK = "rook" + BAR
    HORSE = "horse" + BAR
    BISHOP = "bishop" + BAR
    QUEEN = "queen" + BAR
    KING = "king" + BAR
    PAWN = "pawn" + BAR
    FREE_SPOT = "______" + BAR
)

var b = [][]string {
        {ROOK, HORSE, BISHOP, QUEEN, KING, BISHOP, HORSE, ROOK},
        {PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN},
        {FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT},
        {FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT},
        {FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT},
        {FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT, FREE_SPOT},
        {PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN, PAWN},
        {ROOK, HORSE, BISHOP, QUEEN, KING, BISHOP, HORSE, ROOK},
}

func CreateBoard(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Content-Type", "application/json")

    json.NewEncoder(w).Encode(b)    
}
