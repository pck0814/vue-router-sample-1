import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import ProductList from './views/ProductList'
import Product from './views/Product'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/product', // ID가 붙어 있지 않으면 리스트 출력하기
      component: ProductList
    },
    {
      path: '/product/:id', // ':id'가 매개 변수에 들어 있는 경우
      component: Product,
      // 함수로 지정하면 첫 번째 매개변수로 현재 라우트 객체를 사용할 수 있음
      props: rt => ({
        id: Number(rt.params.id)
      })
    }
  ]
})
export default router