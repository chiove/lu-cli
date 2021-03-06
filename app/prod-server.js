const Koa = require('koa');
const path = require('path');
const koaBody = require('koa-body');
const logger = require('koa-logger');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const koaStatic = require('koa-static');
const parameter = require('koa-parameter');
const sessionConfig = require('./config/session');
const auth = require('./middleware/auth');
const router = require('./routes');

const store = new MysqlStore(sessionConfig.store);
const app = new Koa();
const start = async () => {
  app.keys = sessionConfig.keys;
  app.use(session({
    key: sessionConfig.config.key,
    cookie: {
      ...sessionConfig.config,
    },
    store,
  }
  ));
  app.use(koaStatic(path.resolve(__dirname, '../build')));
  app.use(koaStatic(path.resolve(__dirname, '../public')));
  app.use(koaBody({
    multipart: true, // 支持文件上传
    formidable: {
      uploadDir: path.join(__dirname, '../public/upload/'), // 设置文件上传目录
      keepExtensions: true, // 保持文件的后缀
      maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
      onFileBegin: (name, file) => { // 文件上传前的设置
        console.log(`name: ${name}`);
        console.log(file);
      },
    },
  }));
  app.use(parameter(app));
  app.use(router.middleware());
  app.use(auth());
  app.use(logger());
  app.listen('3000', () => {
    console.log('http://127.0.0.1:3000');
  });
};
start();
