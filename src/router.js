import Vue from 'vue'
import Router from 'vue-router'
import Index from "./components/Index.vue";
import Harvest from './components/Harvest.vue';
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/harvest',
      name: 'narvest',
      component: Harvest
    }
  ]
})
