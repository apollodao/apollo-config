import { Chain } from "../../types";
import { neutron_testnet_config } from "./testnet/config";
import { tokens } from "./tokens";

export const neutron_config: Chain = {
  name: "neutron",
  testnet: neutron_testnet_config,
  tokens,
};
