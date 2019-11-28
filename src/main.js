import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '../static/css/reset.css'
import '../static/css/font/iconfont.css'
import '../static/css/swiper.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
