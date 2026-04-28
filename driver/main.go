package main

import (
    "net/http"
    "chess-project/backend/board"
    "fmt"
)

func main() {
    http.HandleFunc("/", board.CreateBoard)
    fmt.Println("My App is running on: http://localhost:8080")
    http.ListenAndServe(":8080", nil)
}
