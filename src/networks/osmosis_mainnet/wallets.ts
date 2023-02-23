import { Wallet } from "../../types";

export const supported_wallets: Wallet[] = [
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
];
