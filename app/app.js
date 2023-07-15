import Vue from 'nativescript-vue'
import router from './router';

//Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

//import Home from './components/Home'

// new Vue({
//   render: (h) => h('frame', [h(Home)]),
// }).$start()

new Vue({
  router,
  template: `
    <Frame>
      <router-view></router-view>
    </Frame>
  `
}).$start();
