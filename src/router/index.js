import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Offer from '@/components/Offer'
import Agent from '@/components/Agent'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Login
    },
    {
      path: '/agent',
      name: 'Agent',
      component: Agent
    },
    {
      path: '/offer',
      name: 'Offer',
      component: Offer
    }
  ]
})
