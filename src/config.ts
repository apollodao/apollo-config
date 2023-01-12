import { NetworkConfig } from "./types";

export const config: NetworkConfig = {
  "osmo-test-4": {
    name: "osmosistestnet",
    chain_id: "osmo-test-4",
    supported_wallets: [
      {
        name: "keplr",
        config: {
          rpc: "https://rpc-test.osmosis.zone",
          rest: "https://lcd-test.osmosis.zone",
          chainId: "osmo-test-4",
          chainName: "osmosistestnet",
          stakeCurrency: {
            coinDenom: "OSMO",
            coinMinimalDenom: "uosmo",
            coinDecimals: 6,
            coinGeckoId: "osmosis",
          },
          bip44: {
            coinType: 118,
          },
          bech32Config: {
            bech32PrefixAccAddr: "osmo",
            bech32PrefixAccPub: "osmopub",
            bech32PrefixValAddr: "osmovaloper",
            bech32PrefixValPub: "osmovaloperpub",
            bech32PrefixConsAddr: "osmovalcons",
            bech32PrefixConsPub: "osmovalconspub",
          },
          currencies: [
            {
              coinDenom: "OSMO",
              coinMinimalDenom: "uosmo",
              coinDecimals: 6,
              coinGeckoId: "osmosis",
            },
          ],
          feeCurrencies: [
            {
              coinDenom: "OSMO",
              coinMinimalDenom: "uosmo",
              coinDecimals: 6,
              coinGeckoId: "osmosis",
              gasPriceStep: {
                low: 0.01,
                average: 0.025,
                high: 0.04,
              },
            },
          ],
        },
      },
      { name: "walletConnect" },
    ],
    supported_apps: [
      {
        name: "safe",
        supportedFeatures: ["cw3-fixed"],
      },
    ],
    code_ids: [
      {
        label: "apollo cw3",
        id: 237,
        checksum: "",
      },
      {
        label: "apollo vault",
        id: 4787,
        checksum: "",
      },
      {
        label: "apollo zapper",
        id: 4922,
        checksum: "",
      },
    ],
    contracts: [
      {
        label: "Osmo-Atom 1d",
        description: "Osmo-Atom Autocompounding Vault 1d",
        address:
          "osmo1v40lnedgvake8p7f49gvqu0q3vc9sx3qpc0jqtyfdyw25d4vg8us38an37",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 4787,
      },
      {
        label: "Osmo-Atom 7d",
        description: "Osmo-Atom Autocompounding Vault 7d",
        address:
          "osmo108q2krqr0y9g0rtesenvsw68sap2xefelwwjs0wedyvdl0cmrntqvllfjk",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 4787,
      },
      {
        label: "Osmo-Atom 14d",
        description: "Osmo-Atom Autocompounding Vault 14d",
        address:
          "osmo1eht92w5dr0vx8dzl6dn9770yq0ycln50zfhzvz8uc6928mp8vvgqwcram9",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 4787,
      },
      {
        label: "Juno-Osmo 1d",
        description: "Juno-Osmo Autocompounding Vault 1d",
        address:
          "osmo1g5hryv0gp9dzlchkp3yxk8fmcf5asjun6cxkvyffetqzkwmvy75qfmeq3f",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 4787,
      },
      {
        label: "Juno-Osmo 7d",
        description: "Juno-Osmo Autocompounding Vault 7d",
        address:
          "osmo1jtuvr47taunfdhwrkns0cufwa3qlsz66qwwa9vvn4cc5eltzrtxs4zkaus",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 4787,
      },
      {
        label: "Juno-Osmo 14d",
        description: "Juno-Osmo Autocompounding Vault 14d",
        address:
          "osmo1rclt7lsfp0c89ydf9umuhwlg28maw6z87jak3ly7u2lefnyzdz2s8gsepe",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 4787,
      },
      {
        label: "Ion-Osmo 1d",
        description: "Ion-Osmo Autocompounding Vault 1d",
        address:
          "osmo1nv2d5tcn3xhfera55swsl20hyymz9wjtl39x2c8tumkj3jzqc7qqvd9max",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 4787,
      },
      {
        label: "Ion-Osmo 7d",
        description: "Ion-Osmo Autocompounding Vault 7d",
        address:
          "osmo1yzrsuck79kynz9yxpawkuppy5cnfv6cdjagtd8daa5dgefj4v6usdvlv0n",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 4787,
      },
      {
        label: "Ion-Osmo 14d",
        description: "Ion-Osmo Autocompounding Vault 14d",
        address:
          "osmo1fzednazwpkjspa39yqsgm8xqmmgls5fe2mesgjmjjmqgtxzhwn8s6v5mmf",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 4787,
      },
      {
        label: "Apollo Zapper",
        address:
          "osmo1lx2tqad63s7xhchwm60gpk5wssl4jgll0xpp2x8hp9e6dx9c9ztqcmwjzv",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 4922,
      },
    ],
  },
  "osmosis-1": {
    name: "osmosis",
    chain_id: "osmosis-1",
    supported_wallets: [
      {
        name: "keplr",
        config: {
          rpc: "https://rpc.cosmos.directory/osmosis",
          rest: "https://rest.cosmos.directory/osmosis",
          chainId: "osmosis-1",
          chainName: "osmosis",
          stakeCurrency: {
            coinDenom: "OSMO",
            coinMinimalDenom: "uosmo",
            coinDecimals: 6,
            coinGeckoId: "osmosis",
          },
          bip44: {
            coinType: 118,
          },
          bech32Config: {
            bech32PrefixAccAddr: "osmo",
            bech32PrefixAccPub: "osmopub",
            bech32PrefixValAddr: "osmovaloper",
            bech32PrefixValPub: "osmovaloperpub",
            bech32PrefixConsAddr: "osmovalcons",
            bech32PrefixConsPub: "osmovalconspub",
          },
          currencies: [
            {
              coinDenom: "OSMO",
              coinMinimalDenom: "uosmo",
              coinDecimals: 6,
              coinGeckoId: "osmosis",
            },
          ],
          feeCurrencies: [
            {
              coinDenom: "OSMO",
              coinMinimalDenom: "uosmo",
              coinDecimals: 6,
              coinGeckoId: "osmosis",
              gasPriceStep: {
                low: 0.01,
                average: 0.025,
                high: 0.04,
              },
            },
          ],
        },
      },
      { name: "walletConnect" },
    ],
    supported_apps: [
      {
        name: "safe",
        supportedFeatures: ["cw3-fixed"],
      },
    ],
    code_ids: [
      {
        label: "apollo cw3",
        id: 1,
        checksum: "",
      },
    ],
    contracts: [
      {
        label: "Apollo Safe CW3",
        address: "",
        admin: "",
        code_id: 1,
      },
    ],
  },
  "pulsar-2": {
    name: "secrettestnet",
    chain_id: "pulsar-2",
    supported_wallets: [
      {
        name: "keplr",
        config: {
          rpc: "https://grpc.testnet.secretsaturn.net",
          rest: "https://lcd.testnet.secretsaturn.net",
          chainId: "pulsar-2",
          chainName: "secrettestnet",
          stakeCurrency: {
            coinDenom: "SCRT",
            coinMinimalDenom: "uscrt",
            coinDecimals: 6,
            coinGeckoId: "secret",
          },
          bip44: {
            coinType: 118,
          },
          bech32Config: {
            bech32PrefixAccAddr: "secret",
            bech32PrefixAccPub: "secretpub",
            bech32PrefixValAddr: "secretvaloper",
            bech32PrefixValPub: "secretvaloperpub",
            bech32PrefixConsAddr: "secretvalcons",
            bech32PrefixConsPub: "secretvalconspub",
          },
          currencies: [
            {
              coinDenom: "SCRT",
              coinMinimalDenom: "uscrt",
              coinDecimals: 6,
              coinGeckoId: "secret",
            },
          ],
          feeCurrencies: [
            {
              coinDenom: "SCRT",
              coinMinimalDenom: "uscrt",
              coinDecimals: 6,
              coinGeckoId: "secret",
              gasPriceStep: {
                low: 0.01,
                average: 0.025,
                high: 0.04,
              },
            },
          ],
        },
      },
      { name: "walletConnect" },
    ],
    supported_apps: [],
    code_ids: [],
    contracts: [],
  },
  "injective-888": {
    name: "injectivetestnet",
    chain_id: "injective-888",
    supported_wallets: [
      {
        name: "keplr",
        config: {
          rpc: "https://k8s.testnet.chain.grpc-web.injective.network",
          rest: "https://k8s.testnet.lcd.injective.network",
          chainId: "injective-888",
          chainName: "injective",
          stakeCurrency: {
            coinDenom: "INJ",
            coinMinimalDenom: "inj",
            coinDecimals: 18,
            coinGeckoId: "injective-protocol",
          },
          bip44: {
            coinType: 60,
          },
          bech32Config: {
            bech32PrefixAccAddr: "inj",
            bech32PrefixAccPub: "injpub",
            bech32PrefixValAddr: "injvaloper",
            bech32PrefixValPub: "injvaloperpub",
            bech32PrefixConsAddr: "injvalcons",
            bech32PrefixConsPub: "injvalconspub",
          },
          currencies: [
            {
              coinDenom: "INJ",
              coinMinimalDenom: "inj",
              coinDecimals: 18,
              coinGeckoId: "injective-protocol",
            },
          ],
          feeCurrencies: [
            {
              coinDenom: "INJ",
              coinMinimalDenom: "inj",
              coinDecimals: 18,
              coinGeckoId: "injective-protocol",
              gasPriceStep: {
                low: 0.01,
                average: 0.025,
                high: 0.04,
              },
            },
          ],
        },
      },
      { name: "walletConnect" },
    ],
    supported_apps: [
      {
        name: "safe",
        supportedFeatures: ["cw3-fixed"],
      },
    ],
    code_ids: [
      {
        label: "apollo cw3",
        id: 1,
        checksum: "",
      },
    ],
    contracts: [
      {
        label: "Apollo Safe CW3",
        address: "",
        admin: "",
        code_id: 1,
      },
    ],
  },
  "injective-1": {
    name: "injective",
    chain_id: "injective-1",
    supported_wallets: [
      {
        name: "keplr",
        config: {
          rpc: "https://grpc.injective.network",
          rest: "https://lcd.injective.network",
          chainId: "injective-1",
          chainName: "injective",
          stakeCurrency: {
            coinDenom: "INJ",
            coinMinimalDenom: "inj",
            coinDecimals: 18,
            coinGeckoId: "injective-protocol",
          },
          bip44: {
            coinType: 60,
          },
          bech32Config: {
            bech32PrefixAccAddr: "inj",
            bech32PrefixAccPub: "injpub",
            bech32PrefixValAddr: "injvaloper",
            bech32PrefixValPub: "injvaloperpub",
            bech32PrefixConsAddr: "injvalcons",
            bech32PrefixConsPub: "injvalconspub",
          },
          currencies: [
            {
              coinDenom: "INJ",
              coinMinimalDenom: "inj",
              coinDecimals: 18,
              coinGeckoId: "injective-protocol",
            },
          ],
          feeCurrencies: [
            {
              coinDenom: "INJ",
              coinMinimalDenom: "inj",
              coinDecimals: 18,
              coinGeckoId: "injective-protocol",
              gasPriceStep: {
                low: 0.01,
                average: 0.025,
                high: 0.04,
              },
            },
          ],
        },
      },
      { name: "walletConnect" },
    ],
    supported_apps: [
      {
        name: "safe",
        supportedFeatures: ["cw3-fixed"],
      },
    ],
    code_ids: [
      {
        label: "apollo cw3",
        id: 1,
        checksum: "",
      },
    ],
    contracts: [
      {
        label: "Apollo Safe CW3",
        address: "",
        admin: "",
        code_id: 1,
      },
    ],
  },
};
