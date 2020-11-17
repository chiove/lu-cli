const Router = require('koa-better-router');
const path = require('path');

const router = Router().loadMethods();
const controllers = require('require-all')(path.join(__dirname, '../../controllers'));

router.options = {
  prefix: '/api',
};
router.post('/login', controllers.login.index.login);
router.get('/test1', async (ctx, next) => {
  ctx.body = {
    a: '你大爷',
  };
  await next();
});

module.exports = router;
