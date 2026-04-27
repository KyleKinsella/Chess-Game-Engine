package main

import (
    "net/http"
    "chess-project/idk"
    "fmt"
)

func main() {
    http.HandleFunc("/", idk.Init)

    fmt.Println("My App is running on: http://localhost:8080")
    http.ListenAndServe(":8080", nil)
}
