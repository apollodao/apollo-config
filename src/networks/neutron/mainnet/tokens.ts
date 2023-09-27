import { AssetInfo, Token } from "../../../types";

export type supported_data_sources = {
  name: "neutron-1";
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
