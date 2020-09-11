module.exports = {
  async list(ctx, next) {
    const body = {
      code: 0,
      data: [
        {
          name: '大大5',
          age: '27',
        },
        {
          name: '张三',
          age: '24',
        },
        {
          name: '李四4',
          age: '25',
        },
      ],
    };
    if (next) {
      ctx.body = body;
      await next();
    } else {
      return body;
    }
  },

  async details(ctx, next) {
    if (next) {
      ctx.body = {
        code: 0,
        data: {a: '1'},
      };
      await next();
    } else {
      return {
        code: 0,
        data: {a: '1'},
      };
    }
  },
};
