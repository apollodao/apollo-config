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
        label: "apollo vault new",
        id: 5945,
        checksum: "",
      },
      {
        label: "apollo vault old",
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
          "osmo1zktjv92f76epswjvyxzzt3yyskpw7k6jsyu0kmq4zzc5fphrjumqlahctp",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 5945,
      },
      {
        label: "Osmo-Atom 7d",
        description: "Osmo-Atom Autocompounding Vault 7d",
        address:
          "osmo167j3yttwzcm3785tzk4jse2qdkppcy2xxrn5u6srqv7s93wnq6yqw8zhg5",
        admin: "5945",
        code_id: 5945,
      },
      {
        label: "Osmo-Atom 14d",
        description: "Osmo-Atom Autocompounding Vault 14d",
        address:
          "osmo1tp2m6g39h8mvhnu3plqjyen5s63023gj8w873l8wvly0cd77l6hsaa73wt",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 5945,
      },
      {
        label: "Juno-Osmo 1d",
        description: "Juno-Osmo Autocompounding Vault 1d",
        address:
          "osmo1r6h0pafu3wq0kf6yv09qhc8qvuku2d6fua0rpwwv46h7hd8u586scxspjf",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 5945,
      },
      {
        label: "Juno-Osmo 7d",
        description: "Juno-Osmo Autocompounding Vault 7d",
        address:
          "osmo1gr5epxn67q6202l3hy0mcnu7qc039v22pa6x2tsk23zwg235n9jsq6pmes",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 5945,
      },
      {
        label: "Juno-Osmo 14d",
        description: "Juno-Osmo Autocompounding Vault 14d",
        address:
          "osmo1d6knwkelyr9eklewnn9htkess4ttpxpf2cze9ec0xfw7e3fj0ggssqzfpp",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 5945,
      },
      {
        label: "Ion-Osmo 1d",
        description: "Ion-Osmo Autocompounding Vault 1d - 4787",
        address:
          "osmo1nv2d5tcn3xhfera55swsl20hyymz9wjtl39x2c8tumkj3jzqc7qqvd9max",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 4787,
      },
      {
        label: "Ion-Osmo 7d",
        description: "Ion-Osmo Autocompounding Vault 7d - 4787",
        address:
          "osmo1yzrsuck79kynz9yxpawkuppy5cnfv6cdjagtd8daa5dgefj4v6usdvlv0n",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 4787,
      },
      {
        label: "Ion-Osmo 14d",
        description: "Ion-Osmo Autocompounding Vault 14d - 4787",
        address:
          "osmo1fzednazwpkjspa39yqsgm8xqmmgls5fe2mesgjmjjmqgtxzhwn8s6v5mmf",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 4787,
      },
      {
        label: "Tgrade-Osmo 1d",
        description: "Tgrade-Osmo Autocompounding Vault 1d",
        address:
          "osmo1akgu9fd68rf6e6tvatryewxc23t27zvlpfsvgcu9emkgkqcpkz0qz5zlwc",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 5945,
      },
      {
        label: "Tgrade-Osmo 7d",
        description: "Tgrade-Osmo Autocompounding Vault 7d",
        address:
          "osmo1497tszvzlt5vgqzcy73ty5gc04ztmvqeaujeefmalq7wcufuf25sxayk3e",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 5945,
      },
      {
        label: "Tgrade-Osmo 14d",
        description: "Tgrade-Osmo Autocompounding Vault 14d",
        address:
          "osmo1np5lnwpr3rs4dktvg5qzz7ra8j8pp8yd942qx7qe2298dv3hyfysjlpxkh",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 5945,
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
          rpc: "https://osmosis-mainnet-rpc.allthatnode.com:26657",
          rest: "https://osmosis-mainnet-rpc.allthatnode.com:1317",
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
      {
        label: "apollo vault",
        id: 17,
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
        label: "Apollo Safe CW3",
        address: "",
        admin: "",
        code_id: 1,
      },
      {
        label: "Apollo Zapper",
        address: "osmo12",
        admin:
          "osmo1wl59k23zngj34l7d42y9yltask7rjlnxgccawc7ltrknp6n52fps94qsjd",
        code_id: 4922,
      },
      {
        label: "Osmo-Atom 14d",
        description: "Osmo-Atom Autocompounding Vault 14d",
        address:
          "osmo1g3kmqpp8608szfp0pdag3r6z85npph7wmccat8lgl3mp407kv73qlj7qwp",
        admin:
          "osmo1wl59k23zngj34l7d42y9yltask7rjlnxgccawc7ltrknp6n52fps94qsjd",
        code_id: 17,
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
