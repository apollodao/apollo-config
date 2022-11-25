import { ChainInfo } from "@keplr-wallet/types";

export type Addr = string;
export type Decimal = string;
export type CwDexRouterBaseForString = string;

export const supported_networks = [
  "osmo-test-4",
  "osmosis-1",
  "pulsar-2",
  "injective-888",
  "injective-1",
] as const;

export type SupportedNetwork = typeof supported_networks[number];

export type NetworkConfig = {
  [k in SupportedNetwork]: Network;
};

export type Network = {
  name: string;
  chain_id: SupportedNetwork;
  nodes?: ApolloNode[];
  public_nodes: PublicNode[];
  supported_wallets: Wallet[];
  supported_apps: App[];
  code_ids: CodeID[];
  contracts: Contract[];
};

export type PublicNode = {
  type: "rpc" | "rest" | "seed" | "peer";
  url: string;
};

export type WebService = {
  type: string;
  url: string;
};

export type ApolloNode = {
  isValidator: boolean;
  walletAddress: string;
  valAddress: string;
  id: string;
  services: WebService[];
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
  admin?: string | boolean;
};

export type CodeID = {
  label: string;
  id: number;
  checksum: string;
  query_messages?: any[];
  execution_messages?: any[];
};
export type AssetInfoBaseForString =
  | {
      native: string;
    }
  | {
      cw20: string;
    }
  | {
      cw1155: [string, string];
    };

export interface ConfigBaseForString {
  base_token: AssetInfoBaseForString;
  force_withdraw_whitelist: string[];
  max_spread: Decimal;
  performance_fee: Decimal;
  pool_assets: AssetInfoBaseForString[];
  reward_assets: AssetInfoBaseForString[];
  reward_liquidation_target: AssetInfoBaseForString;
  router: CwDexRouterBaseForString;
  slippage_tolerance: Decimal;
  treasury: string;
}

export type Strategy = {
  contract_address: Addr;
  tvl: Decimal;
  apr: Decimal;
};

export type Strategies = Strategy[];
