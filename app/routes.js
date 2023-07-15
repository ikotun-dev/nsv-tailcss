
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue'


export const routes = {
  '/home' : {
    component: Home,
  },
  '/login' : {
    component: Login
  },
  '/signup' : {
    component : Signup
  }
}
