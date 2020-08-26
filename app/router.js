
const Router = require('koa-better-router');
const router = Router().loadMethods();
const path = require('path');
const {ssr} = require('./config');
const controllers = require('require-all')(`${__dirname}/controllers`);
const clientRender = require('../build/server/layout').default;
const {renderToNodeStream} = require('react-dom/server');
const asset = require('../build/asset-manifest');
let serverRender = require('../build/server/app').default;

router.get('/api/getList', controllers.list.index);
router.get('/api/getDetails', controllers.list.details);

router.get('/*', async (ctx,next) => {
    ctx.type = 'text/html';
    if(ctx.url === '/favicon.ico') return
    delete require.cache[require.resolve('../build/server/app')];
    serverRender = require('../build/server/app').default;
    ctx.api = controllers;
    ctx.asset = asset;
    const server = await serverRender(ctx);
    const client = await clientRender(ctx);
    ctx.body = renderToNodeStream(ssr ? server : client);
    await next();
});


module.exports = router;