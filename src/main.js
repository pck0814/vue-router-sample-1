import Vue from 'vue'
import App from './App.vue'

import router from './router.js'

new Vue({
  el: '#app',
  router, // 애플리케이션 등록하기
  render: h => h(App)
})
