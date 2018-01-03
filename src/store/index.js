import Vuex from 'vuex'
import Vue from 'vue'
import base from './modules/base'
import docState from './modules/docState'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base,
    docState: docState
  }
})