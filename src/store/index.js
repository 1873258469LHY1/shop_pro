import Vue from "vue";
import Vuex from "vuex";

import modules from "./modules";
import res from "../api/rankList/rankList.js";

Vue.use(Vuex);

// 储存状态数据容器
const state = {
  url: "",
};

// 储存只读计算属性数据容器
const getters = {};

// 包含n个用来间接修改state的函数对象
const actions = {
  async getMusicUrl({ commit }, rid) {
    const songUrl = await res.reqSongUrl(rid);
    commit("GET_MUSICURL", songUrl);
  },
};

// 包含n个用来直接修改state的函数对象
const mutations = {
  GET_MUSICURL(state, songUrl) {
    state.url = songUrl.url;
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules,
});
