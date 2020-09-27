import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    highScore: 0,
  },
  mutations: {
    setScore(state, score) {
      state.highScore = score;
    },
  },
  actions: {
  },
  modules: {
  },
});
