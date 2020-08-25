export default async(routes) => {
    const staticRoutes = [];
    routes.forEach(async (item) => {
        staticRoutes.push({
            ...item,
            ...{
                component: (await item.component().props.load()).default
            }
        });
    });

    return staticRoutes
}