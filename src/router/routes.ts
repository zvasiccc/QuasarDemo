import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/demonstracija',
    component: () => import('pages/QuasarDemonstracija.vue'),
  },
  {
    path: '/reaktivnost',
    component: () => import('pages/QuasarReaktivnost.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
