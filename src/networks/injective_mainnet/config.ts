import { Network } from "../../types";
import { supported_wallets } from "./wallets";
import { supported_apps } from "./apps";
import { code_ids } from "./code_ids";
import { contracts } from "./contracts";
import { nodes } from "./nodes";
import { tokens } from "./tokens";

export const injective_mainnet_config: Network = {
  name: "injective mainnet",
  chain_id: "injective-1",
  supported_wallets,
  supported_apps,
  code_ids,
  contracts,
  nodes,
  tokens,
};
