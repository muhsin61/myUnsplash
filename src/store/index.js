import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deneme: "deneme123",
    datas: []
  },
  mutations: {
    add: (state) => {
      console.log(state.datas)
    }
  },
  actions: {
  },
  modules: {
  }
})
