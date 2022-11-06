import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    eiType: 0,
    snType: 0,
    tfType: 0,
    jpType: 0,
  },
  getters: {},
  mutations: {
    setValue(value, type) {
      switch (type) {
        case "EI":
          this.state.eiType += value;
          break;
        case "SN":
          this.state.snType += value;
          break;
        case "TF":
          this.state.tfType += value;
          break;
        case "JP":
          this.state.jpType += value;
          break;
        default:
          break;
      }
    },
  },
  actions: {},
});
