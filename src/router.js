import loadble from './utils/loadble';

const routes = [
  {
    path: ['/', '/home'],
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
    ssr: true,
    component: loadble(() => import(/* webpackChunkName: 'c' */'./pages/c')),
  },
  {
    path: '*',
    component: loadble(() => import(/* webpackChunkName: 'not-found' */'./pages/not-found')),
  },
];

export default routes;
