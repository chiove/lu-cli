import lazy from './utils/lazy';

const routes = [
  {
    path: '/home',
    exact: true,
    component: lazy(() => import(/* webpackChunkName: 'index' */'./pages/index')),
    routes: [
      {
        path: ['/home', '/home/a'],
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'a' */'./pages/a')),
      },
      {
        path: '/home/login1',
        exact: true,
        component: lazy(() => import(/* webpackChunkName: 'login' */'./pages/login')),
      },
    ],
  },
  {
    path: '/login',
    exact: true,
    ssr: true,
    component: lazy(() => import(/* webpackChunkName: 'login' */'./pages/login')),
  },
  {
    path: '/a',
    ssr: true,
    component: lazy(() => import(/* webpackChunkName: 'a' */'./pages/a')),
  },
  {
    path: '/b',
    ssr: true,
    component: lazy(() => import(/* webpackChunkName: 'b' */'./pages/b')),
  },
  {
    path: '/c',
    ssr: true,
    component: lazy(() => import(/* webpackChunkName: 'c' */'./pages/c')),
  },
  {
    path: '/test',
    ssr: true,
    component: lazy(() => import(/* webpackChunkName: 'test' */'./pages/test')),
  },
  {
    path: '*',
    component: lazy(() => import(/* webpackChunkName: 'not-found' */'./pages/not-found')),
  },
];

export default routes;
