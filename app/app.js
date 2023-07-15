import Vue from 'nativescript-vue'

import Navigator from 'nativescript-vue-navigator'
import {routes} from './routes'

Vue.use(Navigator,  {routes})

new Vue({
  render: (h) => h('Navigator', { attrs : {defaultRoute : '/home', } }),

}).$start()
