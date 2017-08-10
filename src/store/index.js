import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  // /////// STATE
  state: {
    shown: '',
    offerLink: '',
  },


  // /////// MUTATIONS
  mutations: {
    login(state, payload) {
      state.shown = 'login';
    },

    offer(state, payload) {
      state.shown = 'offer';
    },

    logout(state, payload) {
      state.shown = 'login'
    },

    agent(state, payload) {
      state.shown = 'agent'
    },

    setOfferLink(state, payload) {
      state.offerLink = payload
    },

  },

  // /////// ACTIONS
  actions: {
    login({commit}, payload) {
      commit('login', payload)
    },
    offer({commit}, payload) {
      commit('offer', payload)
    },
    logout({commit}, payload) {
      commit('logout', payload)
    },
    agent({commit}, payload) {
      commit('agent', payload)
    },
    offerLink({commit}, payload) {
      commit('setOfferLink', payload)
    },
  },

  strict: true
})

