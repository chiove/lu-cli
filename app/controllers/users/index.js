const {users} = require('../../models/index');

module.exports = {
  login: async (ctx, next) => {
    ctx.verifyParams({
      username: {type: 'string', required: true},
      password: {type: 'string', required: true},
    });
    const {username, password} = ctx.request.body;
    const user = await users.findOne({
      where: {
        username,
      },
    });
    if (!user) {
      ctx.body = {code: -1, data: {}, message: '用户不存在！'};
    } else if (user.password === password) {
      if (ctx.session.username === username) {
        ctx.body = {code: 0, data: ctx.session, message: '登录成功！'};
      } else {
        ctx.session = null;
        ctx.session = {
          user_id: Math.random().toString(36).substr(2),
          username,
        };
        ctx.body = {code: 0, data: ctx.session, message: '登录成功！'};
      }
    } else {
      ctx.body = {code: -1, data: {}, message: '密码错误！'};
    }
    await next();
  },
  register: async (ctx, next) => {
    ctx.verifyParams({
      username: {type: 'string', required: true},
      password: {type: 'string', required: true},
    });
    const {username, password} = ctx.request.body;
    const user = await users.findOne({
      where: {
        username,
      },
    });
    if (!user) {
      try {
        await users.create({
          username,
          password,
        });
        ctx.body = {code: 0, data: {}, message: '注册成功！'};
      } catch (err) {
        ctx.body = {code: -1, data: {}, message: err};
      }
    } else {
      ctx.body = {code: 0, data: {}, message: '用户已存在！'};
    }
    await next();
  },
  loginout: async (ctx, next) => {
    ctx.session = {};
    ctx.redirect('/login');
    await next();
  },
};
