import Vue from 'vue'
import Router from 'vue-router'
import Add from '@/components/Add'
import List from '@/components/List'
import Detail from '@/components/Detail'


// @ 代表src目录
Vue.use(Router)

export default new Router({
  routes: [// 配置路由
      {
          path: '*',
          redirect: '/list'
      },
      {
          path:'/add', // 访问路径
          component:Add,//组件名称
      },
      {
          path:'/list',
          component:List,
      },
      {
          path:'/detail/:id', // this.$route.params.id
          component:Detail,
          name:'detail'
      }

  ]
})
