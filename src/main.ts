import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/lbzui/index.less'
import { Divider, List, ListItem, State } from '@lbzui/vue'

Vue.prototype.$lbzui = {
  dense: false,
  ripple: true
}

Vue.use(Divider)
Vue.use(List)
Vue.use(ListItem)
Vue.use(State)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
