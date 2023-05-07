import { Chain } from "../../types";
import { tokens } from "./tokens";
import { osmosis_mainnet_config } from "./mainnet/config";
import { osmosis_testnet_config } from "./testnet/config";
import { osmosis_testnet_2_config } from "./testnet_2/config";

export const osmosis_config: Chain = {
  name: "osmosis",
  mainnet: osmosis_mainnet_config,
  testnet: osmosis_testnet_config,
  testnet_2: osmosis_testnet_2_config,
  tokens,
};
