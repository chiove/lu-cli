
const routes = [
  {
    path: '/a',
    exact: true,
    ssr:true,
    component: () => __SERVER__ ? require('./pages/a').default : import(/* webpackChunkName: 'a' */'./pages/a')
  },
  {
    path: '/b',
    ssr:true,
    component: () => __SERVER__ ? require('./pages/b').default : import(/* webpackChunkName: 'b' */'./pages/b')
  },
  {
    path: '/c',
    component: () => __SERVER__ ? require('./pages/c').default : import(/* webpackChunkName: 'c' */'./pages/c')
  },
];

export default routes;