const Koa = require('koa');
const path = require('path');
const router = require('./router');
const static = require('koa-static');
// const webpack = require('webpack');
// const koaWebpack = require('koa-webpack');
// const config = require('../webpack/webpack.config.client.js');
// const compiler = webpack(config);
const app = new Koa();
// const html = require('../build/server/main');
const start = async () => {
    // const middleware = await koaWebpack({
    //     compiler,
    //     devMiddleware: {
    //       methods: ['GET', 'POST'],
    //       headers: {'X-Custom-Header': 'yes'},
    //       publicPath: '/',
    //     },

    //     hotClient: {
    //       allEntries: false,
    //       autoConfigure: false,
    //       logTime: false,
    //       logLevel: 'error',
    //     },
    // });
    // app.use(middleware);
    app.use(static(path.resolve(__dirname, '../build')));
    app.use(router.middleware());

    app.listen('3000',() => {
        console.log('http://127.0.0.1:3000');
    })
}
start();
