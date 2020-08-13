import React from 'react';
import routes from 'src/router';

const getComponent = (url) => {
    return routes.map(({ path, ssr, component:Component },key)=>{
        if( ssr && url === path){
            return <Component key={key} />
        }
    })
}

export default getComponent;