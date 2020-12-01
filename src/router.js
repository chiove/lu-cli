import lazy from './utils/lazy';

const routes = [
  {
    path: '/home',
    ssr: true,
    component: lazy(() => import(/* webpackChunkName: 'index' */'./pages/index')),
    routes: [
      {
        path: '/home/login1',
        component: lazy(() => import(/* webpackChunkName: 'login' */'./pages/login')),
      },
    ],
  },
  {
    path: '/login',
    exact: true,
    ssr: true,
    auth: false,
    component: lazy(() => import(/* webpackChunkName: 'login' */'./pages/login')),
  },
  {
    path: '/demo',
    exact: true,
    ssr: true,
    auth: false,
    component: lazy(() => import(/* webpackChunkName: 'demo' */'./pages/demo')),
  },
  {
    path: '*',
    component: lazy(() => import(/* webpackChunkName: 'not-found' */'./pages/not-found')),
  },
];

export default routes;
