package idk

import (
    "encoding/json"
    "net/http"
)

func Init(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode("Hello World!")
}
