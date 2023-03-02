import { AssetInfo, Token } from "../../../types";

export type supported_data_sources = {
  name: "osmo-test-4";
  params: {
    contract_address: string;
    dex: "osmosis";
    base_token: AssetInfo;
  };
};

export const tokens: (Omit<Token, "sources"> & {
  sources: supported_data_sources[];
})[] = [
  {
    name: "OSMO/ATOM Vault Token - 1d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1zktjv92f76epswjvyxzzt3yyskpw7k6jsyu0kmq4zzc5fphrjumqlahctp/cwVTT",
    },
    base: { native: "gamm/pool/1" },
    sources: [
      {
        name: "osmo-test-4",
        params: {
          contract_address:
            "osmo1zktjv92f76epswjvyxzzt3yyskpw7k6jsyu0kmq4zzc5fphrjumqlahctp",
          base_token: { native: "gamm/pool/1" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "OSMO/ATOM Vault Token - 7d",
    img_url: "",
    asset: {
      native:
        "factory/osmo167j3yttwzcm3785tzk4jse2qdkppcy2xxrn5u6srqv7s93wnq6yqw8zhg5/cwVTT",
    },
    base: { native: "gamm/pool/1" },
    sources: [
      {
        name: "osmo-test-4",
        params: {
          contract_address:
            "osmo167j3yttwzcm3785tzk4jse2qdkppcy2xxrn5u6srqv7s93wnq6yqw8zhg5",
          base_token: { native: "gamm/pool/1" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "OSMO/ATOM Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1tp2m6g39h8mvhnu3plqjyen5s63023gj8w873l8wvly0cd77l6hsaa73wt/cwVTT",
    },
    base: { native: "gamm/pool/1" },
    sources: [
      {
        name: "osmo-test-4",
        params: {
          contract_address:
            "osmo1tp2m6g39h8mvhnu3plqjyen5s63023gj8w873l8wvly0cd77l6hsaa73wt",
          base_token: { native: "gamm/pool/1" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "JUNO/OSMO Vault Token - 1d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1r6h0pafu3wq0kf6yv09qhc8qvuku2d6fua0rpwwv46h7hd8u586scxspjf/cwVTT",
    },
    base: { native: "gamm/pool/497" },
    sources: [
      {
        name: "osmo-test-4",
        params: {
          contract_address:
            "osmo1r6h0pafu3wq0kf6yv09qhc8qvuku2d6fua0rpwwv46h7hd8u586scxspjf",
          base_token: { native: "gamm/pool/497" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "JUNO/OSMO Vault Token - 7d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1gr5epxn67q6202l3hy0mcnu7qc039v22pa6x2tsk23zwg235n9jsq6pmes/cwVTT",
    },
    base: { native: "gamm/pool/497" },
    sources: [
      {
        name: "osmo-test-4",
        params: {
          contract_address:
            "osmo1gr5epxn67q6202l3hy0mcnu7qc039v22pa6x2tsk23zwg235n9jsq6pmes",
          base_token: { native: "gamm/pool/497" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "JUNO/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1d6knwkelyr9eklewnn9htkess4ttpxpf2cze9ec0xfw7e3fj0ggssqzfpp/cwVTT",
    },
    base: { native: "gamm/pool/497" },
    sources: [
      {
        name: "osmo-test-4",
        params: {
          contract_address:
            "osmo1d6knwkelyr9eklewnn9htkess4ttpxpf2cze9ec0xfw7e3fj0ggssqzfpp",
          base_token: { native: "gamm/pool/497" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "ION/OSMO Vault Token - 1d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1nv2d5tcn3xhfera55swsl20hyymz9wjtl39x2c8tumkj3jzqc7qqvd9max/cwVTT",
    },
    base: { native: "gamm/pool/2" },
    sources: [
      {
        name: "osmo-test-4",
        params: {
          contract_address:
            "osmo1nv2d5tcn3xhfera55swsl20hyymz9wjtl39x2c8tumkj3jzqc7qqvd9max",
          base_token: { native: "gamm/pool/2" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "ION/OSMO Vault Token - 7d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1yzrsuck79kynz9yxpawkuppy5cnfv6cdjagtd8daa5dgefj4v6usdvlv0n/cwVTT",
    },
    base: { native: "gamm/pool/2" },
    sources: [
      {
        name: "osmo-test-4",
        params: {
          contract_address:
            "osmo1yzrsuck79kynz9yxpawkuppy5cnfv6cdjagtd8daa5dgefj4v6usdvlv0n",
          base_token: { native: "gamm/pool/2" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "ION/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1fzednazwpkjspa39yqsgm8xqmmgls5fe2mesgjmjjmqgtxzhwn8s6v5mmf/cwVTT",
    },
    base: { native: "gamm/pool/2" },
    sources: [
      {
        name: "osmo-test-4",
        params: {
          contract_address:
            "osmo1fzednazwpkjspa39yqsgm8xqmmgls5fe2mesgjmjjmqgtxzhwn8s6v5mmf",
          base_token: { native: "gamm/pool/2" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "TGRADE/OSMO Vault Token - 1d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1akgu9fd68rf6e6tvatryewxc23t27zvlpfsvgcu9emkgkqcpkz0qz5zlwc/cwVTT",
    },
    base: { native: "gamm/pool/769" },
    sources: [
      {
        name: "osmo-test-4",
        params: {
          contract_address:
            "osmo1akgu9fd68rf6e6tvatryewxc23t27zvlpfsvgcu9emkgkqcpkz0qz5zlwc",
          base_token: { native: "gamm/pool/769" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "TGRADE/OSMO Vault Token - 7d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1497tszvzlt5vgqzcy73ty5gc04ztmvqeaujeefmalq7wcufuf25sxayk3e/cwVTT",
    },
    base: { native: "gamm/pool/769" },
    sources: [
      {
        name: "osmo-test-4",
        params: {
          contract_address:
            "osmo1497tszvzlt5vgqzcy73ty5gc04ztmvqeaujeefmalq7wcufuf25sxayk3e",
          base_token: { native: "gamm/pool/769" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
  {
    name: "TGRADE/OSMO Vault Token - 14d",
    img_url: "",
    asset: {
      native:
        "factory/osmo1np5lnwpr3rs4dktvg5qzz7ra8j8pp8yd942qx7qe2298dv3hyfysjlpxkh/cwVTT",
    },
    base: { native: "gamm/pool/769" },
    sources: [
      {
        name: "osmo-test-4",
        params: {
          contract_address:
            "osmo1np5lnwpr3rs4dktvg5qzz7ra8j8pp8yd942qx7qe2298dv3hyfysjlpxkh",
          base_token: { native: "gamm/pool/769" },
          dex: "osmosis",
        },
      },
    ],
    decimals: 24,
  },
];
