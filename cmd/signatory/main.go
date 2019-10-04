package main

import (
	"context"
	"os"
	"os/signal"
	"syscall"

	"github.com/ecadlabs/signatory/cmd/signatory/cmd"

	log "github.com/sirupsen/logrus"
)

func main() {
	signalChan := make(chan os.Signal, 1)
	signal.Notify(signalChan, syscall.SIGINT, syscall.SIGTERM)

	ctx, cancel := context.WithCancel(context.Background())

	go func() {
		s := <-signalChan
		log.Printf("Captured %v\n", s)
		cancel()
	}()

	if err := cmd.Execute(ctx); err != nil {
		os.Exit(1)
	}
}
