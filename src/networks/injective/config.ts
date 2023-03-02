import { Chain } from "../../types";
import { injective_mainnet_config } from "./mainnet/config";
import { injective_testnet_config } from "./testnet/config";

export const injective_config: Chain = {
  name: "injective",
  mainnet: injective_mainnet_config,
  testnet: injective_testnet_config,
  tokens: [],
};
