import { Contract } from "../../../types";

export const contracts: Contract[] = [
  // Currently no rewards for AXL/NTRN
  {
    label: "AXL/NTRN Unlocked LP Vault",
    description: "This vault takes in AXL/NTRN Astroport LP tokens and autocompounds any rewards back into the LP position. There is no lockup period for this vault and funds can be withdrawn at any time.",
    address:
      "neutron12pdx3z009fx92kcsr8fhvnkh92w98n5f5xaecz3sn0kzxthz20js0llxjw",
    admin: "neutron16u56nw6rhdt5wc63ammgdn565q6t825mpunm35",
    code_id: 266,
  },
  {
    label: "wstETH/axlWETH Unlocked LP Vault",
    description: "This vault takes in wstETH/axlWETH Astroport LP tokens and autocompounds any rewards back into the LP position. There is no lockup period for this vault and funds can be withdrawn at any time.",
    address:
      "neutron1jyk9sulr5wfyy0zp95cujupvennnc9xap79wkp6pwp7k2qmsmz2qw0wkrg",
    admin: "neutron16u56nw6rhdt5wc63ammgdn565q6t825mpunm35",
    code_id: 278,
  },
];
