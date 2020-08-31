export default async(routes) => {
    let len = routes.length,i = 0;
    const staticRoutes = [];
    for (; i < len; i++) {
        let item = routes[i];
        staticRoutes.push({
            ...item,
            ...{
                component: (await item.component().props.load()).default
            }
        });
    }
    return staticRoutes
}