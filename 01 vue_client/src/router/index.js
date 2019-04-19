import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import MyHome from '@/components/MyHome'
import MyCake from '@/components/MyCake'
import MyBread from '@/components/MyBread'
import MyGift from '@/components/MyGift'
import MyPageOne from '@/components/MyPageOne'
import MyCakeShow from '@/components/MyCakeShow'
import MyShopping from '@/components/MyShopping'
import Contentcaigou from '@/components/Contentcaigou'
import Client from '@/components/Client'
import Weal from '@/components/Weal'
import Cooperate from '@/components/Cooperate'
import Food from '@/components/Food'
import Myaha from '@/components/Myaha'
import Login from '@/components/Login'
import Back from '@/components/Back'
import Lijuan from '@/components/Lijuan'
import Kajuan from '@/components/Kajuan'
import MyOrder from '@/components/MyOrder'
export default new Router({
  routes: [
    {
      path:'/login',
      name:'Login',
      component:Login,
    },
    {
      path:'/back',
      name:'Back',
      component:Back
    },
      {
        path:'/',
        name:'MyPageOne',
        component:MyPageOne,
        children:[{
          path:'/',
          name:'MyHome',
          component:MyHome
        },
        {
          path:'/home',
          name:'MyHome',
          component:MyHome
        },
        {
          path:'/cake',
          name:'MyCake',
          component:MyCake
        },
        {
          path:'/bread',
          name:'MyBread',
          component:MyBread
        },
        {
          path:'/gift',
          name:'MyGift',
          component:MyGift
        },
        {
          path:'/cakeshow',
          name:'MyCakeShow',
          component:MyCakeShow
        },
        {
          path:'/shopping',
          name:'MyShopping',
          component:MyShopping
        },
        {
          path:'/contentcaigou',
          name:'Contentcaigou',
          component:Contentcaigou
        },
        {
          path:'/client',
          name:'Client',
          component:Client,
       
        },
        {
          path:'/weal',
          name:'Weal',
          component:Weal,
       
        },
        {
          path:'/cooperate',
          name:'Cooperate',
          component:Cooperate,
        },
        {
          path:'/food',
          name:'Food',
          component:Food,
        },
        {
          path:'/aha',
          name:'Myaha',
          component:Myaha,
        },
        {
          path:'/myorder',
          name:'MyOrder',
          component:MyOrder
        },
        {
          path:'/lijuan',
          name:'Lijuan',
          component:Lijuan
        },
        {
          path:'/kajuan',
          name:'Kajuan',
          component:Kajuan
        },
      ]
      }
  ]
})
