const path = require('path');
const {ssr} = require('../config');
const controllers = require('require-all')(path.join(__dirname, '../controllers'));
const {renderToNodeStream} = require('react-dom/server');


module.exports = async (ctx,next) => {
    const clientRender = require('../../build/server/layout').default;
    let serverRender = require('../../build/server/app').default;
    delete require.cache[require.resolve('../../build/server/app')];
    serverRender = require('../../build/server/app').default;
    ctx.type = 'text/html';
    if(ctx.url === '/favicon.ico') return
    ctx.api = controllers;
    const server = await serverRender(ctx);
    const client = await clientRender(ctx);
    ctx.body = renderToNodeStream(ssr ? server : client);
    await next();
}