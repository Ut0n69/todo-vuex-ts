import { Module } from "vuex";
import { RootState } from "@/store";
import { ItemState, initialState } from "./state";
import { mutations } from "./mutations";

export * from "./state";

export const store: Module<ItemState, RootState> = {
  state: initialState,
  mutations,
};
