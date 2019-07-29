import Vue from 'vue'
import Vuex from 'vuex'

import score from './score'
Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      score
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  if (process.env.DEV && module.hot) {
    module.hot.accept(['./score'], () => {
      const newScore = require('./score').default
      Store.hotUpdate({ modules: { score: newScore } })
    })
  }

  return Store
}
