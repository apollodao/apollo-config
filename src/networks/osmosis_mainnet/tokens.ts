import { Token } from "../../types";

export type supported_data_sources =
  | { name: "osmosis-1" | "osmo-test-4"; params: { contract_address: string } }
  | {
      name: "osmosis-api";
      params: { pool_id: number };
    }
  | { name: "coingecko-api"; params: { coingecko_id: string } };

export const tokens: (Omit<Token, "sources"> & {
  sources: supported_data_sources[];
})[] = [
  {
    name: "Osmo",
    img_url: "https://stats.apollo.farm/tokens/osmo.svg",
    asset: { native: "uosmo" },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "osmosis" } }],
    decimals: 6,
  },
  {
    name: "Ion",
    img_url: "https://stats.apollo.farm/tokens/ion.svg",
    asset: { native: "uion" },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "ion" } }],
    decimals: 6,
  },
  {
    name: "Atom",
    img_url: "https://stats.apollo.farm/tokens/atom.svg",
    asset: {
      native:
        "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
    },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "cosmos" } }],
    decimals: 6,
  },
  {
    name: "Tgrade",
    img_url: "https://stats.apollo.farm/tokens/tgrade.svg",
    asset: {
      native:
        "ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C",
    },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "tgrade" } }],
    decimals: 6,
  },
  {
    name: "OSMO/ATOM LP Token",
    img_url: "",
    asset: { native: "gamm/pool/1" },
    base: [
      { native: "uosmo" },
      {
        native:
          "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      },
    ],
    sources: [{ name: "osmosis-api", params: { pool_id: 1 } }],
    decimals: 6,
  },
  {
    name: "ION/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/2" },
    base: [
      { native: "uosmo" },
      {
        native: "uion",
      },
    ],
    sources: [{ name: "osmosis-api", params: { pool_id: 2 } }],
    decimals: 6,
  },
  {
    name: "JUNO/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/497" },
    base: [
      { native: "uosmo" },
      {
        native:
          "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
      },
    ],
    sources: [{ name: "osmosis-api", params: { pool_id: 497 } }],
    decimals: 6,
  },
  {
    name: "TGD/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/769" },
    base: [
      { native: "uosmo" },
      {
        native:
          "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
      },
    ],
    sources: [{ name: "osmosis-api", params: { pool_id: 769 } }],
    decimals: 6,
  },
  {
    name: "USDC/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/678" },
    base: [
      { native: "uosmo" },
      {
        native:
          "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
      },
    ],
    sources: [{ name: "osmosis-api", params: { pool_id: 678 } }],
    decimals: 6,
  },
  {
    name: "wBTC/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/712" },
    base: [
      { native: "uosmo" },
      {
        native:
          "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
      },
    ],
    sources: [{ name: "osmosis-api", params: { pool_id: 712 } }],
    decimals: 6,
  },
  {
    name: "DAI/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/674" },
    base: [
      { native: "uosmo" },
      {
        native:
          "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
      },
    ],
    sources: [{ name: "osmosis-api", params: { pool_id: 674 } }],
    decimals: 6,
  },
  {
    name: "stOSMO/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/833" },
    base: [
      { native: "uosmo" },
      {
        native:
          "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC",
      },
    ],
    sources: [{ name: "osmosis-api", params: { pool_id: 833 } }],
    decimals: 6,
  },
  {
    name: "wETH/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/704" },
    base: [
      { native: "uosmo" },
      {
        native:
          "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
      },
    ],
    sources: [{ name: "osmosis-api", params: { pool_id: 704 } }],
    decimals: 6,
  },
  {
    name: "stATOM/ATOM LP Token",
    img_url: "",
    asset: { native: "gamm/pool/803" },
    base: [
      {
        native:
          "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901",
      },
      {
        native:
          "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      },
    ],
    sources: [{ name: "osmosis-api", params: { pool_id: 803 } }],
    decimals: 6,
  },
  {
    name: "OSMO/ATOM Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1g3kmqpp8608szfp0pdag3r6z85npph7wmccat8lgl3mp407kv73qlj7qwp/VaultToken/1/14d/ATOM/OSMO",
    },
    base: { native: "gamm/pool/1" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1g3kmqpp8608szfp0pdag3r6z85npph7wmccat8lgl3mp407kv73qlj7qwp",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "USDC/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1jfmwayj8jqp9tfy4v4eks5c2jpnqdumn8x8xvfllng0wfes770qqp7jl4j/VaultToken/678/14d/USDC/OSMO",
    },
    base: {
      native: "gamm/pool/678",
    },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1jfmwayj8jqp9tfy4v4eks5c2jpnqdumn8x8xvfllng0wfes770qqp7jl4j",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "wBTC/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo185gqewrlde8vrqw7j8lpad67v8jfrx9u7770k9q87tqqecctp5tq50wt2c/VaultToken/712/14d/WBTC/OSMO",
    },
    base: { native: "gamm/pool/712" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo185gqewrlde8vrqw7j8lpad67v8jfrx9u7770k9q87tqqecctp5tq50wt2c",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "DAI/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1lhs6kyuxytu4suua0qf88z5057wzpxs77tyrlgztw2uctcy75hcqf2ajrt/VaultToken/674/14d/DAI/OSMO",
    },
    base: { native: "gamm/pool/674" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1lhs6kyuxytu4suua0qf88z5057wzpxs77tyrlgztw2uctcy75hcqf2ajrt",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "stOSMO/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1p4zqs5y2w5srzd2vesznzu5ql8wfq9tpz3e7mf2j3y07nxrtkdes5r5g0t/VaultToken/833/14d/STOSMO/OSMO",
    },
    base: { native: "gamm/pool/833" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1p4zqs5y2w5srzd2vesznzu5ql8wfq9tpz3e7mf2j3y07nxrtkdes5r5g0t",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "wETH/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1r235f4tdkwrsnj3mdm9hf647l754y6g6xsmz0nas5r4vr5tda3qsgtftef/VaultToken/704/14d/WETH/OSMO",
    },
    base: { native: "gamm/pool/704" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1r235f4tdkwrsnj3mdm9hf647l754y6g6xsmz0nas5r4vr5tda3qsgtftef",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "stATOM/ATOM Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1a6tcf60pyz8qq2n532dzcs7s7sj8klcmra04tvaqympzcvxqg9esn7xz7l/VaultToken/803/14d/STATOM/ATOM",
    },
    base: { native: "gamm/pool/803" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1a6tcf60pyz8qq2n532dzcs7s7sj8klcmra04tvaqympzcvxqg9esn7xz7l",
        },
      },
    ],
    decimals: 24,
  },
];
