package main

import (
    "fmt"
    "net/http"
    "chess-project/backend/board"
)

func main() { 
    //~ http.HandleFunc("/", board.CreateBoard)

    http.HandleFunc("/r", board.CreateRook)
    http.HandleFunc("/h", board.CreateKnight)
    http.HandleFunc("/b", board.CreateBishop)
    http.HandleFunc("/q", board.CreateQueen)
    http.HandleFunc("/k", board.CreateKing)
    http.HandleFunc("/p", board.CreatePawn)
    http.HandleFunc("/free", board.CreateFreeSpot)

    fmt.Println("My App is running on: http://localhost:8080")
    http.ListenAndServe(":8080", nil)

    //~ http.HandleFunc("/pawn", board.CreatePawn)
    //~ fmt.Println("My App is running on: http://localhost:8081")
    //~ http.ListenAndServe(":8081", nil)
}
