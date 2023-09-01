import { ChainConfig } from "./types";
import { osmosis_config } from "./networks/osmosis/config";
import { secret_config } from "./networks/secret/config";
import { injective_config } from "./networks/injective/config";
import { neutron_config } from "./networks/neutron/config";

export const supported_chains = [
  "osmosis",
  "secret",
  "injective",
  "neutron",
] as const;

export const supported_networks = [
  "osmo-test-4",
  "osmo-test-5",
  "osmosis-1",
  "pulsar-2",
  "injective-888",
  "injective-1",
  "neutron-1",
  "pion-1",
] as const;
export const config: ChainConfig = {
  injective: injective_config,
  secret: secret_config,
  osmosis: osmosis_config,
  neutron: neutron_config,
};
