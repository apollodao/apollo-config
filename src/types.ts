import { ChainInfo } from "@keplr-wallet/types";
import { supported_chains, supported_networks } from "./config";

export type Addr = string;
export type Decimal = string;
export type CwDexRouterBaseForString = string;

export type SupportedChain = (typeof supported_chains)[number];
export type SupportedNetwork = (typeof supported_networks)[number];

export type ChainConfig = {
  [k in SupportedChain]: Chain;
};

export type Chain = {
  name: string;
  mainnet?: NetworkConfig;
  testnet?: NetworkConfig;
  testnet_2?: NetworkConfig;
  tokens?: CoingeckoToken[];
};

export type NetworkConfig = {
  chain_id: SupportedNetwork;
  nodes: Node[];
  supported_wallets: Wallet[];
  supported_apps: App[];
  code_ids: CodeID[];
  contracts: Contract[];
  tokens: Token[];
};

export type Node = {
  name: string;
  lcd: string;
  rpc: string;
  archive: boolean;
};

export type Token = {
  name: string;
  symbol?: string;
  img_url: string;
  asset: AssetInfo;
  base: AssetInfo | AssetInfo[];
  sources: DataSource[]; // todo - refactor to 'source', single source instead of array
  decimals: number;
};

export type CoingeckoToken = {
  id: string;
  name: string;
  symbol: string;
  img_url: string;
  base: "USD";
  decimals: number;
  assets: { [network in SupportedNetwork]?: AssetInfo };
};

export type DataSource = {
  name: string;
  params: any;
};

export type Wallet = {
  name: string;
  config?: any; // can use ChainInfo for TS. nesting causes schema generator to crash.
};

export type App = {
  name: string;
  supportedFeatures: string[];
};

export type Contract = {
  label: string;
  code_id?: CodeID["id"];
  address: string;
  description?: string;
  admin?: string | boolean;
};

export type CodeID = {
  label: string;
  id: number;
  checksum: string;
};
export type AssetInfo =
  | {
      native: string;
    }
  | {
      cw20: string;
    }
  | {
      cw1155: [string, string];
    };
