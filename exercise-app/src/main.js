import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery'
import router from './router'
import VeeValidate from 'vee-validate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

global.jQuery = jQuery;
let Bootstrap = require('bootstrap');



Vue.config.productionTip = false
Vue.use(VeeValidate);
Vue.use(Bootstrap);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
