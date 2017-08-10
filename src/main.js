import './store/firebase';
import VueFire from 'vuefire';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

Vue.config.productionTip = false

Vue.use(VueFire);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})


// import mainapp from './Main.vue';
// import store from './store';

// window.mainApp = new Vue({
//   el: '#mainApp',
//   store,
//   components: { mainapp },
// });


