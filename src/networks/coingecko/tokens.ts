import { CoingeckoToken } from "../../types";

export const tokens: CoingeckoToken[] = [
  {
    name: "Neutron",
    symbol: "NTRN",
    img_url: "https://stats.apollo.farm/tokens/ntrn.webp",
    base: "USD",
    id: "neutron",
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
          "ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A",
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
      },
      "pion-1": {
        native:
          "factory/neutron1xdtwh5jr4zjx8g3zh29jud75c666wua7tsmum3ajm6ylf782etfs60dj2h/wstETH",
        cw20: "neutron149tpx0nequ0cpctw06nk29hwfps0343wvwfh6tkhju3ra7hxvpeq8pvstf",
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
    },
  },
];
