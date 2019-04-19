// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
import axios from 'axios'
import Vueaxios from 'vue-axios'
Vue.use(Vueaxios, axios)
import Vuex from 'vuex';
Vue.use(Vuex);
Vue.config.productionTip = false
const store = new Vuex.Store({
	//Vuex的配置
	state: {
		count: 0,//购物车件数状态
		count1:0,//登录与注册状态
		count2:0//状态
	},
	mutations: {
		increment(state) {
			state.count++;
		},
		decrease(state) {
			state.count--;
		},
		tozero(state){
			state.count=0;
		},
		increment1(state) {
			state.count1++;
		},
		decrease1(state) {
			state.count1--;
		},
	}
});
/* eslint-disable no-new */
new Vue({
  el: '#app', 
  router,
  store,
  components: { App },
  template: '<App/>'
})
