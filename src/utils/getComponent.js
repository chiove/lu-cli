import React from 'react';
import routes from 'src/router';
import Layout from 'src/layout/index';

const getComponent = (ctx, initData) => {
    return routes.map(({ path, ssr, component:Component },key)=>{
        if( ssr && ctx.url === path){
            return <Component key={key} initData={initData}/>
        }
    })
}


const getWrapComponent = (component) => {
    class Index extends React.Component {
        constructor(props){
            super(props);
            this.state={
                Component:component
            }
            this.initData={}
        }

        async componentDidMount () {
            const initData = component.getInitData && await component.getInitData();
            this.setState({initData})
            this.initData = initData;
        }

        render (){
            const {initData,Component} = this.state;
            return initData? <Component initData={initData}/> : null;
        }
    }

    return <Index/>
}


export {
    getComponent,
    getWrapComponent
}