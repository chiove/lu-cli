const Koa = require('koa');
const path = require('path');
const koaStatic = require('koa-static');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const webpack = require('webpack');
const kwm = require('kwm');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const parameter = require('koa-parameter');
const chalk = require('chalk');
const {spawn} = require('child_process');
const config = require('../webpack/webpack.config.client.js');
const sessionConfig = require('./config/session');
const auth = require('./middleware/auth');

const compiler = webpack(config);
const store = new MysqlStore(sessionConfig.store);
const app = new Koa();
const router = require('./routes');

// ssr webpack compile
const childProcess = spawn('npm', ['run', 'server:dev'], {shell: process.platform === 'win32'});
childProcess.on('close', (code) => {
  console.log(`服务端webpack编译子进程已退出，退出码 ${code}，请从新启动服务！`);
});
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

  app.use(kwm(compiler, {logLevel: false}));

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
    compiler.hooks.done.tap('compiler', () => {
      // 启动子进程,服务端编译，为了实现服务端渲染热更新
      setTimeout(() => {
        console.info(chalk.cyan('\r\n 🚀 http://127.0.0.1:3000\r\n'));
      }, 100);
    });
  });
};

start();
