import { Network } from "../../types";
import { supported_wallets } from "./mainnet/wallets";
import { supported_apps } from "./mainnet/apps";
import { code_ids } from "./mainnet/code_ids";
import { contracts } from "./mainnet/contracts";
import { nodes } from "./mainnet/nodes";
import { tokens } from "./tokens";
import { osmosis_mainnet_config } from "./mainnet/config";

export const osmosis_config: Network = {
  name: "osmosis",
  mainnet: osmosis_mainnet_config,
  tokens: [],
};
