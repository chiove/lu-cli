module.exports = {
  demo: async (ctx, next) => {
    console.log('5555');
    const body = {
      code: 200,
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ],
      message: 'sucess！',
    };
    if (next) {
      // 服务端返回数据
      ctx.body = body;
      await next();
    } else {
      // 客户端返回数据
      return body;
    }
  },
};

