
const Router = require('koa-better-router');
const router = Router().loadMethods();
const controllers = require('require-all')(`${__dirname}/controllers`);
const public = require('require-all')(`${__dirname}/public`);

router.get('/api/getList', controllers.list.index);
router.get('/api/getDetails', controllers.list.details);

router.get('/*', public.index);

module.exports = router;