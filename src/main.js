import Vue from 'vue'
import App from './App.vue'

import VS2 from 'vue-script2'
Vue.use(VS2)

import Lightbox from 'vue-easy-lightbox'
Vue.use(Lightbox)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
