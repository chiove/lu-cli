const Router = require('koa-better-router');
const path = require('path');

const router = Router().loadMethods();
const controllers = require('require-all')(path.join(__dirname, '../../controllers'));

router.options = {
  prefix: '/api',
};
router.get('/demo', controllers.demo.index.demo);
router.post('/uploadImage', controllers.demo.index.uploadImage);

module.exports = router;
