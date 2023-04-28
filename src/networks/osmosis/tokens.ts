import { AssetInfo, Token } from "../../types";

export type supported_data_sources =
  | {
      name: "osmosis-api";
      params: {
        pool_id: number;
        underlying_tokens: AssetInfo[];
      };
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
    img_url: "https://stats.apollo.farm/tokens/ion.png",
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
    name: "USDC",
    img_url: "https://stats.apollo.farm/tokens/usdc.svg",
    asset: {
      native:
        "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
    },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "usd-coin" } }],
    decimals: 6,
  },
  {
    name: "stAtom",
    img_url: "https://stats.apollo.farm/tokens/statom.svg",
    asset: {
      native:
        "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901",
    },
    base: "USD",
    sources: [
      { name: "coingecko-api", params: { coingecko_id: "stride-staked-atom" } },
    ],
    decimals: 6,
  },
  {
    name: "wETH",
    img_url: "https://stats.apollo.farm/tokens/weth.svg",
    asset: {
      native:
        "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
    },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "axlweth" } }],
    decimals: 18,
  },
  {
    name: "wBTC",
    img_url: "https://stats.apollo.farm/tokens/wbtc.png",
    asset: {
      native:
        "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
    },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "axlwbtc" } }],
    decimals: 8,
  },
  {
    name: "Dai",
    img_url: "https://stats.apollo.farm/tokens/dai.svg",
    asset: {
      native:
        "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
    },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "dai" } }],
    decimals: 18,
  },
  {
    name: "stOsmo",
    img_url: "https://stats.apollo.farm/tokens/stosmo.svg",
    asset: {
      native:
        "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC",
    },
    base: "USD",
    sources: [
      { name: "coingecko-api", params: { coingecko_id: "stride-staked-osmo" } },
    ],
    decimals: 6,
  },
  {
    name: "Juno",
    img_url: "https://stats.apollo.farm/tokens/juno.svg",
    asset: {
      native:
        "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
    },
    base: "USD",
    sources: [
      { name: "coingecko-api", params: { coingecko_id: "juno-network" } },
    ],
    decimals: 6,
  },
  {
    name: "Akash",
    img_url: "https://api.apollo.farm/tokens/akt.svg",
    asset: {
      native:
        "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
    },
    base: "USD",
    sources: [
      { name: "coingecko-api", params: { coingecko_id: "akash-network" } },
    ],
    decimals: 6,
  },
  {
    name: "Cronos",
    img_url: "https://api.apollo.farm/tokens/cro.svg",
    asset: {
      native:
        "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
    },
    base: "USD",
    sources: [
      { name: "coingecko-api", params: { coingecko_id: "crypto-com-chain" } },
    ],
    decimals: 8,
  },
  {
    name: "Axelar",
    img_url: "https://stats.apollo.farm/tokens/axl.svg",
    asset: {
      native:
        "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
    },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "axelar" } }],
    decimals: 6,
  },
  {
    name: "Secret",
    img_url: "https://api.apollo.farm/tokens/scrt.svg",
    asset: {
      native:
        "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
    },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "secret" } }],
    decimals: 6,
  },
  {
    name: "Inter Stable Token",
    img_url: "https://api.apollo.farm/tokens/ist.png",
    asset: {
      native:
        "ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5",
    },
    base: "USD",
    sources: [
      { name: "coingecko-api", params: { coingecko_id: "inter-stable-token" } },
    ],
    decimals: 6,
  },
  {
    name: "Evmos",
    img_url: "https://stats.apollo.farm/tokens/evmos.svg",
    asset: {
      native:
        "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
    },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "evmos" } }],
    decimals: 18,
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
];
