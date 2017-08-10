import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Offer from '../components/offer'
import Agent from '../components/agent'
import Login from '../components/login'

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
