import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/login', component: '@/pages/login/index' },
        {
          path: '/',
          component: '@/layouts/SecurityLayout',
          routes: [
            { path: '/cart', component: '@/pages/cart/index' },
            { path: '/orderlist', component: '@/pages/orderlist/index' },
            { path: '/user', component: '@/pages/user/index' },
          ],
        },
      ],
    },
  ],
  fastRefresh: {},
});
