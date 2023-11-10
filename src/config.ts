import { ChainConfig } from "./types";
import { osmosis_config } from "./networks/osmosis/config";
import { secret_config } from "./networks/secret/config";
import { injective_config } from "./networks/injective/config";
import { neutron_config } from "./networks/neutron/config";
import { coingecko_config } from "./networks/coingecko/config";

export const supported_chains = [
  "coingecko", // not a chain, used for holding token configs for coingecko
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
  coingecko: coingecko_config,
  injective: injective_config,
  secret: secret_config,
  osmosis: osmosis_config,
  neutron: neutron_config,
};
