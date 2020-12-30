module.exports = {
  login: async (ctx, next) => {
    ctx.verifyParams({
      username: {type: 'string', required: true},
      password: {type: 'string', required: true},
    });
    const {username, password} = ctx.request.body;
    ctx.body = {code: 0, data: {username, password}, message: '登录成功！'};
    await next();
  },
  register: async (ctx, next) => {
    ctx.verifyParams({
      username: {type: 'string', required: true},
      password: {type: 'string', required: true},
    });
    const {username, password} = ctx.request.body;
    ctx.session = {
      username,
    };
    ctx.body = {code: 0, data: {username, password}, message: '注册成功！'};
    await next();
  },
  loginout: async (ctx, next) => {
    ctx.session = {};
    ctx.redirect('/login');
    await next();
  },
};
