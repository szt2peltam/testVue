import { createRouter, createWebHistory } from 'vue-router';
import WelcomeView from '../views/WelcomeView.vue';
import OtherView from '../views/OtherView.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      
      redirect:{name:"welcome"}
    },
    {
      path: '/other',
      name: 'other',
      component : OtherView
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView,
      children:[
        {
          path:"",
          name:"empty",
          redirect:{name:'login'}
        }
        ,
        {
        path:'/login',
        name : "login",
        component : Login
      },
    
      {
        path:'/register',
        name:'register',
        component : Register
      }
    ]
    }
  ]
})

export default router
