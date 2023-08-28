import { NetworkConfig } from "../../../types";
import { supported_wallets } from "./wallets";
import { supported_apps } from "./apps";
import { code_ids } from "./code_ids";
import { contracts } from "./contracts";
import { tokens } from "./tokens";
import { nodes } from "./nodes";

export const neutron_testnet_config: NetworkConfig = {
  chain_id: "pion-1",
  supported_wallets,
  supported_apps,
  code_ids,
  contracts,
  tokens,
  nodes,
};
