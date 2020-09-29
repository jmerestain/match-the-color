import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    highScore: 0,
    userId: '',
    rank: 55,
  },
  mutations: {
    setScore(state, score) {
      state.highScore = score;
    },
    setUid(state, uid) {
      state.userId = uid;
    },
    setRank(state, rank) {
      state.rank = rank;
    },
  },
  actions: {
  },
  modules: {
  },
});
