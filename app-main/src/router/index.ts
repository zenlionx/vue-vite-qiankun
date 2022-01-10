import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import _ from 'lodash'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main-home',
    component: () => import('../views/home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//主应用使用的嵌套路由
router.beforeEach((to, from, next) => {
  // 手动修改history的state
  if (!history.state.current) {
    Object.assign(history.state, {
      current: from.fullPath
    })
  }

  next()
})

export default router
