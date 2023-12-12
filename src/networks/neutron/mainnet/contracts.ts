import { Contract } from "../../../types";

export const contracts: Contract[] = [
  {
    label: "ASTRO/axlUSDC Unlocked LP Vault",
    description: "This vault takes in ASTRO/axlUSDC Astroport LP tokens and autocompounds any rewards back into the LP position. There is no lockup period for this vault and funds can be withdrawn at any time.",
    address:
      "neutron135nkp0fth0vtertv7ngvkkgc4cwamp2tpnmjdlppat0047f9wjmqxeu9p8",
    admin: "neutron1qnpwxhrgd8mmsfgql7df6kusgjr3wvm4trl05xu260seelwh845qtqqq9t",
    code_id: 451,
  },
  {
    label: "wstETH/axlWETH 7d Locked LP Vault",
    description: "This vault takes in wstETH/axlWETH Astroport PCL LP tokens and autocompounds any rewards back into the LP position. Funds are locked for 7 days after withdrawal.",
    address:
      "neutron1yvhe4f0q3swtf37pkf9kku59l52nevr3trxs62vah004a08pkl8qlaccc7",
    admin: "neutron1qnpwxhrgd8mmsfgql7df6kusgjr3wvm4trl05xu260seelwh845qtqqq9t",
    code_id: 451,
  },
  {
    label: "NTRN/wstETH 7d Locked LP Vault",
    description: "This vault takes in NTRN/wstETH Astroport PCL LP tokens and autocompounds any rewards back into the LP position. Funds are locked for 7 days after withdrawal.",
    address:
      "neutron17vedy2clhctw0654k93m375ud7h5jsy8nj9gnlkjnyd4mcfnfrdql226al",
    admin: "neutron1qnpwxhrgd8mmsfgql7df6kusgjr3wvm4trl05xu260seelwh845qtqqq9t",
    code_id: 451,
  }
];
