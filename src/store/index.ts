import Vue from "vue";
import Vuex from "vuex";

import * as item from "@/store/Modules/item";

Vue.use(Vuex);

export interface RootState {
  item: item.ItemState;
}

export default new Vuex.Store<RootState>({
  modules: {
    item: item.store,
  },
});
