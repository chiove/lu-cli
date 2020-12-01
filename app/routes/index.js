
const Router = require('koa-better-router');
const {join, resolve} = require('path');
const controllers = require('require-all')(join(__dirname, '../controllers'));
const glob = require('glob');

const router = Router().loadMethods();
// 合并所有路由
const all = glob.sync(resolve(__dirname, './', '**/*.js'));
const routers = all.filter(value => (value.indexOf('/routes/index.js') === -1));
routers.forEach((item) => {
  const routes = require(item).routes || [];
  router.routes.push(...routes);
});

router.get('/*', controllers.index);

module.exports = router;
