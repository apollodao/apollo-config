import { AssetInfo, Token } from "../../../types";

export type supported_data_sources = {
  name: "pion-1";
  params: {
    dex: "astroport";
    contract_address: string;
  };
};

export const tokens: (Omit<Token, "sources"> & {
  sources: supported_data_sources[];
})[] = [
  {
    name: "Neutron-Astro Vault Token - 0d",
    img_url: "",
    asset: {
      native:
        "factory/neutron1675p0u4eflqgvfwf3tlk8rhkvfjggrenjlc4jqtyjgsrfp9kyrus6r8hly/VaultToken/xyk/0d/ASTRO/NTRN",
    },
    base: {
      cw20: "neutron1cxzfrnpjpptlwpwz6x0c4s5ephzxf0xm32p8tau2y5l2k2qv6e9sjznux9",
    },
    sources: [
      {
        name: "pion-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1675p0u4eflqgvfwf3tlk8rhkvfjggrenjlc4jqtyjgsrfp9kyrus6r8hly",
        },
      },
    ],
    decimals: 6,
  },
  {
    name: "Neutron-Astro LP Token",
    img_url: "",
    asset: {
      cw20: "neutron1cxzfrnpjpptlwpwz6x0c4s5ephzxf0xm32p8tau2y5l2k2qv6e9sjznux9",
    },
    base: [
      { native: "untrn" },
      {
        native:
          "ibc/2FEFB00E728F98F0C4BBE8CA362123ACAB466EDA2826DC6837E49F4C1902F21BBA",
      },
    ],
    sources: [
      {
        name: "pion-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1cxzfrnpjpptlwpwz6x0c4s5ephzxf0xm32p8tau2y5l2k2qv6e9sjznux9",
        },
      },
    ],
    decimals: 6,
  },
];
