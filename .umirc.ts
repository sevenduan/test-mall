import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/cart', component: '@/pages/cart/index' },
    { path: '/orderlist', component: '@/pages/orderlist/index' },
    { path: '/user', component: '@/pages/user/index' },
    { path: '/login', component: '@/pages/login/index' },
  ],
  fastRefresh: {},
});
