import { AssetInfo, Token } from "../../../types";

export type supported_data_sources = {
  name: "osmosis-1";
  params: {
    contract_address: string;
    dex: "osmosis";
    base_token: AssetInfo;
  };
};

export const tokens: (Omit<Token, "sources"> & {
  sources: supported_data_sources[];
})[] = [
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
          base_token: { native: "gamm/pool/1" },
          dex: "osmosis",
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
          base_token: { native: "gamm/pool/678" },
          dex: "osmosis",
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
          base_token: { native: "gamm/pool/712" },
          dex: "osmosis",
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
          base_token: { native: "gamm/pool/674" },
          dex: "osmosis",
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
        "factory/osmo1p4zqs5y2w5srzd2vesznzu5ql8wfq9tpz3e7mf2j3y07nxrtkdes5r5g0t/VaultToken/833/14d/stOSMO/OSMO",
    },
    base: { native: "gamm/pool/833" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1p4zqs5y2w5srzd2vesznzu5ql8wfq9tpz3e7mf2j3y07nxrtkdes5r5g0t",
          base_token: { native: "gamm/pool/833" },
          dex: "osmosis",
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
          base_token: { native: "gamm/pool/704" },
          dex: "osmosis",
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
        "factory/osmo1a6tcf60pyz8qq2n532dzcs7s7sj8klcmra04tvaqympzcvxqg9esn7xz7l/VaultToken/803/14d/ATOM/stATOM",
    },
    base: { native: "gamm/pool/803" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1a6tcf60pyz8qq2n532dzcs7s7sj8klcmra04tvaqympzcvxqg9esn7xz7l",
          base_token: { native: "gamm/pool/803" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
];
