const Router = require('koa-better-router');
const path = require('path');

const router = Router().loadMethods();
const controllers = require('require-all')(path.join(__dirname, '../controllers'));

router.options = {
  prefix: '/api',
};
router.get('/getList', controllers.test.index.list);
router.get('/getDetails', controllers.test.index.details);

module.exports = router;
