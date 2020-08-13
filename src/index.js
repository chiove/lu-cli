import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, StaticRouter, Route , Switch} from 'react-router-dom';
import Layout from 'src/layout/index';
import routes from './router';
import getComponent from './utils/getComponent';

const serverRender = async (ctx) => {
    return <StaticRouter location={ctx.url}>
      <Layout>
        {getComponent(ctx.url)}
      </Layout>
  </StaticRouter>
}

const clientRender = async () => {
    ReactDOM[__SERVER__ ? 'hydrate' : 'render'](
      <BrowserRouter>
      <Switch>
       {
          routes.map(({ path, exact, component:Component }, key) => {
            return <Route exact={exact} key={key} path={path} render={() => {
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