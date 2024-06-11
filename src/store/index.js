import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    renderData: []
  },

  mutations: {
    setData(state, data) {
      state.data = data;
    },
    setRenderData(state, data) {
      state.renderData = data;
    }
  },

  actions: {
    getData(context) {
      axios.get(import.meta.env.VITE_DB_URL).then((response) => {
        context.commit("setData", response.data);
        context.commit("setRenderData", response.data);
      });
    },
  },

  modules: {}
});

