
const Router = require('koa-better-router');

const router = Router().loadMethods();
const controllers = require('require-all')(`${__dirname}/controllers`);

router.get('/api/getList', controllers.list.index);
router.get('/api/getDetails', controllers.list.details);

router.get('/*', controllers.index);

module.exports = router;
