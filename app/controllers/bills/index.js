const bills = require('../../models/bills');
const Sequelize = require('sequelize');
const moment = require('moment');

module.exports = {
  createBill: async (ctx, next) => {
    ctx.verifyParams({
      money: {type: 'string', required: true},
      type: {type: 'string', required: true},
    });
    const {money, type} = ctx.request.body;
    const {userid} = ctx.session;
    const res = await bills.create({
      uuid: Math.random().toString(12).substr(2),
      userid,
      money,
      type,
    });
    ctx.body = {code: 0, data: res, message: '新增成功！'};
    await next();
  },
  queryBills: async (ctx, next) => {
    const {userid} = ctx.session;
    if (userid) {
      // 总收益
      const totalMoney = await bills.sum('money', {
        where: {
          userid,
        },
      });
      const getData = (type, time) => {
        if (time) {
          return bills.sum('money', {
            where: {
              userid,
              type,
              createdAt: {
                [Sequelize.Op.gt]: moment().startOf(time).utc().format(),
                [Sequelize.Op.lt]: moment().endOf(time).utc().format(),
              },
            },
          });
        } else {
          return bills.sum('money', {
            where: {
              userid,
              type,
            },
          });
        }
      };
      const dayApp = await getData('app', 'day');
      const dayWeixin = await getData('weixin', 'day');
      const dayDouyin = await getData('douyin', 'day');
      const weekApp = await getData('app', 'week');
      const weekWeixin = await getData('weixin', 'week');
      const weekDouyin = await getData('douyin', 'week');
      const monthApp = await getData('app', 'month');
      const monthWeixin = await getData('weixin', 'month');
      const monthDouyin = await getData('douyin', 'month');
      const totalApp = await getData('app');
      const totalWeixin = await getData('weixin');
      const totalDouyin = await getData('douyin');
      const data = {
        today: {
          app: dayApp,
          weixin: dayWeixin,
          douyin: dayDouyin,
        },
        week: {
          app: weekApp,
          weixin: weekWeixin,
          douyin: weekDouyin,
        },
        month: {
          app: monthApp,
          weixin: monthWeixin,
          douyin: monthDouyin,
        },
        total: {
          app: totalApp,
          weixin: totalWeixin,
          douyin: totalDouyin,
        },
        totalMoney,
      };
      ctx.body = {code: 0, data, message: '查询成功！'};
    }
    await next();
  },
};
