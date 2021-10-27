package main

import (
	"fmt"
	"log"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "{ \"greeting\": \"Hello World!\" }")
}

func main() {
	log.Print("api server ready")
	http.HandleFunc("/api/v1/greeting", handler)
	http.ListenAndServe(":8080", nil)
}
