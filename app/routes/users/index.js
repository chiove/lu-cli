const Router = require('koa-better-router');
const path = require('path');

const router = Router().loadMethods();
const controllers = require('require-all')(path.join(__dirname, '../../controllers'));

router.options = {
  prefix: '/api',
};
router.post('/login', controllers.users.index.login);
router.post('/register', controllers.users.index.register);
router.get('/loginout', controllers.users.index.loginout);

module.exports = router;
