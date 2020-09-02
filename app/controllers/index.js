const path = require('path');
const {ssr} = require('../config/ssr');
const {renderToNodeStream} = require('react-dom/server');

let controllers = require('require-all')(path.join(__dirname, '../controllers'));


module.exports = async (ctx, next) => {
  ctx.type = 'text/html';
  if (ctx.url === '/favicon.ico') return;
  const clientRender = require('../../build/server/layout').default;
  let serverRender = require('../../build/server/app').default;
  delete require.cache[require.resolve('../../build/server/app')];
  delete require.cache[require.resolve('../controllers')];
  serverRender = require('../../build/server/app').default;
  controllers = require('require-all')(path.join(__dirname, '../controllers'));
  ctx.controllers = controllers;
  const server = await serverRender(ctx);
  const client = await clientRender(ctx);
  ctx.body = renderToNodeStream(ssr ? server : client);
  await next();
};
