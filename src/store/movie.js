//constants
import { API, API_KEY } from "../constants/API";
//types
import { SET_MOVIE, SET_PAGE_MOVIE } from './mutations-types'

const movie = {
  state: {
    movie: [],
    page: 1
  },

  getters: {
      getMovies(state) {
          return state.movie
      },
  },

  mutations: {
      [SET_MOVIE](state, payload) {
          state.movie = payload
      },
      [SET_PAGE_MOVIE](state) {
          state.page = ++state.page
      }
  },

  actions: {
    async getMovie({ commit, state }) {

      const json = await fetch(
        `${API}/3/movie/popular?${API_KEY}&language=ru&page=${state.page}`
      );

      const res = await json.json();

      commit(SET_MOVIE, res.results)
      commit(SET_PAGE_MOVIE)


      return json.status
    },

  },
};

export default movie;
