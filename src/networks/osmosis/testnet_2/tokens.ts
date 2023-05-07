import { AssetInfo, Token } from "../../../types";

export type supported_data_sources =
  | {
      name: "osmo-test-5";
      params: {
        contract_address: string;
        dex: "osmosis";
        base_token: AssetInfo;
      };
    }
  | {
      name: "osmosis-api";
      params: {
        pool_id: number;
        underlying_tokens: AssetInfo[];
      };
    };

export const tokens: (Omit<Token, "sources"> & {
  sources: supported_data_sources[];
})[] = [
  {
    name: "OSMO/USDC Vault Token - 1d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1q40xvrzpldwq5he4ftsf7zm2jf80tj373qaven38yqrvhex8r9rs8n94kv/cwVTT",
    },
    base: { native: "gamm/pool/6" },
    sources: [
      {
        name: "osmo-test-5",
        params: {
          contract_address:
            "osmo1q40xvrzpldwq5he4ftsf7zm2jf80tj373qaven38yqrvhex8r9rs8n94kv",
          base_token: { native: "gamm/pool/6" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "OSMO/USDC Vault Token - 7d",
    img_url: "",
    asset: {
      native:
        "factory/osmo14lu7m4ganxs20258dazafrjfaulmfxruq9n0r0th90gs46jk3tuqwfkqwn/cwVTT",
    },
    base: { native: "gamm/pool/6" },
    sources: [
      {
        name: "osmo-test-5",
        params: {
          contract_address:
            "osmo14lu7m4ganxs20258dazafrjfaulmfxruq9n0r0th90gs46jk3tuqwfkqwn",
          base_token: { native: "gamm/pool/6" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "OSMO/USDC Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1fmq9hw224fgz8lk48wyd0gfg028kvvzggt6c3zvnaqkw23x68cws5nd5em/cwVTT",
    },
    base: { native: "gamm/pool/6" },
    sources: [
      {
        name: "osmo-test-5",
        params: {
          contract_address:
            "osmo1fmq9hw224fgz8lk48wyd0gfg028kvvzggt6c3zvnaqkw23x68cws5nd5em",
          base_token: { native: "gamm/pool/6" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "OSMO/USDC LP Token",
    img_url: "",
    asset: { native: "gamm/pool/6" },
    base: [
      { native: "uosmo" },
      {
        native:
          "ibc/B3504E092456BA618CC28AC671A71FB08C6CA0FD0BE7C8A5B5A3E2DD933CC9E4",
      },
    ],
    sources: [
      {
        name: "osmosis-api",
        params: {
          pool_id: 6,
          underlying_tokens: [
            { native: "uosmo" },
            {
              native:
                "ibc/B3504E092456BA618CC28AC671A71FB08C6CA0FD0BE7C8A5B5A3E2DD933CC9E4",
            },
          ],
        },
      },
    ],
    decimals: 18,
  },
];
