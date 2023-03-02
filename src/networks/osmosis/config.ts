import { Chain } from "../../types";
import { supported_wallets } from "./mainnet/wallets";
import { supported_apps } from "./mainnet/apps";
import { code_ids } from "./mainnet/code_ids";
import { contracts } from "./mainnet/contracts";
import { nodes } from "./mainnet/nodes";
import { tokens } from "./tokens";
import { osmosis_mainnet_config } from "./mainnet/config";
import { osmosis_testnet_config } from "./testnet/config";

export const osmosis_config: Chain = {
  name: "osmosis",
  mainnet: osmosis_mainnet_config,
  testnet: osmosis_testnet_config,
  tokens,
};
