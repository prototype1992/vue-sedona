import Vue from 'vue';
import Router from 'vue-router';

import Home from './pages/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('./pages/Info'),
    },
    {
      path: '/photo-video',
      name: 'photo-video',
      component: () => import('./pages/PhotoVideo'),
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('./pages/Map'),
    },
    {
      path: '/hotels',
      name: 'hotels',
      component: () => import('./pages/Hotels'),
    },
  ],
  mode: 'history',
});
