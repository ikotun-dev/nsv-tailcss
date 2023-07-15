import Vue from 'nativescript-vue';
import Navigator from 'nativescript-vue-navigator';

Vue.use(Navigator, {
  routes: [
    { path: '/', component: Home },
    { path: '/signup-login', component: SignupLogin },
    // Add more routes as needed
  ],
});

new Vue({
  render: (h) => h('Navigator'),
}).$start();
