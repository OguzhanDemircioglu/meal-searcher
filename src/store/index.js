import {createStore} from "vuex";
import states1 from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

const store = createStore({
  states1,
  actions,
  mutations,
  getters
})

export default store;