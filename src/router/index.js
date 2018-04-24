import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import App2 from '../App2'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/',
        component: App2,
        children: [{
          path: '',
          component: r => require.ensure([], () => r(require('../page/home')), 'home')
        }, {
          path: '/item',
          component: r => require.ensure([], () => r(require('../page/item')), 'item')
        }, {
          path: '/score',
          component: r => require.ensure([], () => r(require('../page/score')), 'score')
        }]
      }
    ]
  })
