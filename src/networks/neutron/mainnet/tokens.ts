import { AssetInfo, Token } from "../../../types";

export type supported_data_sources = {
  name: "neutron-1";
  params: {
    dex: "astroport";
    contract_address: string;
    reward_contract?: string;
    reward_token?: AssetInfo;
    base_token?: AssetInfo;
    underlying_tokens?: AssetInfo[];
    swap_fee?: number;
  };
};

export const tokens: (Omit<Token, "sources"> & {
  sources: supported_data_sources[];
})[] = [
  {
    name: "ASTRO/axlUSDC 0d Vault Token",
    img_url: "",
    asset: {
      native:
        "factory/neutron135nkp0fth0vtertv7ngvkkgc4cwamp2tpnmjdlppat0047f9wjmqxeu9p8/VaultToken/xyk/0d/ASTRO/axlUSDC",
    },
    base: {
      cw20: "neutron1vw93hy8tm3xekpz9286428gesmmc8dqxmw8cujsh3fcu3rt0hvdqvlyrrl",
    },
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron135nkp0fth0vtertv7ngvkkgc4cwamp2tpnmjdlppat0047f9wjmqxeu9p8",
          base_token: {
            cw20: "neutron1vw93hy8tm3xekpz9286428gesmmc8dqxmw8cujsh3fcu3rt0hvdqvlyrrl",
          },
        },
      },
    ],
    decimals: 12,
  },
  {
    name: "wstETH/axlWETH 7d Vault Token",
    img_url: "",
    asset: {
      native:
        "factory/neutron1yvhe4f0q3swtf37pkf9kku59l52nevr3trxs62vah004a08pkl8qlaccc7/VaultToken/pcl/7d/wstETH/axlWETH",
    },
    base: {
      cw20: "neutron1uywpz5esk0r3z7p7vl2h3vnqlrchra5phkex76z0rh2pckun0x9q3lj7va",
    },
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1yvhe4f0q3swtf37pkf9kku59l52nevr3trxs62vah004a08pkl8qlaccc7",
          base_token: {
            cw20: "neutron1uywpz5esk0r3z7p7vl2h3vnqlrchra5phkex76z0rh2pckun0x9q3lj7va",
          },
        },
      },
    ],
    decimals: 12,
  },
  {
    name: "NTRN/wstETH 7d Vault Token",
    img_url: "",
    asset: {
      native:
        "factory/neutron17vedy2clhctw0654k93m375ud7h5jsy8nj9gnlkjnyd4mcfnfrdql226al/VaultToken/pcl/7d/NTRN/wstETH",
    },
    base: {
      cw20: "neutron15ww380rfn7r479tdyxpxa2mg2m8u85vlvdtr5tschh9q8s02gu8s7vr4dc",
    },
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron17vedy2clhctw0654k93m375ud7h5jsy8nj9gnlkjnyd4mcfnfrdql226al",
          base_token: {
            cw20: "neutron15ww380rfn7r479tdyxpxa2mg2m8u85vlvdtr5tschh9q8s02gu8s7vr4dc",
          },
        },
      },
    ],
    decimals: 12,
  },
  {
    name: "ASTRO/axlUSDC LP Token",
    img_url: "",
    asset: {
      cw20: "neutron1vw93hy8tm3xekpz9286428gesmmc8dqxmw8cujsh3fcu3rt0hvdqvlyrrl",
    },
    base: [
      { native: "ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A" },
      { native: "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349" },
    ],
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1jpm7j2cmj2mmk5pnxv20dxz869tw2vyy87qdl0xjasqnn23l04psudtf2y",
          underlying_tokens: [
            { native: "ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A" },
            { native: "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349" },
          ],
          swap_fee: 0.003,
        },
      },
    ],
    decimals: 6,
  },
  {
    name: "AXL/NTRN LP Token",
    img_url: "",
    asset: {
      cw20: "neutron19p7fqw2njtf90y5atdv8367ehrzspjla6wu73z70ey9hk5pvtlqqx7gvzc",
    },
    base: [
      { native: "untrn" },
      {
        native:
          "ibc/C0E66D1C81D8AAF0E6896E05190FDFBC222367148F86AC3EA679C28327A763CD",
      },
    ],
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron18aud0kjwzdjj3m2cqm7gqyyw556ctgp3h4metpe0kxad0ewx6s8sp3zknv",
          underlying_tokens: [
            { native: "untrn" },
            {
              native:
                "ibc/C0E66D1C81D8AAF0E6896E05190FDFBC222367148F86AC3EA679C28327A763CD",
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
      cw20: "neutron1uywpz5esk0r3z7p7vl2h3vnqlrchra5phkex76z0rh2pckun0x9q3lj7va",
    },
    base: [
      {
        native:
          "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
      },
      {
        native:
          "ibc/A585C2D15DCD3B010849B453A2CFCB5E213208A5AB665691792684C26274304D",
      },
    ],
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1yw0a7nxa8jdgzmdsme4gwxhj76n44z305qgwrzvlfavgna9epcys3k9m2f",
          reward_contract:
            "neutron1addt5qylptc0f9343q2u7q5wqulnwl5fwyqss9f757nrw34d0dzqvf8l2g",
          underlying_tokens: [
            {
              native:
                "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
            },
            {
              native:
                "ibc/A585C2D15DCD3B010849B453A2CFCB5E213208A5AB665691792684C26274304D",
            },
          ],
          swap_fee: 0.003,
        },
      },
    ],
    decimals: 6,
  },
  {
    name: "NTRN/wstETH LP Token",
    img_url: "",
    asset: {
      cw20: "neutron15ww380rfn7r479tdyxpxa2mg2m8u85vlvdtr5tschh9q8s02gu8s7vr4dc",
    },
    base: [
      {
        native:
          "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
      },
      {
        native:
          "untrn",
      },
    ],
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1fr3h0w6sg62agzpvu42ewj8m6rn9x45py77egd8xefp2682st39suqnx6n",
          reward_token: {
            cw20: "neutron149tpx0nequ0cpctw06nk29hwfps0343wvwfh6tkhju3ra7hxvpeq8pvstf",
          },
          underlying_tokens: [
            {
              native:
                "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
            },
            {
              native:
                "untrn",
            },
          ],
          swap_fee: 0.003,
        },
      },
    ],
    decimals: 6,
  },
];
