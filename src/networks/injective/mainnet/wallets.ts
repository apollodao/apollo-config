import { Wallet } from "../../../types";

export const supported_wallets: Wallet[] = [
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
];
