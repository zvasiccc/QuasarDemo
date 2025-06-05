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
  {
    path: '/qbtn',
    component: ()=>import('pages/QBtnDemo.vue')
  },
  {
    path: '/qinput',
    component: ()=>import('pages/QInputDemo.vue')
  },
  {
    path: '/qdialog',
    component: ()=>import('pages/QDialogDemo.vue')
  },
  {
    path: '/stilizovanje',
    component: ()=>import('pages/QuasarStilizovanje.vue')
  },

];

export default routes;
