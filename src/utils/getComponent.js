import React from 'react';
import routes from 'src/router';
import Layout from 'src/layout/index';
import {  Route , Switch} from 'react-router-dom';

const getComponent = (ctx, initData) => {
    return routes.map(({ path, ssr, component },key)=>{
        if( ssr && ctx.url === path){
            const Component = component();
            // console.log(component)
            // const Module = await component();
            // const Component = Module.default;
            // console.log('22',Component);
            // return component;
            return <Component key={key} initData={initData}/>
        }
    })
}


const getWrapComponent = () => {
    return Promise.all(routes.map(async ({ path, exact, component }, key) => {
        const Module = await component();
        const Component = Module.default;
        const initData = Component.getInitData instanceof Function ? await Component.getInitData() : null;
        return <Component initData={initData} path={path}/>
    }))
}


export {
    getComponent,
    getWrapComponent
}