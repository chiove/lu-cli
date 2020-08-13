
const routes = [
  {
    path: '/a',
    exact: true,
    ssr:true,
    component: require('./pages/a').default
  },
  {
    path: '/b',
    ssr:true,
    component: require('./pages/b').default
  },
  {
    path: '/c',
    component: require('./pages/c').default
  },
];

export default routes;