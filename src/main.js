import Vue from 'vue'
import App from './App.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppBody from '@/components/AppBody.vue'
import AppFooter from '@/components/AppFooter.vue'

Vue.component('AppHeader', AppHeader)
Vue.component('AppBody', AppBody)
Vue.component('AppFooter', AppFooter)


Vue.config.productionTip = false

import VS2 from 'vue-script2'

Vue.use(VS2)

new Vue({
  render: h => h(App),
}).$mount('#app')
