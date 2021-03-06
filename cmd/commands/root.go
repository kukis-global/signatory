package commands

import (
	"context"

	"github.com/ecadlabs/signatory/pkg/config"
	"github.com/ecadlabs/signatory/pkg/metrics"
	"github.com/ecadlabs/signatory/pkg/signatory"
	log "github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
)

// Context represents root command context shared with its children
type Context struct {
	Context context.Context

	config    *config.Config
	signatory *signatory.Signatory
}

// NewRootCommand returns new root command
func NewRootCommand(c *Context, name string) *cobra.Command {
	var (
		level      string
		configFile string
	)

	rootCmd := cobra.Command{
		Use:   name,
		Short: "A Tezos Remote Signer for signing block-chain operations with private keys",
		PersistentPreRunE: func(cmd *cobra.Command, args []string) (err error) {
			// cmd always points to the top level command!!!
			var conf config.Config
			if err := conf.Read(configFile); err != nil {
				return err
			}

			validate := config.Validator()
			if err := validate.Struct(&conf); err != nil {
				return err
			}

			lv, err := log.ParseLevel(level)
			if err != nil {
				return err
			}

			log.SetLevel(lv)

			sigConf := signatory.Config{
				Policy:      conf.Tezos,
				Vaults:      conf.Vaults,
				Interceptor: metrics.Interceptor,
				Watermark:   signatory.NewInMemoryWatermark(),
			}

			sig, err := signatory.NewSignatory(c.Context, &sigConf)
			if err != nil {
				return err
			}

			if err = sig.Unlock(c.Context); err != nil {
				return err
			}

			c.config = &conf
			c.signatory = sig
			return nil
		},
	}

	f := rootCmd.PersistentFlags()

	f.StringVarP(&configFile, "config", "c", "/etc/signatory.yaml", "Config file path")
	f.StringVar(&level, "log", "info", "Log level: [error, warn, info, debug, trace]")

	return &rootCmd
}

/*
// Execute executes root command
func Execute(ctx context.Context) error {
	return newRootCommand(ctx).Execute()
}
*/
