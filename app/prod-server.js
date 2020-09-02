const Koa = require('koa');
const path = require('path');
const router = require('./router');
const koaStatic = require('koa-static');

const app = new Koa();
const start = async () => {
  app.use(koaStatic(path.resolve(__dirname, '../build')));
  app.use(router.middleware());
  app.listen('3000', () => {
    console.log('http://127.0.0.1:3000');
  });
};
start();
