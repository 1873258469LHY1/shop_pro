import { reqRankList } from "../../api/rankList/rankList";

export default {
  state: {
    ranklist: [],
  },
  getters: {},
  actions: {
    async getRankList({ commit }) {
      const ranklist = await reqRankList();
      commit("GET_RANKLIST", ranklist);
    },
  },
  mutations: {
    GET_RANKLIST(state, ranklist) {
      state.ranklist = ranklist;
    },
  },
};
