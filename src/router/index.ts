import { getToken } from '@/utils/token';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: 'Home Page',
      keepAlive: true,
      requireAuth: false,
    },
    component: () => import('@/pages/Index.vue'),
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: {
      title: 'Detail Page',
      keepAlive: true,
      requireAuth: true,
    },
    component: () => import('@/pages/Detail.vue'),
  },
  {
    path: '/403',
    name: '403',
    component: () => import('../pages/system-view/no-permission.vue'),
  },
  {
    path: '/500',
    name: '500',
    component: () => import('../pages/system-view/service-error.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'page404',
    component: () => import('../pages/system-view/not-found.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const token = getToken();
  if (!token && to.name !== 'Index') {
    return { name: 'Index' };
  }
});

export { router };
