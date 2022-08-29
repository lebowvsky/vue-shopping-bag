import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    productsInBag: [],
  },
  getters: {},
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
    addToBag(state, product) {
      state.productsInBag = [...state.productsInBag, product];
      console.log(state.productsInBag);
    },
    removeFromBag(state, productId) {
      if (confirm("Are you sure you want to remove the item from bag ?")) {
        state.productsInBag = state.productsInBag.filter((elt) => elt.id != productId);
      }
    },
  },
  actions: {
    async loadProducts({ commit }) {
      const result = await axios.get("https://fakestoreapi.com/products");
      commit("loadProducts", result.data);
    },

    addToBag({ commit }, product) {
      commit("addToBag", product);
    },

    removeFromBag({ commit }, productId) {
      commit("removeFromBag", productId);
    },
  },
  modules: {},
});
