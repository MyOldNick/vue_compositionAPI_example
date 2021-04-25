//vuex
import Vuex from "vuex";
//modules
import users from './users'
import movie from './movie'

const store = new Vuex.Store({
  modules: {
      users,
      movie
  },
});

export default store;
