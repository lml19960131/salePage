import Vue from 'vue'
import Layout from './components/layout.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index.vue'
import detail from './pages/detail.vue'
import analysis from './pages/detail/analysis.vue'
import count from './pages/detail/count.vue'
import  forecast from './pages/detail/forecast.vue'
import publish from './pages/detail/publish.vue'

Vue.use(VueRouter);
Vue.use(VueResource);

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: detail,
      redirect: '/detail/analysis',
      children:[
        {
          path: 'count',
          component: count
        },
        {
          path: 'forecast',
          component: forecast
        },
        {
          path: 'analysis',
          component: analysis
        },
        {
          path: 'publish',
          component: publish
        }
      ]
    }
  ]
});

new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
});
