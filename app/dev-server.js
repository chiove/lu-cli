const Koa = require('koa');
const path = require('path');
const koaStatic = require('koa-static');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const chokidar = require('chokidar');
const webpack = require('webpack');
const kwm = require('kwm');
const chalk = require('chalk');
const {spawn} = require('child_process');
const config = require('../webpack/webpack.config.client.js');

const compiler = webpack(config);
const app = new Koa();

let router = require('./routes');
// 启动子进程,服务端编译，为了实现服务端渲染热更新
const childProcess = spawn('npm', ['run', 'server:dev'], {shell: process.platform === 'win32'});

const start = async () => {
  app.context.compiler = compiler;


  app.use(kwm(compiler, {logLevel: false}));

  app.use(koaStatic(path.resolve(__dirname, '../build')));

  app.use(koaBody({
    multipart: true, // 支持文件上传
    formidable: {
      uploadDir: path.join(__dirname, 'public/upload/'), // 设置文件上传目录
      keepExtensions: true, // 保持文件的后缀
      maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
      onFileBegin: (name, file) => { // 文件上传前的设置
        console.log(`name: ${name}`);
        console.log(file);
      },
    },
  }));

  app.use(router.middleware());

  app.use(logger());

  app.listen('3000', () => {
    childProcess.on('data', () => {});
    compiler.hooks.done.tap('compiler', () => {
      setTimeout(() => {
        console.info(chalk.cyan('\r\n 🚀 http://127.0.0.1:3000\r\n'));
      }, 100);
    });
  });

  // 监听事件
  const watcher = chokidar.watch(path.join(process.cwd(), 'app'));
  watcher.on('ready', () => {
    watcher.on('change', (watchPath) => { listen(watchPath); });
    watcher.on('add', (watchPath) => { listen(watchPath); });
    watcher.on('unlink', (watchPath) => { listen(watchPath); });
  });

  const listen = (listenPath) => {
    cleanCache(listenPath);
    try {
      delete require.cache[require.resolve('./routes')];
      router = require('./routes');
      app.use(router.middleware());
      console.info(chalk.green(`\r\n${listenPath}文件更新成功！\r\n`));
    } catch (error) {
      console.info('文件更新错误:', error);
    }
  };
    // 清除缓存，实现热更新
  const cleanCache = (modulePath) => {
    const module = require.cache[modulePath];
    if (module && module.parent) {
      module.parent.children.splice(module.parent.children.indexOf(module), 1);
      delete require.cache[modulePath];
    }
    delete require.cache[modulePath];
  };
};

start();
