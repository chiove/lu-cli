module.exports = {
  login: async (ctx, next) => {
    const {username, password} = ctx.request.body;
    const body = () => {
      if (username === '18696813121' && password === '123456') {
        return {
          code: 200,
          data: {},
          message: '登陆成功！',
        };
      } else {
        return {
          code: -1,
          data: {},
          message: '账号密码错误！',
        };
      }
    };
    if (next) {
      ctx.body = body();
      await next();
    } else {
      return body;
    }
  },
};
