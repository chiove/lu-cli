import React from 'react';
import routes from 'src/router';
import { matchRoutes} from 'react-router-config';
import Layout from 'src/layout/index';
import {  Route , Switch} from 'react-router-dom';

const getComponent = async (ctx) => {
    return Promise.all(routes.map(async ({ path, exact, component,ssr }, key) => {
        if(ssr && ctx.url === path){
            const Component = component();
            const initData = Component.getInitData instanceof Function ? await Component.getInitData(ctx) : null;
            return <Component initData={initData} path={path} key={key}/>
        }
    }))
}


const getWrapComponent = () => {
    return Promise.all(routes.map(async ({ path, exact, component }, key) => {
        const Module = await component();
        const Component = Module.default;
        const initData = Component.getInitData instanceof Function ? await Component.getInitData() : null;
        return <Component initData={initData} path={path}/>
    }))
}

const getC = (component) => {
    let initData;
    class Index extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                C:undefined,
                initData:undefined
            }
        }

        async componentDidMount(){
            const Module = await component();
            const C = Module.default;
            const initData = C.getInitData instanceof Function ? await C.getInitData() : null;
            this.setState({
                C,
                initData
            });
        }

        render () {
            const {C, initData} = this.state;
            return  C ? <C initData={__INITIAL_DATA__ || initData}/> : ''
        }
    }

    return Index;
}


export {
    getComponent,
    getWrapComponent,
    getC
}