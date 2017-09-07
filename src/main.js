// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import 'bootstrap/dist/css/bootstrap.css'//导入
//使用VueResource 使用后每个实例都有$http 属性
import VueResource from 'vue-resource';
/* eslint-disable no-new */
Vue.use(VueResource)
new Vue({
   el: '#app',
   router,
    ...App
})
