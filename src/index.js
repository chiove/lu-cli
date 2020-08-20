import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, StaticRouter, Route , Switch, withRouter, matchPath} from 'react-router-dom';
import { matchRoutes} from 'react-router-config';
import Layout from 'src/layout/index';
import {getComponent,getWrapComponent,getC} from './utils/getComponent';
import routes from 'src/router';

const serverRender = async (ctx) => {
    const currentRoute = routes.find(route => matchPath(ctx.url, route)) || {};
    const isServer = currentRoute.ssr || false;
    const Component = currentRoute.component();
    const initData = Component.getInitData instanceof Function ? await Component.getInitData(ctx) : null;
    return <StaticRouter location={ctx.url}>
      <Layout initData={initData}>
        {isServer ?  <Component initData={initData}/> : null}
      </Layout>
    </StaticRouter>
}

const clientRender = async () => {
    // const components = await getWrapComponent();
    ReactDOM[window.__USE_SERVER__ ? 'hydrate' : 'render'](
      <BrowserRouter>
          <Switch>
            {/* {components.map((Component, index)=>{
              const {path} = Component.props;
               return <Route key={index} path={path} render={() => {
                return <Layout key={index}>
                  {Component}
                </Layout>
                }} />
            })} */}
            {
              routes.map(({path, exact, component},key)=>{
                const Component = getC(component);
                return <Route key={key} exact={exact} path={path} render={() => {
                  return <Layout key={key}>
                    <Component/>
                  </Layout>
                  }} />
              })
            }
          </Switch>
      </BrowserRouter>,
      document.getElementById('app'));
    if (process.env.NODE_ENV === 'development' && module.hot) {
        module.hot.accept()
    }
}

export default __SERVER__ ? serverRender : clientRender();