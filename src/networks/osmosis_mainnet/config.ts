import { Network } from "../../types";
import { supported_wallets } from "./wallets";
import { supported_apps } from "./apps";
import { code_ids } from "./code_ids";
import { contracts } from "./contracts";
import { nodes } from "./nodes";
import { tokens } from "./tokens";

export const osmosis_mainnet_config: Network = {
  name: "osmosis mainnet",
  chain_id: "osmosis-1",
  supported_wallets,
  supported_apps,
  code_ids,
  contracts,
  nodes,
  tokens,
};
