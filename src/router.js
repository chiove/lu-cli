import loadble from './utils/loadble';

const routes = [
  {
    path: '/home',
    exact: true,
    component: loadble(() => import(/* webpackChunkName: 'index' */'./pages/index')),
    routes: [
      {
        path: ['/home', '/home/a'],
        exact: true,
        component: loadble(() => import(/* webpackChunkName: 'a' */'./pages/a')),
      },
      {
        path: '/home/login1',
        exact: true,
        component: loadble(() => import(/* webpackChunkName: 'login' */'./pages/login')),
      },
    ],
  },
  {
    path: '/login',
    exact: true,
    ssr: true,
    component: loadble(() => import(/* webpackChunkName: 'login' */'./pages/login')),
  },
  {
    path: '/a',
    ssr: true,
    component: loadble(() => import(/* webpackChunkName: 'a' */'./pages/a')),
  },
  {
    path: '/b',
    ssr: true,
    component: loadble(() => import(/* webpackChunkName: 'b' */'./pages/b')),
  },
  {
    path: '/c',
    ssr: true,
    component: loadble(() => import(/* webpackChunkName: 'c' */'./pages/c')),
  },
  {
    path: '*',
    component: loadble(() => import(/* webpackChunkName: 'not-found' */'./pages/not-found')),
  },
];

export default routes;
