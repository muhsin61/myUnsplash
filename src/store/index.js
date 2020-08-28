import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deneme: "deneme123",
    datas: [],
    newDatas: [[], [], []],
    number: 0,
    isShow: "none",
    searchText: "",
  },
  mutations: {
    add: (state) => {
      console.log(state.datas);
    },
    dataSplice: (state) => {
      console.log(state.newDatas);
      state.newDatas = [[], [], []];
      state.number = 0;
      state.datas.forEach((item) => {
        state.newDatas[state.number].push(item);
        state.number <= 1
          ? (state.number = state.number + 1)
          : (state.number = 0);
      });
      console.log("state.newDatas");
      console.log(state.newDatas);
    },
    displayChange: (state) => {
      alert(state.isShow);
    },
    findText: (state) => {
      state.newDatas = [[], [], []];
      state.number = 0;
      state.datas.forEach((item) => {
        if( ((item.text).toLowerCase()).indexOf((state.searchText).toLowerCase()) != -1 ){
          state.newDatas[state.number].push(item);
          state.number <= 1
            ? (state.number = state.number + 1)
            : (state.number = 0);
        }
      });
    },
  },
  actions: {},
  modules: {},
});
