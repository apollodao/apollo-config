import { AssetInfo, Token } from "../../types";

export type supported_data_sources = {
  name: "coingecko-api";
  params: { coingecko_id: string };
};

export const tokens: (Omit<Token, "sources"> & {
  sources: supported_data_sources[];
})[] = [
  {
    name: "Neutron",
    symbol: "NTRN",
    img_url: "https://stats.apollo.farm/tokens/ntrn.webp",
    asset: { native: "untrn" },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "neutron" } }],
    decimals: 6,
  },
  {
    name: "Astro",
    symbol: "ASTRO",
    img_url: "https://stats.apollo.farm/tokens/astro.png",
    asset: {
      native:
        "ibc/EFB00E728F98F0C4BBE8CA362123ACAB466EDA2826DC6837E49F4C1902F21BBA",
    },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "astroport" } }],
    decimals: 6,
  },
  {
    name: "Axelar Testnet",
    symbol: "AXL",
    img_url: "https://stats.apollo.farm/tokens/axl.svg",
    asset: {
      native:
        "ibc/85CE72EE820A66F0ABD5EE3907A34E243E4BE2D6CFAEB4C08DF85BD6C0784FA2",
    },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "axelar" } }],
    decimals: 6,
  },
  {
    name: "Axelar Mainnet",
    symbol: "AXL",
    img_url: "https://stats.apollo.farm/tokens/axl.svg",
    asset: {
      native:
        "ibc/C0E66D1C81D8AAF0E6896E05190FDFBC222367148F86AC3EA679C28327A763CD",
    },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "axelar" } }],
    decimals: 6,
  },
  {
    name: "Ethereum Testnet",
    symbol: "ETH",
    img_url: "https://stats.apollo.farm/tokens/weth.svg",
    asset: {
      native:
        "ibc/CC8B40E3F3536D003C6ED7C65421067215453AECE1517A6F0935470C634A036B",
    },
    base: "USD",
    sources: [
      {
        name: "coingecko-api",
        params: {
          coingecko_id: "goerli-eth",
        },
      },
    ],
    decimals: 18,
  },
  {
    name: "Wrapped Staked Ethereum Testnet",
    symbol: "wstETH",
    img_url: "https://stats.apollo.farm/tokens/weth.svg",
    asset: {
      native:
        "factory/neutron1xdtwh5jr4zjx8g3zh29jud75c666wua7tsmum3ajm6ylf782etfs60dj2h/wstETH",
    },
    base: "USD",
    sources: [
      {
        name: "coingecko-api",
        params: {
          coingecko_id: "staked-ether",
        },
      },
    ],
    decimals: 18,
  },
  {
    name: "Ethereum Mainnet",
    symbol: "ETH",
    img_url: "https://stats.apollo.farm/tokens/weth.svg",
    asset: {
      native:
        "ibc/A585C2D15DCD3B010849B453A2CFCB5E213208A5AB665691792684C26274304D",
    },
    base: "USD",
    sources: [
      {
        name: "coingecko-api",
        params: {
          coingecko_id: "goerli-eth",
        },
      },
    ],
    decimals: 18,
  },
  {
    name: "Wrapped Staked Ethereum Mainnet",
    symbol: "wstETH",
    img_url: "https://stats.apollo.farm/tokens/weth.svg",
    asset: {
      native:
        "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
    },
    base: "USD",
    sources: [
      {
        name: "coingecko-api",
        params: {
          coingecko_id: "staked-ether",
        },
      },
    ],
    decimals: 18,
  },
  {
    name: "Wrapped Staked Ethereum Cw20",
    symbol: "wstETH",
    img_url: "https://stats.apollo.farm/tokens/weth.svg",
    asset: {
      cw20: "neutron149tpx0nequ0cpctw06nk29hwfps0343wvwfh6tkhju3ra7hxvpeq8pvstf",
    },
    base: "USD",
    sources: [
      {
        name: "coingecko-api",
        params: {
          coingecko_id: "staked-ether",
        },
      },
    ],
    decimals: 18,
  },
];
