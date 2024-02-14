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
    name: "Capped stTIA/TIA Vault Token",
    img_url: "",
    asset: {
      native:
        "factory/neutron1qzf6t478xuutq0ahkm07pl2y2tctreccrlafkrl38k4cafk3rgdq3lfky5/VaultToken/pcl/capped/stTIA/TIA",
    },
    base: {
      cw20: "neutron1jh2vt0zl8pxdfpvllwctpd07c7ct62qwjfk04nvpexfnwh8ram2sa260jp",
    },
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1qzf6t478xuutq0ahkm07pl2y2tctreccrlafkrl38k4cafk3rgdq3lfky5",
          base_token: {
            cw20: "neutron1jh2vt0zl8pxdfpvllwctpd07c7ct62qwjfk04nvpexfnwh8ram2sa260jp",
          },
        },
      },
    ],
    decimals: 12,
  },
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
      {
        native:
          "ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A",
      },
      {
        native:
          "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
      },
    ],
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1jpm7j2cmj2mmk5pnxv20dxz869tw2vyy87qdl0xjasqnn23l04psudtf2y",
          underlying_tokens: [
            {
              native:
                "ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A",
            },
            {
              native:
                "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
            },
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
        native: "untrn",
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
              native: "untrn",
            },
          ],
          swap_fee: 0.003,
        },
      },
    ],
    decimals: 6,
  },
  {
    name: "stATOM/ATOM LP Token",
    img_url: "",
    asset: {
      cw20: "neutron1y4330yyf0vc08scyq8a7rusl4j8p0pw98p4wvyqqkdu4aj6kv4pqxaa7na",
    },
    base: [
      {
        native:
          "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      },
      {
        native:
          "ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C",
      },
    ],
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1l7ny0rckx9rks2p2aq94wd74sehjczym6n9y4yax8lcy9s39uans4uga62",
          underlying_tokens: [
            {
              native:
                "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
            },
            {
              native:
                "ibc/B7864B03E1B9FD4F049243E92ABD691586F682137037A9F3FCA5222815620B3C",
            },
          ],
          swap_fee: 0.003,
        },
      },
    ],
    decimals: 6,
  },
  // {
  //   name: "ATOM/stkATOM LP Token",
  //   img_url: "",
  //   asset: {
  //     cw20: "neutron13jcw3sryrhpmamt3dqgatuts4tdewyjk4edzejcc7sjy3kypmqvshwexa8",
  //   },
  //   base: [
  //     {
  //       native:
  //         "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
  //     },
  //     {
  //       native:
  //         "ibc/3649CE0C8A2C79048D8C6F31FF18FA69C9BC7EB193512E0BD03B733011290445",
  //     },
  //   ],
  //   sources: [
  //     {
  //       name: "neutron-1",
  //       params: {
  //         dex: "astroport",
  //         contract_address:
  //           "neutron1d73vc84e36d4mmm9dwqql4sty3fx4usjmupxewx36e4qudm5auqs0yryma",
  //         underlying_tokens: [
  //           {
  //             native:
  //               "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
  //           },
  //           {
  //             native:
  //               "ibc/3649CE0C8A2C79048D8C6F31FF18FA69C9BC7EB193512E0BD03B733011290445",
  //           },
  //         ],
  //         swap_fee: 0.003, // todo - what is swap fee for pcl?
  //       },
  //     },
  //   ],
  //   decimals: 6,
  // },
  {
    name: "stTIA/TIA LP Token",
    img_url: "",
    asset: {
      cw20: "neutron1jh2vt0zl8pxdfpvllwctpd07c7ct62qwjfk04nvpexfnwh8ram2sa260jp",
    },
    base: [
      {
        native:
          "ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7",
      },
      {
        native:
          "ibc/6569E05DEE32B339D9286A52BE33DFCEFC97267F23EF9CFDE0C055140967A9A5",
      },
    ],
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron18v0swe4fg2hdnc80zw74qfnjxulnwmw9f5uv99ukj2usrrpcgjyswslqc6",
          underlying_tokens: [
            {
              native:
                "ibc/773B4D0A3CD667B2275D5A4A7A2F0909C0BA0F4059C0B9181E680DDF4965DCC7",
            },
            {
              native:
                "ibc/6569E05DEE32B339D9286A52BE33DFCEFC97267F23EF9CFDE0C055140967A9A5",
            },
          ],
          swap_fee: 0.003, // todo - what is swap fee for pcl?
        },
      },
    ],
    decimals: 6,
  },
  {
    name: "axlUSDC/USDT LP Token",
    img_url: "",
    asset: {
      cw20: "neutron1kmuv6zmpr2nd3fnqefcffgfmhm74c8vhyerklaphrawyp3398gws74huny",
    },
    base: [
      {
        native:
          "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
      },
      {
        native:
          "ibc/57503D7852EF4E1899FE6D71C5E81D7C839F76580F86F21E39348FC2BC9D7CE2",
      },
    ],
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1adk7gupr0thjr3e6wcnlxr7ugclcg4cukv2np8la29dz38zuzymqjcv5s4",
          underlying_tokens: [
            {
              native:
                "ibc/F082B65C88E4B6D5EF1DB243CDA1D331D002759E938A0F5CD3FFDC5D53B3E349",
            },
            {
              native:
                "ibc/57503D7852EF4E1899FE6D71C5E81D7C839F76580F86F21E39348FC2BC9D7CE2",
            },
          ],
          swap_fee: 0.0005,
        },
      },
    ],
    decimals: 6,
  },
  {
    name: "APOLLO/wstETH LP Token",
    img_url: "",
    asset: {
      cw20: "neutron13vptqlpfpwpvy4hyqzaa2td3t35scctna2q45f56dsmpmugs40jq7w9rqc",
    },
    base: [
      {
        native:
          "factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO",
      },
      {
        native:
          "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
      },
    ],
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron169vshmj6x7dlugd32zvwpv6ujwgz80d0l6xt8f5eufkn2dtvhk6s3ulgqv",
          underlying_tokens: [
            {
              native:
                "factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO",
            },
            {
              native:
                "factory/neutron1ug740qrkquxzrk2hh29qrlx3sktkfml3je7juusc2te7xmvsscns0n2wry/wstETH",
            },
          ],
          swap_fee: 0.003,
        },
      },
    ],
    decimals: 6,
  },
  {
    name: "stDYDX/DYDX LP Token",
    img_url: "",
    asset: {
      cw20: "neutron1u6cqvmnxdd0tv423c49esqxuahfr8kr2nsmzgtkszcct06vkejzqqnc55m",
    },
    base: [
      {
        native:
          "ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130",
      },
      {
        native:
          "ibc/BAA1D21893B1D36865C6CA44D18F4ACF08BAD70CB6863C4722E0A61703808F77",
      },
    ],
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron17wlm5hwarf77acc0wk0nvcsk38hcl25522e0kvvvzaqdgdt7y4ss78ds0v",
          underlying_tokens: [
            {
              native:
                "ibc/2CB87BCE0937B1D1DFCEE79BE4501AAF3C265E923509AEAC410AD85D27F35130",
            },
            {
              native:
                "ibc/BAA1D21893B1D36865C6CA44D18F4ACF08BAD70CB6863C4722E0A61703808F77",
            },
          ],
          swap_fee: 0.003,
        },
      },
    ],
    decimals: 6,
  },
  {
    name: "APOLLO/ASTRO LP Token",
    img_url: "",
    asset: {
      cw20: "neutron1wzvvmz8qlqu7cngyac99frs6sdes4tpuk2lk78daenm92jqaz8ss3cgjz9",
    },
    base: [
      {
        native:
          "factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO",
      },
      {
        native:
          "ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A",
      },
    ],
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1zhjrgpvu2th5t8w5ndfw9lwsqp95sgr46kf4j3jrcfe2lep0hlnqfczpjm",
          underlying_tokens: [
            {
              native:
                "factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO",
            },
            {
              native:
                "ibc/5751B8BCDA688FD0A8EC0B292EEF1CDEAB4B766B63EC632778B196D317C40C3A",
            },
          ],
          swap_fee: 0.003,
        },
      },
    ],
    decimals: 6,
  },
  {
    name: "APOLLO/USDC LP Token",
    img_url: "",
    asset: {
      cw20: "neutron127p6hzzvrms9vfw4xehs9gaxj3kyugvux4le88f96aqaf3nyjnuq2l22sr",
    },
    base: [
      {
        native:
          "factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO",
      },
      {
        native:
          "ibc/B559A80D62249C8AA07A380E2A2BEA6E5CA9A6F079C912C3A9E9B494105E4F81",
      },
    ],
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron15wal8wsy7mq37hagmrzchwmugpjzwlzrlw7pylkhlfuwukmc2kps722ems",
          underlying_tokens: [
            {
              native:
                "factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO",
            },
            {
              native:
                "ibc/B559A80D62249C8AA07A380E2A2BEA6E5CA9A6F079C912C3A9E9B494105E4F81",
            },
          ],
          swap_fee: 0.003,
        },
      },
    ],
    decimals: 6,
  },
  {
    name: "APOLLO/NTRN LP Token",
    img_url: "",
    asset: {
      cw20: "neutron1yy474ug5qn69twuaefzen64gfjyp5d6g0teeqgp7rugxl3lfxq3qtc0t09",
    },
    base: [
      {
        native:
          "factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO",
      },
      {
        native: "untrn",
      },
    ],
    sources: [
      {
        name: "neutron-1",
        params: {
          dex: "astroport",
          contract_address:
            "neutron1fktxsflze70p7565yslwtth290zqad4agt4gpvjffy58h6raxvasz5etfw",
          underlying_tokens: [
            {
              native:
                "factory/neutron154gg0wtm2v4h9ur8xg32ep64e8ef0g5twlsgvfeajqwghdryvyqsqhgk8e/APOLLO",
            },
            {
              native: "untrn",
            },
          ],
          swap_fee: 0.003,
        },
      },
    ],
    decimals: 6,
  },
];
