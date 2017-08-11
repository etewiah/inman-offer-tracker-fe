import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Offer from '../components/Offer'
import Agent from '../components/Agent'
import Login from '../components/Login'
import Buyer from '../components/Buyer'

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
      path: '/buyer',
      name: 'Buyer',
      component: Buyer
    },
    {
      path: '/offer/:id',
      name: 'Offer',
      component: Offer
    }
  ]
})
