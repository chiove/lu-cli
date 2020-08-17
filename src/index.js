import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, StaticRouter, Route , Switch,withRouter} from 'react-router-dom';
import Layout from 'src/layout/index';
import {getComponent,getWrapComponent} from './utils/getComponent';
import getInitData from './utils/getInitData';

const serverRender = async (ctx) => {
    const initData = await getInitData(ctx);
    return <StaticRouter location={ctx.url}>
    <Layout initData={initData}>
      {getComponent(ctx, initData)}
    </Layout>
</StaticRouter>
}

const clientRender = async () => {
    const components = await getWrapComponent();
    ReactDOM[window.__USE_SERVER__ ? 'hydrate' : 'render'](
      <BrowserRouter>
          <Switch>
            {components.map((Component, index)=>{
              const {path} = Component.props;
               return <Route key={index} path={path} render={() => {
                return <Layout key={index}>
                  {Component}
                </Layout>
                }} />
            })}
          </Switch>
      </BrowserRouter>,
      document.getElementById('app'));
    if (process.env.NODE_ENV === 'development' && module.hot) {
        module.hot.accept()
    }
}

export default __SERVER__ ? serverRender : clientRender();