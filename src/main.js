import Vue from 'vue';
import VueCollision from 'vue-collision';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/styles.css';

Vue.config.productionTip = false;
Vue.use(VueCollision, { globalTriggers: ['resize', 'scroll'] });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
