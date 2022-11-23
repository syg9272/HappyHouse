const mapStore = {
  namespaced: true,
  state: {
    apt: null,
    isSide: false,
    year: null,
    avgAmount: null,
    schoolList: null,
    myReview: null,
    reviewList: null,
    starAvg: null,
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
    SET_SCHOOL_LIST: function (state, school) {
      state.schoolList = school;
    },
    SET_MY_REVIEW: function (state, myreview) {
      state.myReview = myreview;
    },
    SET_REVIEW_LIST: function (state, reviewlist) {
      state.reviewList = reviewlist;
    },
    SET_STAR_AVG: function (state, avg) {
      state.starAvg = avg;
    },
  },
  actions: {},
};

export default mapStore;
