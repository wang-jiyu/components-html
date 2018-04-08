import Vue from 'vue'
import Router, { RouterOptions } from 'vue-router'
import { routes } from './routes'

const opts: RouterOptions = {
  mode: 'history',
  routes,
}

Vue.use(Router)

export default new Router(opts)