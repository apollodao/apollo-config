import { AssetInfo, Token } from "../../../types";

export type supported_data_sources =
  | {
      name: "osmosis-1";
      params: {
        contract_address: string;
        dex: "osmosis";
        base_token: AssetInfo;
      };
    }
  | {
      name: "osmosis-api";
      params: {
        pool_id: number;
        underlying_tokens: AssetInfo[];
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
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 1,
          underlying_tokens: [
            { native: "uosmo" },
            {
              native:
                "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            },
          ],
        },
      },
    ],
    decimals: 18,
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
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 2,
          underlying_tokens: [
            { native: "uosmo" },
            {
              native: "uion",
            },
          ],
        },
      },
    ],
    decimals: 18,
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
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 497,
          underlying_tokens: [
            { native: "uosmo" },
            {
              native:
                "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
            },
          ],
        },
      },
    ],
    decimals: 18,
  },
  {
    name: "TGD/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/769" },
    base: [
      { native: "uosmo" },
      {
        native:
          "ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C",
      },
    ],
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 769,
          underlying_tokens: [
            { native: "uosmo" },
            {
              native:
                "ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C",
            },
          ],
        },
      },
    ],
    decimals: 18,
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
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 678,
          underlying_tokens: [
            { native: "uosmo" },
            {
              native:
                "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
            },
          ],
        },
      },
    ],
    decimals: 18,
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
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 712,
          underlying_tokens: [
            { native: "uosmo" },
            {
              native:
                "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
            },
          ],
        },
      },
    ],
    decimals: 18,
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
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 674,
          underlying_tokens: [
            { native: "uosmo" },
            {
              native:
                "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
            },
          ],
        },
      },
    ],
    decimals: 18,
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
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 833,
          underlying_tokens: [
            { native: "uosmo" },
            {
              native:
                "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC",
            },
          ],
        },
      },
    ],
    decimals: 18,
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
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 704,
          underlying_tokens: [
            { native: "uosmo" },
            {
              native:
                "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
            },
          ],
        },
      },
    ],
    decimals: 18,
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
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 803,
          underlying_tokens: [
            {
              native:
                "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901",
            },
            {
              native:
                "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
            },
          ],
        },
      },
    ],
    decimals: 18,
  },
  {
    name: "AKT/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/3" },
    base: [
      {
        native: "uosmo",
      },
      {
        native:
          "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
      },
    ],
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 3,
          underlying_tokens: [
            {
              native: "uosmo",
            },
            {
              native:
                "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
            },
          ],
        },
      },
    ],
    decimals: 18,
  },
  {
    name: "ION/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/2" },
    base: [
      {
        native: "uosmo",
      },
      {
        native: "uion",
      },
    ],
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 2,
          underlying_tokens: [
            {
              native: "uosmo",
            },
            {
              native: "uion",
            },
          ],
        },
      },
    ],
    decimals: 18,
  },
  {
    name: "CRO/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/9" },
    base: [
      {
        native: "uosmo",
      },
      {
        native:
          "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
      },
    ],
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 9,
          underlying_tokens: [
            {
              native: "uosmo",
            },
            {
              native:
                "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
            },
          ],
        },
      },
    ],
    decimals: 18,
  },
  {
    name: "AXL/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/812" },
    base: [
      {
        native: "uosmo",
      },
      {
        native:
          "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
      },
    ],
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 812,
          underlying_tokens: [
            {
              native: "uosmo",
            },
            {
              native:
                "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
            },
          ],
        },
      },
    ],
    decimals: 18,
  },
  {
    name: "SCRT/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/584" },
    base: [
      {
        native: "uosmo",
      },
      {
        native:
          "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
      },
    ],
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 584,
          underlying_tokens: [
            {
              native: "uosmo",
            },
            {
              native:
                "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
            },
          ],
        },
      },
    ],
    decimals: 18,
  },
  {
    name: "IST/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/837" },
    base: [
      {
        native: "uosmo",
      },
      {
        native:
          "ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5",
      },
    ],
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 837,
          underlying_tokens: [
            {
              native: "uosmo",
            },
            {
              native:
                "ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5",
            },
          ],
        },
      },
    ],
    decimals: 18,
  },
  {
    name: "EVMOS/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/722" },
    base: [
      {
        native: "uosmo",
      },
      {
        native:
          "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
      },
    ],
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 722,
          underlying_tokens: [
            {
              native: "uosmo",
            },
            {
              native:
                "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
            },
          ],
        },
      },
    ],
    decimals: 18,
  },
  {
    name: "STRD/OSMO LP Token",
    img_url: "",
    asset: { native: "gamm/pool/806" },
    base: [
      {
        native: "uosmo",
      },
      {
        native:
          "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
      },
    ],
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 806,
          underlying_tokens: [
            {
              native: "uosmo",
            },
            {
              native:
                "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
            },
          ],
        },
      },
    ],
    decimals: 18,
  },
];
