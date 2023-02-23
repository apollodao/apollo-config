import { ChainInfo } from "@keplr-wallet/types";
import { supported_networks } from "./config";

export type Addr = string;
export type Decimal = string;
export type CwDexRouterBaseForString = string;

export type SupportedNetwork = (typeof supported_networks)[number];

export type NetworkConfig = {
  [k in SupportedNetwork]: Network;
};

export type Network = {
  name: string;
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
};

export type Token = {
  name: string;
  img_url: string;
  asset: AssetInfo;
  base: AssetInfo | AssetInfo[] | "USD";
  sources: DataSource[];
  decimals: number;
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
