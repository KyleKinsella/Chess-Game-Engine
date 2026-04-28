package main

import (
    //"net/http"
    //"chess-project/backend/idk"
    "chess-project/backend/board"
    //"fmt"
)

const (
    BOARDSIZE = 8
)

func main() {
    b := [][]string {
        {"Color: White"},
        {"rook", "horse", "bishop", "queen", "king", "bishop", "horse", "rook"},
        {"pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"},
        {"...", "...", "...", "...", "...", "...", "...", "..."},
        {"...", "...", "...", "...", "...", "...", "...", "..."},
        {"...", "...", "...", "...", "...", "...", "...", "..."},
        {"...", "...", "...", "...", "...", "...", "...", "..."},
        {"rook", "horse", "bishop", "queen", "king", "bishop", "horse", "rook"},
        {"pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"},
        {"Color: Black"},
    }

    rows := make([][]string, BOARDSIZE)

    //~ for cols := range rows {
        //~ cols[rows] = make([]int, 8)
    //~ }

    for i := 0; i < BOARDSIZE; i++ {
        rows[i] = make([]string, BOARDSIZE)
    }

    board.CreateBoard2(b)
    board.CreateBoard2(rows)
    
    //~ http.HandleFunc("/", idk.Init)
    //~ fmt.Println("My App is running on: http://localhost:8080")
    //~ http.ListenAndServe(":8080", nil)

    //~ http.HandleFunc("/b", board.CreateBoard)
    //~ fmt.Println("My App is running on: http://localhost:8081")
    //~ http.ListenAndServe(":8081", nil)

    //~ http.HandleFunc("/", board.CreateBoard)
    //~ fmt.Println("My App is running on: http://localhost:8080")
    //~ http.ListenAndServe(":8080", nil)
}
