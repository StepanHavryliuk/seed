import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Swiper1:0,
    Swiper2: null,
  },
  mutations: {
    SaveSwiper1(state, val) {
      state.Swiper1 = val
    },
    SaveSwiper2(state, val) {
      state.Swiper2 = val
    }
  },
  actions: {
    SaveSwiper1(context, val) {
      context.commit("SaveSwiper1", val);
    },
    SaveSwiper2(context, val) {
      context.commit("SaveSwiper2", val);
    },
  },
  getters: {
    GetSwiper1(state) {
      return state.Swiper1
    }
  }
})