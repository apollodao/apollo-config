import { ChainConfig } from "./types";
import { osmosis_config } from "./networks/osmosis/config";
import { secret_config } from "./networks/secret/config";
import { injective_config } from "./networks/injective/config";

export const supported_chains = ["osmosis", "secret", "injective"] as const;

export const supported_networks = [
  "osmo-test-4",
  "osmosis-1",
  "pulsar-2",
  "injective-888",
  "injective-1",
] as const;
export const config: ChainConfig = {
  injective: injective_config,
  secret: secret_config,
  osmosis: osmosis_config,
};
