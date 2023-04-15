import { Node } from "../../../types";

export const nodes: Node[] = [
  {
    name: "osmosis",
    lcd: "https://lcd.osmosis.zone",
    rpc: "https://rpc.osmosis.zone:443",
    archive: false,
  },
  {
    name: "allthatnode",
    lcd: "https://osmosis-mainnet-rpc.allthatnode.com:1317",
    rpc: "https://osmosis-mainnet-rpc.allthatnode.com:26657",
    archive: false,
  },
  {
    name: "polkachu",
    lcd: "https://osmosis-api.polkachu.com",
    rpc: "https://osmosis-rpc.polkachu.com:443",
    archive: false,
  },
  {
    name: "ecostake",
    lcd: "https://rest-osmosis.ecostake.com",
    rpc: "https://rpc-osmosis.ecostake.com:443",
    archive: false,
  },
  {
    name: "chainlayer",
    lcd: "https://osmosis-lcd.quickapi.com:443",
    rpc: "https://osmosis-rpc.quickapi.com:443",
    archive: false,
  },
  {
    name: "notional",
    lcd: "https://api-osmosis-ia.cosmosia.notional.ventures:443",
    rpc: "https://rpc-osmosis-ia.cosmosia.notional.ventures:443",
    archive: true,
  },
];
