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
  {
    name: "AKT/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo122ryl7pez7yjprtvjckltu2uvjxrq3kqt4nvclax2la7maj6757qg054ga/VaultToken/3/14d/AKT/OSMO",
    },
    base: { native: "gamm/pool/3" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo122ryl7pez7yjprtvjckltu2uvjxrq3kqt4nvclax2la7maj6757qg054ga",
          base_token: { native: "gamm/pool/3" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "ION/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1869zena97sctemj78sgjmu737p2g94905hsf3hhkrfgummrfz4tsxj2k6r/VaultToken/2/14d/ION/OSMO",
    },
    base: { native: "gamm/pool/2" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1869zena97sctemj78sgjmu737p2g94905hsf3hhkrfgummrfz4tsxj2k6r",
          base_token: { native: "gamm/pool/2" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "JUNO/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1ceku0zks6y43r9l35n7wnv5pf82s6l4k5jhlrhkurakeemey9n4snz3x6z/VaultToken/497/14d/JUNO/OSMO",
    },
    base: { native: "gamm/pool/497" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1ceku0zks6y43r9l35n7wnv5pf82s6l4k5jhlrhkurakeemey9n4snz3x6z",
          base_token: { native: "gamm/pool/497" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "CRO/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1gmd2vc4crmv7urlfn3j5avhplfncjf5mg649dkgsu5a0zvd6cgrsn9dq4l/VaultToken/9/14d/CRO/OSMO",
    },
    base: { native: "gamm/pool/9" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1gmd2vc4crmv7urlfn3j5avhplfncjf5mg649dkgsu5a0zvd6cgrsn9dq4l",
          base_token: { native: "gamm/pool/9" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "AXL/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1m9e4cks405tvzlppkw64znr35vkvujvptrdqtgu5q6luk4ccw9qqeuenwd/VaultToken/812/14d/AXL/OSMO",
    },
    base: { native: "gamm/pool/812" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1m9e4cks405tvzlppkw64znr35vkvujvptrdqtgu5q6luk4ccw9qqeuenwd",
          base_token: { native: "gamm/pool/812" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "SCRT/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1m9hn9sjk3tudx6fmjlefk45eml2exsa2gaa5vpyey82ypms78dnqc235an/VaultToken/584/14d/SCRT/OSMO",
    },
    base: { native: "gamm/pool/584" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1m9hn9sjk3tudx6fmjlefk45eml2exsa2gaa5vpyey82ypms78dnqc235an",
          base_token: { native: "gamm/pool/584" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "IST/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1qajgwrcce9srkq370pa9ew96dyk4hajyyk6rfpuexrktm8862xnst443kp/VaultToken/837/14d/IST/OSMO",
    },
    base: { native: "gamm/pool/837" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1qajgwrcce9srkq370pa9ew96dyk4hajyyk6rfpuexrktm8862xnst443kp",
          base_token: { native: "gamm/pool/837" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "EVMOS/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1rkv6vcmty4rpypuxp2a6a0y5ze4ztm3y6d6xwy5a7cye85f7reqsm85c5s/VaultToken/722/14d/EVMOS/OSMO",
    },
    base: { native: "gamm/pool/722" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1rkv6vcmty4rpypuxp2a6a0y5ze4ztm3y6d6xwy5a7cye85f7reqsm85c5s",
          base_token: { native: "gamm/pool/722" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "STRD/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1e3qjfcg9adrauz6jg030ptfy35r6zzplsgaavnn6xrh6686udhfqq7muwy/VaultToken/806/14d/STRD/OSMO",
    },
    base: { native: "gamm/pool/806" },
    sources: [
      {
        name: "osmosis-1",
        params: {
          contract_address:
            "osmo1e3qjfcg9adrauz6jg030ptfy35r6zzplsgaavnn6xrh6686udhfqq7muwy",
          base_token: { native: "gamm/pool/806" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
];
