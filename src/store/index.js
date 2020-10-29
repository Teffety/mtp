import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import auth from './auth'
import map from './map'

export default new Vuex.Store({
  modules: {
    auth,
    map,
  }
})
