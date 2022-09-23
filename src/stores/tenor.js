import { defineStore } from "pinia";

export const useTenorState = defineStore("tenor", {
  state: () => ({
    items: [],
    searchFor: "",
  }),

  getters: {
    getSearchFor(state) {
      return state.searchFor;
    },
  },

  actions: {
    set(items) {
      this.items = items;
    },

    clear() {
      this.items = [];
    },

    setSearchFor(val) {
      this.searchFor = val;
    },

    clearSearchFor(val) {
      this.searchFor = "";
    },
  },
});
