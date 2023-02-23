import { Token } from "../../types";

export type supported_data_sources = { name: ""; params: {} };

export const tokens: (Omit<Token, "sources"> & {
  sources: supported_data_sources[];
})[] = [];
