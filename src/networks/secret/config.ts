import { Chain } from "../../types";
import { secret_testnet_config } from "./testnet/config";

export const secret_config: Chain = {
  name: "secret",
  testnet: secret_testnet_config,
};
