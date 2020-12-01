const {filterAuth} = require('../config/session');

const auth = () => async (ctx, next) => {
  const {user_id} = ctx.session;
  if (filterAuth.indexOf(ctx.url) === -1) {
    if (!user_id) {
      ctx.body = {code: -1, data: {}, message: '没有权限！'};
      ctx.redirect('/login');
    } else {
      await next();
    }
  } else {
    await next();
  }
};
module.exports = auth;
