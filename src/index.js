import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, StaticRouter, Route , Switch} from 'react-router-dom';
import Layout from 'src/layout/index';
import routes from './router';
import getComponent from './utils/getComponent';
import getInitData from './utils/getInitData';

const serverRender = async (ctx) => {
    const initData = await getInitData(ctx);
    return <StaticRouter location={ctx.url}>
    <Layout initData = {initData}>
      {getComponent(ctx, initData)}
    </Layout>
</StaticRouter>
}

const clientRender = async () => {
    const initData = await getInitData(window.location.pathname);
    ReactDOM[__SERVER__ ? 'hydrate' : 'render'](
      <BrowserRouter>
        <Switch>
          {
            routes.map(({ path, exact, component:Component }, key) => {
              return <Route exact={exact} key={key} path={path} render={() => {
              return <Layout key={key}>
                  <Component initData={initData}/>
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