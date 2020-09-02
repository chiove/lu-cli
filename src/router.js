import loadble from './utils/loadble';

const routes = [
  {
    path: '/a',
    exact: true,
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
    component: loadble(() => import(/* webpackChunkName: 'c' */'./pages/c')),
  },
  {
    path: '*',
    component: loadble(() => import(/* webpackChunkName: 'c' */'./pages/c')),
  },
];

export default routes;
