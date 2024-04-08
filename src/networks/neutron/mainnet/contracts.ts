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
  },
  {
    label: "stTIA/TIA Capped LP Vault",
    description: "This Vault takes in stTIA/TIA Astroport PCL LP tokens and autocompounds any rewards back into the LP position. Deposits for will close after 14 days on 28th of February. You can withdraw from the Vault at any time for a 1% fee, but you will forfeit any STRD rewards you have accumulated. These will be distributed to remaining Vault users when they are claimed (beginning in August 2024).\n For more info, see the article: https://articles.apollo.farm/apollos-sttia-tia-vault-time-gated-entry/",
    address:
      "neutron1qzf6t478xuutq0ahkm07pl2y2tctreccrlafkrl38k4cafk3rgdq3lfky5",
    admin: "neutron1qnpwxhrgd8mmsfgql7df6kusgjr3wvm4trl05xu260seelwh845qtqqq9t",
    code_id: 709,
  },
  {
    label: "(stTIA/TIA)VT/APOLLO Unlocked LP Vault",
    description: "This Vault takes in (stTIA/TIA)VT/APOLLO Astroport LP tokens and autocompoiunds any rewards back into the LP position. There is no lockup period for this vault and funds can be withdrawn at any time. There is a 1% withdrawal fee which goes back to the remaining vault users. This vault also earns yield from the buy tax on the (stTIA/TIA)VT/APOLLO pool",
    address: 'neutron19h6eltj6dem7a6jp6r2plwl95fgcryxeylvnm8ezlglezxzzkzrsnkj006',
    admin: "neutron1qnpwxhrgd8mmsfgql7df6kusgjr3wvm4trl05xu260seelwh845qtqqq9t",
    code_id: 714
  },
  {
    label: "stDYM/DYM Capped LP Vault",
    description: "This Vault takes in stDYM/DYM Astroport PCL LP tokens and autocompounds any rewards back into the LP position. Deposits for will close on 01/05/2024. You can withdraw from the Vault at any time for a 1% fee, but you will forfeit any STRD rewards you have accumulated. These will be distributed to remaining Vault users when they are claimed (beginning in August 2024).",
    address:
      "neutron1epwhl0cpmh3kdapl6pvzexdff7c5u5crcempvu6e9h9k88f32tpss46zhh",
    admin: "neutron1qnpwxhrgd8mmsfgql7df6kusgjr3wvm4trl05xu260seelwh845qtqqq9t",
    code_id: 766,
  },
];
