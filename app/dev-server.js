const Koa = require('koa');
const path = require('path');
const koaStatic = require('koa-static');
const chokidar = require('chokidar');
const webpack = require('webpack');
const kwm = require('kwm');
const {spawn} = require('child_process');
const config = require('../webpack/webpack.config.client.js');

const compiler = webpack(config);
const app = new Koa();

let router = require('./routes');


// 启动子进程,服务端编译，为了实现服务端渲染热更新
const serverWatchProcess = spawn('npm', ['run', 'server:dev'], {shell: process.platform === 'win32'});

const start = async () => {
  app.context.compiler = compiler;

  app.use(kwm(compiler));

  app.use(koaStatic(path.resolve(__dirname, '../build')));

  app.use(router.middleware());

  app.listen('3000', () => {
    serverWatchProcess.stdout.on('data', (data) => {
      console.info(data.toString());
    });
    compiler.hooks.done.tap('compiler', () => {
      setTimeout(() => {
        console.info('http://127.0.0.1:3000');
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
      console.info(`${listenPath}文件更新成功！`);
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
