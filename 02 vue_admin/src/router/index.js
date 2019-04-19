import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import MyHome from '@/components/MyHome'
import ShowGoods from '@/components/ShowGoods'
import AddGoods from '@/components/AddGoods'
export default new Router({
  routes: [
    {
      path:'/',
      name:MyHome,
      component:MyHome,
      children:[
        {
          path:'/show',
          name:ShowGoods,
          component:ShowGoods
        },
        {
          path:'/add',
          name:AddGoods,
          component:AddGoods
        }
      ]
    },
    {
      path:'/home',
      name:MyHome,
      component:MyHome,
      children:[
        {
          path:'/show',
          name:ShowGoods,
          component:ShowGoods
        },
        {
          path:'/add',
          name:AddGoods,
          component:AddGoods
        }
      ]
    },
  ]
})
