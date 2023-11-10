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
    name: "AXL/NTRN Vault Token - 0d",
    img_url: "",
    asset: {
      native:
        "factory/neutron12pdx3z009fx92kcsr8fhvnkh92w98n5f5xaecz3sn0kzxthz20js0llxjw/VaultToken/xyk/0d/AXL/NTRN",
    },
    base: {
      cw20: "neutron19p7fqw2njtf90y5atdv8367ehrzspjla6wu73z70ey9hk5pvtlqqx7gvzc",
    },
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron12pdx3z009fx92kcsr8fhvnkh92w98n5f5xaecz3sn0kzxthz20js0llxjw",
          base_token: {
            cw20: "neutron19p7fqw2njtf90y5atdv8367ehrzspjla6wu73z70ey9hk5pvtlqqx7gvzc",
          },
        },
      },
    ],
    decimals: 12,
  },
  {
    name: "wstETH/axlWETH Vault Token - 0d",
    img_url: "",
    asset: {
      native:
        "factory/neutron1jyk9sulr5wfyy0zp95cujupvennnc9xap79wkp6pwp7k2qmsmz2qw0wkrg/VaultToken/xyk/0d/wstETH/axlWETH",
    },
    base: {
      cw20: "neutron190u6kv2esdm93vj4wxjayzrchau5j3ekpacupdayw3kqepwdnt5sg7lfjw",
    },
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1jyk9sulr5wfyy0zp95cujupvennnc9xap79wkp6pwp7k2qmsmz2qw0wkrg",
          base_token: {
            cw20: "neutron190u6kv2esdm93vj4wxjayzrchau5j3ekpacupdayw3kqepwdnt5sg7lfjw",
          },
        },
      },
    ],
    decimals: 12,
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
      cw20: "neutron190u6kv2esdm93vj4wxjayzrchau5j3ekpacupdayw3kqepwdnt5sg7lfjw",
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
            "neutron1wzsewgysr8ttdlw96lp7u2j55z3sg7rtuvfjmd70ajavvpr3308s3zekqu",
          reward_contract:
            "neutron10y38963k0rzqs554nefe8p8f4cpx9k5v9awlfgw83nzprjqh3cfq9grt5z",
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
                "ibc/A585C2D15DCD3B010849B453A2CFCB5E213208A5AB665691792684C26274304D",
            },
          ],
          swap_fee: 0.003,
        },
      },
    ],
    decimals: 18,
  },
];
