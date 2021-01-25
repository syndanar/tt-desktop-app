import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/desktop',
    name: 'Desktop',
    component: () => import(/* webpackChunkName: "desktop" */ '../views/Desktop.vue'),
  },
  {
    path: '/subscriber',
    name: 'Subscriber',
    component: () => import(/* webpackChunkName: "subscriber" */ '../views/Subscriber.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
