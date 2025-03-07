import { CoingeckoToken } from "../../types";

export const tokens: CoingeckoToken[] = [
  {
    name: "Mars",
    symbol: "MARS",
    img_url: "https://raw.githubusercontent.com/cosmos/chain-registry/master/neutron/images/mars-token.svg",
    base: "USD",
    id: "mars-protocol",
    decimals: 6,
    assets: {
      "neutron-1": {
        native:
          "factory/neutron1ndu2wvkrxtane8se2tr48gv7nsm46y5gcqjhux/MARS",
      },
    },
  },
  {
    name: "Dymension",
    symbol: "DYM",
    img_url: "",
    base: "USD",
    id: "dymension",
    decimals: 18,
    assets: {
      "neutron-1": {
        native:
          "ibc/4A6A46D4263F2ED3DCE9CF866FE15E6903FB5E12D87EB8BDC1B6B1A1E2D397B4",
      },
    },
  },
  {
    name: "Neutron",
    symbol: "NTRN",
    img_url: "https://stats.apollo.farm/tokens/ntrn.webp",
    base: "USD",
    id: "neutron-3",
    decimals: 6,
    assets: { "neutron-1": { native: "untrn" }, "pion-1": { native: "untrn" } },
  },
  {
    name: "Astro",
    symbol: "ASTRO",
    img_url: "https://stats.apollo.farm/tokens/astro.png",
    base: "USD",
    id: "astroport-fi",
    decimals: 6,
    assets: {
      "neutron-1": {
        native:
          "factory/neutron1ffus553eet978k024lmssw0czsxwr97mggyv85lpcsdkft8v9ufsz3sa07/astro",
      },
      "pion-1": {
        native:
          "ibc/EFB00E728F98F0C4BBE8CA362123ACAB466EDA2826DC6837E49F4C1902F21BBA",
      },
    },
  },
  {
    name: "Axelar",
    symbol: "AXL",
    img_url: "https://stats.apollo.farm/tokens/axl.svg",
    base: "USD",
    id: "axelar",
    decimals: 6,
    assets: {
      "neutron-1": {
        native:
          "ibc/C0E66D1C81D8AAF0E6896E05190FDFBC222367148F86AC3EA679C28327A763CD",
      },
      "pion-1": {
        native:
          "ibc/85CE72EE820A66F0ABD5EE3907A34E243E4BE2D6CFAEB4C08DF85BD6C0784FA2",
      },
      "osmosis-1": {
        native:
          "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
      },
      "osmo-test-4": {
        native:
          "ibc/903A61A498756EA560B85A85132D3AEE21B5DEDD41213725D22ABF276EA6945E",
      },
    },
  },
  {
    name: "Axelar Ethereum",
    symbol: "axlWETH",
    img_url: "https://stats.apollo.farm/tokens/weth.svg",
    base: "USD",
    id: "ethereum",
    decimals: 18,
    assets: {
      "neutron-1": {
        native:
          "ibc/A585C2D15DCD3B010849B453A2CFCB5E213208A5AB665691792684C26274304D",
      },
      "pion-1": {
        native:
          "ibc/CC8B40E3F3536D003C6ED7C65421067215453AECE1517A6F0935470C634A036B",
      },
    },
  },
  {
    name: "Wrapped Staked Ethereum",
    symbol: "wstETH",
    img_url: "https://stats.apollo.farm/tokens/weth.svg",
    base: "USD",
    id: "wrapped-steth",
    decimals: 18,
    assets: {
      "neutron-1": {
        native:
          "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
        cw20: "neutron149tpx0nequ0cpctw06nk29hwfps0343wvwfh6tkhju3ra7hxvpeq8pvstf",
      },
      "pion-1": {
        native:
          "factory/neutron1xdtwh5jr4zjx8g3zh29jud75c666wua7tsmum3ajm6ylf782etfs60dj2h/wstETH",
      },
    },
  },
  {
    name: "Axelar USDC",
    symbol: "axlUSDC",
    img_url:
      "https://raw.githubusercontent.com/cosmos/chain-registry/f5d291313003d2428205a541167a634eed93d453/axelar/images/usdc.svg",
    base: "USD",
    id: "axlusdc",
    decimals: 6,
    assets: {
      "neutron-1": {
        native:
          "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
      },
      "osmosis-1": {
        native:
          "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
      },
      "osmo-test-4": {
        native:
          "ibc/D189335C6E4A68B513C10AB227BF1C1D38C746766278BA3EEB4FB14124F1D858",
      },
    },
  },
  {
    name: "Osmo",
    symbol: "OSMO",
    img_url: "https://stats.apollo.farm/tokens/osmo.svg",
    base: "USD",
    id: "osmosis",
    decimals: 6,
    assets: {
      "osmosis-1": { native: "uosmo" },
      "osmo-test-4": { native: "uosmo" },
      "osmo-test-5": { native: "uosmo" },
    },
  },
  {
    name: "Ion",
    symbol: "ION",
    img_url: "https://stats.apollo.farm/tokens/ion.png",
    base: "USD",
    id: "ion",
    decimals: 6,
    assets: {
      "osmosis-1": { native: "uion" },
      "osmo-test-4": { native: "uion" },
      "osmo-test-5": { native: "uion" },
    },
  },
  {
    name: "Atom",
    symbol: "ATOM",
    img_url: "https://stats.apollo.farm/tokens/atom.svg",
    base: "USD",
    id: "cosmos",
    decimals: 6,
    assets: {
      "osmosis-1": {
        native:
          "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      },
      "osmo-test-4": {
        native:
          "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",
      },
      "osmo-test-5": {
        native:
          "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477",
      },
      "neutron-1": {
        native:
          "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      },
    },
  },
  {
    name: "Tgrade",
    symbol: "TGD",
    img_url: "https://stats.apollo.farm/tokens/tgrade.svg",
    base: "USD",
    id: "tgrade",
    decimals: 6,
    assets: {
      "osmosis-1": {
        native:
          "ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C",
      },
      "osmo-test-4": {
        native:
          "ibc/1E09CB0F506ACF12FDE4683FB6B34DA62FB4BE122641E0D93AAF98A87675676C",
      },
    },
  },
  {
    name: "USDC",
    symbol: "USDC",
    img_url: "https://stats.apollo.farm/tokens/usdc.svg",
    base: "USD",
    id: "usd-coin",
    decimals: 6,
    assets: {
      "osmo-test-5": {
        native:
          "ibc/B3504E092456BA618CC28AC671A71FB08C6CA0FD0BE7C8A5B5A3E2DD933CC9E4",
      },
      "neutron-1": {
        native:
          "ibc/B559A80D62249C8AA07A380E2A2BEA6E5CA9A6F079C912C3A9E9B494105E4F81",
      },
    },
  },
  {
    name: "stAtom",
    symbol: "stATOM",
    img_url: "https://stats.apollo.farm/tokens/statom.svg",
    base: "USD",
    id: "stride-staked-atom",
    decimals: 6,
    assets: {
      "osmosis-1": {
        native:
          "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901",
      },
      "osmo-test-4": {
        native:
          "ibc/C140AFD542AE77BD7DCC83F13FDD8C5E5BB8C4929785E6EC2F4C636F98F17901",
      },
      "neutron-1": {
        native:
          "ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C",
      },
    },
  },
  {
    name: "stkAtom",
    symbol: "stkATOM",
    img_url: "",
    base: "USD",
    id: "stkatom",
    decimals: 6,
    assets: {
      "neutron-1": {
        native:
          "ibc/3649CE0C8A2C79048D8C6F31FF18FA69C9BC7EB193512E0BD03B733011290445",
      },
    },
  },
  {
    name: "Axelar wETH",
    symbol: "axlwETH",
    img_url: "https://stats.apollo.farm/tokens/weth.svg",
    base: "USD",
    id: "axlweth",
    decimals: 18,
    assets: {
      "osmosis-1": {
        native:
          "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
      },
      "osmo-test-4": {
        native:
          "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
      },
    },
  },
  {
    name: "wBTC",
    symbol: "wBTC",
    img_url: "https://stats.apollo.farm/tokens/wbtc.png",
    base: "USD",
    id: "axlwbtc",
    decimals: 8,
    assets: {
      "osmosis-1": {
        native:
          "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
      },
      "osmo-test-4": {
        native:
          "ibc/D1542AA8762DB13087D8364F3EA6509FD6F009A34F00426AF9E4F9FA85CBBF1F",
      },
    },
  },
  {
    name: "Dai",
    symbol: "DAI",
    img_url: "https://stats.apollo.farm/tokens/dai.svg",
    base: "USD",
    id: "dai",
    decimals: 18,
    assets: {
      "osmosis-1": {
        native:
          "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
      },
      "osmo-test-4": {
        native:
          "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
      },
    },
  },
  {
    name: "stOsmo",
    symbol: "stOSMO",
    img_url: "https://stats.apollo.farm/tokens/stosmo.svg",
    base: "USD",
    id: "stride-staked-osmo",
    decimals: 6,
    assets: {
      "osmosis-1": {
        native:
          "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC",
      },
      "osmo-test-4": {
        native:
          "ibc/D176154B0C63D1F9C6DCFB4F70349EBF2E2B5A87A05902F57A6AE92B863E9AEC",
      },
    },
  },
  {
    name: "Juno",
    symbol: "JUNO",
    img_url: "https://stats.apollo.farm/tokens/juno.svg",
    base: "USD",
    id: "juno-network",
    decimals: 6,
    assets: {
      "osmosis-1": {
        native:
          "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
      },
      "osmo-test-4": {
        native:
          "ibc/46B44899322F3CD854D2D46DEEF881958467CDD4B3B10086DA49296BBED94BED",
      },
    },
  },
  {
    name: "Akash",
    symbol: "AKT",
    img_url: "https://api.apollo.farm/tokens/akt.svg",
    base: "USD",
    id: "akash-network",
    decimals: 6,
    assets: {
      "osmosis-1": {
        native:
          "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
      },
      "osmo-test-4": {
        native:
          "ibc/1480B8FD20AD5FCAE81EA87584D269547DD4D436843C1D20F15E00EB64743EF4",
      },
    },
  },
  {
    name: "Cronos",
    symbol: "CRO",
    img_url: "https://api.apollo.farm/tokens/cro.svg",
    base: "USD",
    id: "crypto-com-chain",
    decimals: 8,
    assets: {
      "osmosis-1": {
        native:
          "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
      },
      "osmo-test-4": {
        native:
          "ibc/E6931F78057F7CC5DA0FD6CEF82FF39373A6E0452BF1FD76910B93292CF356C1",
      },
    },
  },
  {
    name: "Secret",
    symbol: "SCRT",
    img_url: "https://api.apollo.farm/tokens/scrt.svg",
    base: "USD",
    id: "secret",
    decimals: 6,
    assets: {
      "osmosis-1": {
        native:
          "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
      },
      "osmo-test-4": {
        native:
          "ibc/0954E1C28EB7AF5B72D24F3BC2B47BBB2FDF91BDDFD57B74B99E133AED40972A",
      },
    },
  },
  {
    name: "Inter Stable Token",
    symbol: "IST",
    img_url: "https://api.apollo.farm/tokens/ist.png",
    base: "USD",
    id: "inter-stable-token",
    decimals: 6,
    assets: {
      "osmosis-1": {
        native:
          "ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5",
      },
      "osmo-test-4": {
        native:
          "ibc/92BE0717F4678905E53F4E45B2DED18BC0CB97BF1F8B6A25AFEDF3D5A879B4D5",
      },
    },
  },
  {
    name: "Evmos",
    symbol: "EVMOS",
    img_url: "https://stats.apollo.farm/tokens/evmos.svg",
    base: "USD",
    id: "evmos",
    decimals: 18,
    assets: {
      "osmosis-1": {
        native:
          "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
      },
      "osmo-test-4": {
        native:
          "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A",
      },
    },
  },
  {
    name: "Stride",
    symbol: "STRD",
    img_url: "https://stats.apollo.farm/tokens/strd.svg",
    base: "USD",
    id: "stride",
    decimals: 6,
    assets: {
      "osmosis-1": {
        native:
          "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
      },
      "osmo-test-4": {
        native:
          "ibc/A8CA5EE328FA10C9519DF6057DA1F69682D28F7D0F5CCC7ECB72E3DCA2D157A4",
      },
      "neutron-1": {
        native:
          "ibc/3552CECB7BCE1891DB6070D37EC6E954C972B1400141308FCD85FD148BD06DE5",
      },
    },
  },
  {
    name: "Dydx",
    symbol: "DYDX",
    img_url: "",
    base: "USD",
    id: "dydx-chain",
    decimals: 6,
    assets: {
      "neutron-1": {
        native:
          "ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130",
      },
    },
  },
  {
    name: "stDydx",
    symbol: "stDYDX",
    img_url: "",
    base: "USD",
    id: "stride-staked-dydx",
    decimals: 6,
    assets: {
      "neutron-1": {
        native:
          "ibc/BAA1D21893B1D36865C6CA44D18F4ACF08BAD70CB6863C4722E0A61703808F77",
      },
    },
  },
  {
    name: "Celestia",
    symbol: "TIA",
    img_url: "",
    base: "USD",
    id: "celestia",
    decimals: 6,
    assets: {
      "neutron-1": {
        native:
          "ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7",
      },
    },
  },
  {
    name: "stTia",
    symbol: "stTIA",
    img_url: "",
    base: "USD",
    id: "stride-staked-tia",
    decimals: 6,
    assets: {
      "neutron-1": {
        native:
          "ibc/6569E05DEE32B339D9286A52BE33DFCEFC97267F23EF9CFDE0C055140967A9A5",
      },
    },
  },
  {
    name: "Axelar USDT",
    symbol: "axlUSDT",
    img_url: "",
    base: "USD",
    id: "bridged-tether-axelar",
    decimals: 6,
    assets: {
      "neutron-1": {
        native:
          "ibc/57503D7852EF4E1899FE6D71C5E81D7C839F76580F86F21E39348FC2BC9D7CE2",
      },
    },
  },
  {
    name: "Apollo",
    symbol: "APOLLO",
    img_url: "",
    base: "USD",
    id: "apollo-2",
    decimals: 6,
    assets: {
      "neutron-1": {
        native:
          "factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO",
      },
    },
  },
];
