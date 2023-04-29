import { NetworkConfig } from "../../../types";
import { supported_wallets } from "./wallets";
import { supported_apps } from "./apps";
import { code_ids } from "./code_ids";
import { contracts } from "./contracts";
import { nodes } from "./nodes";
import { tokens } from "./tokens";

export const secret_testnet_config: NetworkConfig = {
  chain_id: "pulsar-2",
  supported_wallets,
  supported_apps,
  code_ids,
  contracts,
  nodes,
  tokens,
};
