const path = require('path');
const {ssr} = require('../config/ssr');
const {renderToNodeStream} = require('react-dom/server');

let controllers = require('require-all')(path.join(__dirname, '../controllers'));


module.exports = async (ctx, next) => {
  ctx.type = 'text/html';
  if (ctx.url === '/favicon.ico') return;
  delete require.cache[require.resolve('../controllers')];
  controllers = require('require-all')(path.join(__dirname, '../controllers'));
  ctx.controllers = controllers;
  if (ssr) {
    // 服务端渲染
    let serverRender = require('../../build/server/app').default;
    delete require.cache[require.resolve('../../build/server/app')];
    serverRender = require('../../build/server/app').default;
    const server = await serverRender(ctx);
    ctx.body = renderToNodeStream(server);
  } else {
    // 客户端渲染
    const clientRender = require('../../build/server/layout').default;
    const client = await clientRender(ctx);
    ctx.body = renderToNodeStream(client);
  }
  await next();
};
