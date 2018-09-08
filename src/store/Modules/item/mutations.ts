import { MutationTree } from "vuex";
import { ItemState } from "./state";
import { Types, AddItem } from "./types";

export const mutations: MutationTree<ItemState> = {
  [Types.ADD_ITEM]: (state, action: AddItem) => {
    state.data.list.push(action.payload);
  },
};
