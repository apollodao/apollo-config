import { Contract } from "../../../types";

export const contracts: Contract[] = [
  {
    label: "ASTRO/axlUSDC Unlocked LP Vault",
    description: "This vault takes in ASTRO/axlUSDC Astroport LP tokens and autocompounds any rewards back into the LP position. There is no lockup period for this vault and funds can be withdrawn at any time.",
    address:
      "neutron135nkp0fth0vtertv7ngvkkgc4cwamp2tpnmjdlppat0047f9wjmqxeu9p8",
    admin: "neutron16u56nw6rhdt5wc63ammgdn565q6t825mpunm35",
    code_id: 451,
  },
  {
    label: "wstETH/axlWETH 7d Locked LP Vault",
    description: "This vault takes in wstETH/axlWETH Astroport PCL LP tokens and autocompounds any rewards back into the LP position. Funds are locked for 7 days after withdrawal.",
    address:
      "neutron1yvhe4f0q3swtf37pkf9kku59l52nevr3trxs62vah004a08pkl8qlaccc7",
    admin: "neutron16u56nw6rhdt5wc63ammgdn565q6t825mpunm35",
    code_id: 451,
  }
];
