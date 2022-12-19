import { NetworkConfig } from "./types";

export const config: NetworkConfig = {
  "osmo-test-4": {
    name: "osmosistestnet",
    chain_id: "osmo-test-4",
    supported_wallets: [
      {
        name: "keplr",
        config: {
          rpc: "https://osmo-test-rpc.apollo.farm",
          rest: "https://osmo-test-lcd.apollo.farm",
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
        id: 4057,
        checksum: "",
      },
    ],
    contracts: [
      {
        label: "Apollo Safe CW3",
        address: "",
        admin: "",
        code_id: 237,
      },
      {
        label: "Osmo/Atom Auto Compound Vault",
        address:
          "osmo1lcnpd5000ru7qpd0tz8wnl00rlfvlxvqlw04md9cxsudapd0flvsqke5t5",
        admin: "osmo15pz333htntschjk0mu89m7rmetduemvdfkangs",
        code_id: 4057,
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
          rpc: "https://osmo-mainnet-rpc.apollo.farm",
          rest: "https://osmo-mainnet-lcd.apollo.farm",
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
          rpc: "https://secret-testnet-rpc.apollo.farm",
          rest: "https://secret-testnet-lcd.apollo.farm",
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
          rpc: "https://injective-testnet-rpc.apollo.farm",
          rest: "https://injective-testnet-lcd.apollo.farm",
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
          rpc: "https://injective-mainnet-rpc.apollo.farm",
          rest: "https://injective-mainnet-lcd.apollo.farm",
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
