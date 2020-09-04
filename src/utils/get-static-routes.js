export default async (routes) => {
  const len = routes.length; let
    i = 0;
  const staticRoutes = [];
  for (; i < len; i++) {
    const item = routes[i];
    staticRoutes.push({
      ...item,
      ...{
        component: (await item.component().props.load()).default,
      },
    });
  }
  return staticRoutes;
};
