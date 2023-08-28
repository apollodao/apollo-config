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
    img_url: "https://stats.apollo.farm/tokens/ntrn.webp",
    asset: { native: "untrn" },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "neutron" } }],
    decimals: 6,
  },
  {
    name: "Astro",
    img_url: "https://stats.apollo.farm/tokens/astro.png",
    asset: {
      native:
        "ibc/2FEFB00E728F98F0C4BBE8CA362123ACAB466EDA2826DC6837E49F4C1902F21BBA",
    },
    base: "USD",
    sources: [{ name: "coingecko-api", params: { coingecko_id: "astroport" } }],
    decimals: 6,
  },
];
