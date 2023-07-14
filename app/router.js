import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./components/Home.vue') // Modify with your Home component path
    },
    {
      path: '/signup-login',
      component: () => import('./components/SignupLogin.vue') // Modify with your SignupLogin component path
    }
  ]
});

export default router;
