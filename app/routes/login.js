const Router = require('koa-better-router');
const path = require('path');

const router = Router().loadMethods();
const controllers = require('require-all')(path.join(__dirname, '../controllers'));

router.options = {
  prefix: '/api',
};
router.post('/login', controllers.login.index.login);

module.exports = router;
