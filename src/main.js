import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import { getAllMessages } from './store/actions';

Vue.config.debug = true;

Vue.filter('time', timestamp => {
  return new Date(timestamp).toLocaleTimeString()
});

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  // router,
  template: '<App/>',
  components: { App },
  store,
});

getAllMessages(store);