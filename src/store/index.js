import { createStore } from "vuex";
// Below, you will import the modules you created in the store folder.

import appState from "./modules/appState";
import quotes from "./modules/quotes";
import posts from "./modules/posts";
import postCategories from "./modules/postCategories";

const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    appState,
    quotes,
    posts,
    postCategories,
  },
});

export default store;
