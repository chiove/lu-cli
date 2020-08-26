import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, StaticRouter, Route , Switch, withRouter, matchPath} from 'react-router-dom';
// import { matchRoutes} from 'react-router-config';
import matchRoute from './utils/matchRoute';
import Layout from 'src/layout/index';
import getStaticRoutes from './utils/getStaticRoutes';
import routes from 'src/router';

const serverRender = async (ctx) => {
    const routeList = await getStaticRoutes(routes);
    const {targetRoute} = matchRoute(ctx.url, routeList);
    const initalData = targetRoute.component.getInitialProps ? await targetRoute.component.getInitialProps(ctx) : {};
     const context = {
      initalData
     };
    return <StaticRouter location={ctx.url} context={context}>
      <Layout initalData={initalData} asset={ctx.asset}>
        <Switch>
          {
            routeList.map((item, key)=>{
              return item.ssr ? <Route key={key} {...item}/> : undefined
            })
          }
        </Switch>
      </Layout>
    </StaticRouter>
}

const clientRender = async () => {
    const {targetRoute} = matchRoute(document.location.pathname, routes);
    if (targetRoute) {
        const result = await targetRoute.component().props.load();
        targetRoute.component = result ? result.default : null;
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