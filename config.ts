import { NetworkConfig } from "types";

export const config: NetworkConfig = {
  "osmo-test-4": {
    name: "osmosistestnet",
    chain_id: "osmo-test-4",
    nodes: [
      {
        isValidator: true,
        walletAddress: "osmo1q2qqfgac2zfhwjrf5u8h60xxxh0873u0vfq7w6",
        valAddress: "osmovaloper1q2qqfgac2zfhwjrf5u8h60xxxh0873u0k7gaea",
        id: "fc086f94384ac5d4f360b9e18a3ae1eae2bec54b@44.192.246.104",
        services: [
          {
            type: "rpc",
            url: "https://osmo-test-rpc.apollo.farm",
          },
          {
            type: "rest",
            url: "https://osmo-test-lcd.apollo.farm",
          },
        ],
      },
    ],
    public_nodes: [
      {
        type: "rpc",
        url: "https://osmosistest-rpc.quickapi.com",
      },
      {
        type: "rest",
        url: "https://osmosistest-lcd.quickapi.com",
      },
    ],
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
        query_messages: [],
        execution_messages: [],
      },
      {
        label: "apollo vault",
        id: 4005,
        checksum: "",
        query_messages: [],
        execution_messages: [],
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
        code_id: 4005,
      },
    ],
  },
  "osmosis-1": {
    name: "osmosis",
    chain_id: "osmosis-1",
    nodes: [
      {
        isValidator: false,
        walletAddress: "",
        valAddress: "",
        id: "",
        services: [
          {
            type: "rpc",
            url: "https://osmo-mainnet-rpc.apollo.farm",
          },
          {
            type: "rest",
            url: "https://osmo-mainnet-lcd.apollo.farm",
          },
        ],
      },
    ],
    public_nodes: [
      {
        type: "rpc",
        url: "https://rpc.cosmos.directory/osmosis",
      },
      {
        type: "rest",
        url: "https://rest.cosmos.directory/osmosis",
      },
    ],
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
        query_messages: [],
        execution_messages: [],
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
    nodes: [
      {
        isValidator: true,
        walletAddress: "secret1a86ltvg9wa39aw9zgs45ze9se42yq35a4405e0",
        valAddress: "secretvaloper1a86ltvg9wa39aw9zgs45ze9se42yq35ayjpf5x",
        id: "196c6c7083023efe93ddb068d2340dd5c2f2ddb3@51.81.154.102",
        services: [
          {
            type: "rpc",
            url: "https://secret-testnet-rpc.apollo.farm",
          },
          {
            type: "rest",
            url: "https://secret-testnet-lcd.apollo.farm",
          },
        ],
      },
    ],
    public_nodes: [
      {
        type: "rpc",
        url: "https://rpc.testnet.secretsaturn.net",
      },
      {
        type: "rest",
        url: "https://lcd.testnet.secretsaturn.net",
      },
    ],
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
    nodes: [
      {
        isValidator: false,
        walletAddress: "",
        valAddress: "",
        id: "",
        services: [
          {
            type: "rpc",
            url: "https://injective-testnet-rpc.apollo.farm",
          },
          {
            type: "rest",
            url: "https://injective-testnet-lcd.apollo.farm",
          },
        ],
      },
    ],
    public_nodes: [
      {
        type: "rpc",
        url: "https://k8s.testnet.tm.injective.network",
      },
      {
        type: "rest",
        url: "https://k8s.testnet.lcd.injective.network",
      },
    ],
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
        query_messages: [],
        execution_messages: [],
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
    nodes: [
      {
        isValidator: false,
        walletAddress: "",
        valAddress: "",
        id: "",
        services: [
          {
            type: "rpc",
            url: "https://injective-mainnet-rpc.apollo.farm",
          },
          {
            type: "rest",
            url: "https://injective-mainnet-lcd.apollo.farm",
          },
        ],
      },
    ],
    public_nodes: [
      {
        type: "rpc",
        url: "https://k8s.mainnet.tm.injective.network",
      },
      {
        type: "rest",
        url: "https://k8s.mainnet.lcd.injective.network",
      },
    ],
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
        query_messages: [],
        execution_messages: [],
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
