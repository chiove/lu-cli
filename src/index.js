import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, StaticRouter, Route, Switch} from 'react-router-dom';
import matchRoute from './utils/matchRoute';
import Layout from 'src/layout/index';
import getStaticRoutes from './utils/getStaticRoutes';
import routes from 'src/router';

const serverRender = async (ctx) => {
  const routeList = await getStaticRoutes(routes);
  const {targetRoute} = matchRoute(ctx.url, routeList);
  const initialData = targetRoute.component.getInitialProps ? await targetRoute.component.getInitialProps(ctx) : {};

  const context = {
    initialData,
  };
  return (<StaticRouter location={ctx.url} context={context}>
    <Layout initalData={initialData}>
      <Switch>
        {
            routeList.map((item, key) => (item.ssr ? <Route key={key} {...item}/> : undefined))
          }
      </Switch>
    </Layout>
  </StaticRouter>);
};

const clientRender = async () => {
  const {targetRoute} = matchRoute(document.location.pathname, routes);
  if (targetRoute) {
    const result = await targetRoute.component().props.load();
    targetRoute.component = result ? result.default : null;
    const ssr = targetRoute.ssr || false;
    render(routes, ssr);
  } else {
    render(routes);
  }
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept();
  }
};

const render = (routeList, ssr = true) => {
  ReactDOM[window.__USE_SERVER__ && ssr ? 'hydrate' : 'render'](
    <BrowserRouter>
      <Switch>
        {
            routeList.map((item, key) => <Route key={key} {...item}/>)
          }
      </Switch>
    </BrowserRouter>,
    document.getElementById('app'));
};

export default __SERVER__ ? serverRender : clientRender();
