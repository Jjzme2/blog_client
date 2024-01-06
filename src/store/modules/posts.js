import APIService from "../apiService.js";

const posts = {
  namespaced: true,
  state: {
    link: "/posts",
    allItems: [],
  },
  getters: {
    getAll: (state) => state.allItems,
    getById: (state) => (id) => {
      var item = {};

      if (Array.isArray(state.allItems)) {
        item = state.allItems.find((item) => {
          if (item.id == id) {
            return item;
          }
        });
        if (!item) {
          // ID is undefinied, so we try to return the empty object
          if (state.emptyObject == {}) {
            throw new Error(
              "No post with this id, and `Empty Post` has not been initialized."
            );
          }
          return state.emptyObject;
        }
      }
      return item;
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
        APIService.handleError(commit, error);
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
    async saveObject({ commit, state }, payload) {
      commit("appState/setLoading", true, { root: true });
      commit("appState/setError", null, { root: true });

      try {
        const response = await APIService.makeRequest.post(state.link, payload);
        commit("appState/setLoading", false, { root: true });
        return response;
      } catch (error) {
        APIService.handleError(commit, error);
      }
    },
  },
  modules: {},
};

export default posts;
