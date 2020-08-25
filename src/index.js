import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, StaticRouter, Route , Switch, withRouter, matchPath} from 'react-router-dom';
// import { matchRoutes} from 'react-router-config';
import matchRoute from './utils/matchRoute';
import Layout from 'src/layout/index';
import {getComponent,getWrapComponent,getC} from './utils/getComponent';
import routes from 'src/router';

const serverRender = async (ctx) => {
    const currentRoute = routes.find(route => matchPath(ctx.url, route)) || {};
    const isServer = currentRoute.ssr || false;
    const Component = currentRoute.component();
    const initalData = Component.getInitalData instanceof Function ? await Component.getInitalData(ctx) : null;
    return <StaticRouter location={ctx.url}>
      <Layout initalData={initalData}>
        {isServer ?  <Component initalData={initalData}/> : null}
      </Layout>
    </StaticRouter>
}

const clientRender = async () => {
    const {targetRoute} = matchRoute(document.location.pathname, routes);
    if (targetRoute) {
        const result = await targetRoute.component().props.load();
        targetRoute.component = result ? result.default : null;
        targetRoute.initalData = await targetRoute.component.getInitalData();
        console.log(targetRoute,'3333344444')
        render(routes);
    } else {
      render(routes);
    }
    if (process.env.NODE_ENV === 'development' && module.hot) {
        module.hot.accept()
    }
}

const render = (routeList) => {

  ReactDOM[window.__USE_SERVER__ ? 'hydrate' : 'render'](
    <BrowserRouter>
        <Switch>
          {
            routeList.map((item, key)=>{
              return <Route key={key} {...item}/>
            })
          }
        </Switch>
    </BrowserRouter>,
    document.getElementById('app'));
}

export default __SERVER__ ? serverRender : clientRender();