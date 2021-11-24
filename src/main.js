import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('./plugins/vue-axios')

Vue.config.productionTip = false
Vue.use(IconsPlugin)

Vue.use(BootstrapVue)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
