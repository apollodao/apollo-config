import { NetworkConfig } from "./types";
import { osmosis_mainnet_config } from "./networks/osmosis/config";
import { osmosis_testnet_config } from "./networks/osmosis/testnet/config";
import { secret_testnet_config } from "./networks/secret_testnet/config";
import { injective_testnet_config } from "./networks/injective_testnet/config";
import { injective_mainnet_config } from "./networks/injective_mainnet/config";

export const supported_networks = [
  "osmo-test-4",
  "osmosis-1",
  "pulsar-2",
  "injective-888",
  "injective-1",
] as const;
export const config: NetworkConfig = {
  "osmo-test-4": osmosis_testnet_config,
  "osmosis-1": osmosis_mainnet_config,
  "pulsar-2": secret_testnet_config,
  "injective-888": injective_testnet_config,
  "injective-1": injective_mainnet_config,
};
