import APIService from "../apiService.js";

const quotes = {
  namespaced: true,
  state: {
    link: "/quotes",
    allItems: [],
  },
  getters: {
    getAll: (state) => state.allItems,
    getRandomQuote: (state) => {
      return state.allItems[Math.floor(Math.random() * state.allItems.length)];
    },
    getEmpty: (state) => state.emptyObject,
  },
  mutations: {
    setAll: (state, data) => {
      state.allItems = data;
    },
    setEmpty: (state, data) => {
      state.emptyObject = data;
    },
  },
  actions: {
    async fetchAll({ commit, state }) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });
      try {
        const response = await APIService.makeRequest.get(state.link);
        commit("setAll", response);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        APIService.handleApiError(commit, error);
      }
    },
    async getEmpty({ commit, state }) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });

      try {
        const response = await APIService.makeRequest.get(
          state.link + "/empty"
        );
        commit("setEmpty", response);
        commit("appState/setLoading", false, { root: true });
      } catch (error) {
        APIService.handleError(commit, error);
      }
    },
  },
};

export default quotes;
