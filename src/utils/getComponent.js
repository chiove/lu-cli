import React from 'react';
import routes from 'src/router';
import { matchRoutes} from 'react-router-config';
import Layout from 'src/layout/index';
import {  Route , Switch} from 'react-router-dom';

const getComponent = async (ctx) => {
    return Promise.all(routes.map(async ({ path, exact, component,ssr }, key) => {
        if(ssr && ctx.url === path){
            const Component = component();
            const initalData = Component.getinitalData instanceof Function ? await Component.getinitalData(ctx) : null;
            return <Component initalData={initalData} path={path} key={key}/>
        }
    }))
}


const getWrapComponent = () => {
    return Promise.all(routes.map(async ({ path, exact, component }, key) => {
        const Module = await component();
        const Component = Module.default;
        const initalData = Component.getinitalData instanceof Function ? await Component.getinitalData() : null;
        return <Component initalData={initalData} path={path}/>
    }))
}

const getC = (component) => {
    let initalData;
    class Index extends React.Component {
        constructor(props){
            super(props);
            this.state = {
                C:undefined,
                initalData:undefined
            }
        }

        async componentDidMount(){
            const Module = await component();
            const C = Module.default;
            const initalData = C.getinitalData instanceof Function ? await C.getinitalData() : null;
            this.setState({
                C,
                initalData
            });
        }

        render () {
            const {C, initalData} = this.state;
            return  C ? <C initalData={initalData}/> : ''
        }
    }

    return Index;
}


export {
    getComponent,
    getWrapComponent,
    getC
}