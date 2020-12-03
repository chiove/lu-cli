const Router = require('koa-better-router');
const path = require('path');

const router = Router().loadMethods();
const controllers = require('require-all')(path.join(__dirname, '../../controllers'));

router.options = {
  prefix: '/api',
};
router.post('/createBill', controllers.bills.index.createBill);
router.post('/queryBills', controllers.bills.index.queryBills);
module.exports = router;
