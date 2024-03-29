import { AssetInfo, Token } from "../../../types";

export type supported_data_sources = {
  name: "pion-1";
  params: {
    dex: "astroport";
    contract_address: string;
    base_token?: AssetInfo;
    underlying_tokens?: AssetInfo[];
    swap_fee?: number;
  };
};

export const tokens: (Omit<Token, "sources"> & {
  sources: supported_data_sources[];
})[] = [
  {
    name: "NTRN/ASTRO 0d Vault Token",
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
          base_token: {
            cw20: "neutron1cxzfrnpjpptlwpwz6x0c4s5ephzxf0xm32p8tau2y5l2k2qv6e9sjznux9",
          },
        },
      },
    ],
    decimals: 12,
  },
  {
    name: "NTRN/AXL 0d Vault Token",
    img_url: "",
    asset: {
      native:
        "factory/neutron1rylsg4js5nrm4acaqez5v95mv279lpfrstfupwqykkg6mcyt6lsqxafdcf/VaultToken/xyk/0d/AXL/NTRN",
    },
    base: {
      cw20: "neutron1tur4sa9y2jqnvmepd80qwdykr3r73flr3a39kpm7frqwnh98c00s3w6v5w",
    },
    sources: [
      {
        name: "pion-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1rylsg4js5nrm4acaqez5v95mv279lpfrstfupwqykkg6mcyt6lsqxafdcf",
          base_token: {
            cw20: "neutron1tur4sa9y2jqnvmepd80qwdykr3r73flr3a39kpm7frqwnh98c00s3w6v5w",
          },
        },
      },
    ],
    decimals: 12,
  },
  {
    name: "wstETH/axlWETH 5m Vault Token",
    img_url: "",
    asset: {
      native:
        "factory/neutron1zzwzqehc5nhyv6wztfr63etvfa8ujmt6h0m488ttdy2tmde5gdqsqe25yn/VaultToken/xyk/5m/wstETH/axlWETH",
    },
    base: {
      cw20: "neutron1etvty3ru2mkzd0dxf3z2xhlz24609e8604r92y5d9xz8jnwp2xhswcmc7m",
    },
    sources: [
      {
        name: "pion-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1zzwzqehc5nhyv6wztfr63etvfa8ujmt6h0m488ttdy2tmde5gdqsqe25yn",
          base_token: {
            cw20: "neutron1etvty3ru2mkzd0dxf3z2xhlz24609e8604r92y5d9xz8jnwp2xhswcmc7m",
          },
        },
      },
    ],
    decimals: 12,
  },
  {
    name: "NTRN/ASTRO LP Token",
    img_url: "",
    asset: {
      cw20: "neutron1cxzfrnpjpptlwpwz6x0c4s5ephzxf0xm32p8tau2y5l2k2qv6e9sjznux9",
    },
    base: [
      { native: "untrn" },
      {
        native:
          "ibc/EFB00E728F98F0C4BBE8CA362123ACAB466EDA2826DC6837E49F4C1902F21BBA",
      },
    ],
    sources: [
      {
        name: "pion-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1vwrktvvxnevy7s5t7v44z72pdxncnq9gdsjwq9607cdd6vl2lfcs33fpah",
          underlying_tokens: [
            { native: "untrn" },
            {
              native:
                "ibc/EFB00E728F98F0C4BBE8CA362123ACAB466EDA2826DC6837E49F4C1902F21BBA",
            },
          ],
          swap_fee: 0.003,
        },
      },
    ],
    decimals: 6,
  },
  {
    name: "NTRN/AXL LP Token",
    img_url: "",
    asset: {
      cw20: "neutron1tur4sa9y2jqnvmepd80qwdykr3r73flr3a39kpm7frqwnh98c00s3w6v5w",
    },
    base: [
      { native: "untrn" },
      {
        native:
          "ibc/85CE72EE820A66F0ABD5EE3907A34E243E4BE2D6CFAEB4C08DF85BD6C0784FA2",
      },
    ],
    sources: [
      {
        name: "pion-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1ppl8ku9n3vxl27npmkr9a9j4v950wduuuy8rmhqs8zf4c87qr37q98sw7c",
          underlying_tokens: [
            { native: "untrn" },
            {
              native:
                "ibc/85CE72EE820A66F0ABD5EE3907A34E243E4BE2D6CFAEB4C08DF85BD6C0784FA2",
            },
          ],
          swap_fee: 0.003,
        },
      },
    ],
    decimals: 6,
  },
  {
    name: "wstETH/axlWETH LP Token",
    img_url: "",
    asset: {
      cw20: "neutron1etvty3ru2mkzd0dxf3z2xhlz24609e8604r92y5d9xz8jnwp2xhswcmc7m",
    },
    base: [
      {
        native:
          "factory/neutron1xdtwh5jr4zjx8g3zh29jud75c666wua7tsmum3ajm6ylf782etfs60dj2h/wstETH",
      },
      {
        native:
          "ibc/CC8B40E3F3536D003C6ED7C65421067215453AECE1517A6F0935470C634A036B",
      },
    ],
    sources: [
      {
        name: "pion-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1w08m5v225vkghuqht865yljrdvez6lp3lt9d3wewmw9f9uqu4mwsmn4uw3",
          underlying_tokens: [
            {
              native:
                "factory/neutron1xdtwh5jr4zjx8g3zh29jud75c666wua7tsmum3ajm6ylf782etfs60dj2h/wstETH",
            },
            {
              native:
                "ibc/CC8B40E3F3536D003C6ED7C65421067215453AECE1517A6F0935470C634A036B",
            },
          ],
          swap_fee: 0.003,
        },
      },
    ],
    decimals: 18,
  },
];
