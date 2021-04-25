//types
import { SET_USERS } from './mutations-types'

const users = {
  state: {
      users: []
  },
  getters: {
      getUsersState(state) {
          return state.users
      }
  },
  mutations: {
    [SET_USERS](state, payload) {
        state.users = payload
    }
  },
  actions: {
      async getUsers({commit}) {
          const json = await fetch(`https://jsonplaceholder.typicode.com/users`)

          const res = await json.json()

          commit(SET_USERS, res)
      }
  },
};

export default users;
