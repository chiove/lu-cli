import React from 'react';
import routes from 'src/router';

const getComponent = (ctx, initData) => {
    return routes.map(({ path, ssr, component:Component },key)=>{
        if( ssr && ctx.url === path){
            return <Component key={key} initData={initData}/>
        }
    })
}

export default getComponent