import Vue from 'vue'
import Vuex from 'vuex'
import node from './node'
import translations from './translations'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    node,
    translations,
  },
  plugins: [
    createPersistedState({
      storage: window.localStorage,
      key: 'dai-symbol-tools',
      paths: [
        'node',
        'translations'
      ]
    })
  ]
})

export default store
