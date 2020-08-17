import routes from 'src/router';

const getInitData = (ctx) => {
    const url = ctx.url || ctx
    let initData = undefined;
    routes.map(({ path, ssr, component:Component },key)=>{
        if( ssr && url === path){
            initData = Component().getInitData instanceof Function ? Component().getInitData(ctx) : null;
        }
    })
    return initData;
}

export default getInitData