export default async (routes) => {
  const len = routes.length;
  let i = 0;
  const staticRoutes = [];
  for (; i < len; i++) {
    const item = routes[i];
    staticRoutes.push({
      ...item,
      ...{
        // eslint-disable-next-line no-await-in-loop
        component: (await item.component().props.load()).default,
      },
    });
  }
  return staticRoutes;
};
