package board

import (
    "fmt"
    //"net/http"
)

const (
    ROWS = 9
    COLS = 9
)

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

func CreateBoard2(board [][]string) {
    //var board [][]int

    for _, n := range board {
        fmt.Println(n)
    }

    
    //~ for i := 0; i < ROWS - 1; i++ {
        //~ for j := 0; j < COLS - 1; j++ {
            //~ fmt.Println(board[i][j])
        //~ }
    //~ }
}
