const mapStore = {
  namespaced: true,
  state: {
    apt: null,
    isSide: false,
    year: null,
    avgAmount: null,
  },
  mutations: {
    SET_APT: function (state, info) {
      state.apt = info;
    },
    SET_IS_SIDE: function (state) {
      state.isSide = !state.isSide;
    },
    SET_YEAR: function (state, year) {
      state.year = year;
    },
    SET_AVG_AMOUNT: function (state, avgAmount) {
      state.avgAmount = avgAmount;
    },
  },
  actions: {},
};

export default mapStore;
