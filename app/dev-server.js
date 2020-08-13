const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const chokidar = require('chokidar');
const webpack = require('webpack');
const kwm = require('kwm');
const config = require('../webpack/webpack.config.client.js');
const compiler = webpack(config);
const app = new Koa();

let router = require('./router');


const start = async () => {

    app.context.compiler = compiler;

    //HMR
    app.use(kwm(compiler));

    app.use(static(path.resolve(__dirname, '../build')));

    app.use(router.middleware());

    app.listen('3000',() => {
        compiler.hooks.done.tap('compiler', () => {
            setTimeout(() => {
                console.log('http://127.0.0.1:3000');
            }, 100);
          });
    })
     //监听事件
     const watcher = chokidar.watch(path.join(process.cwd(), 'app'));
     watcher.on('ready', () => {
       watcher.on('change', (watchPath) => { listen(watchPath); });
       watcher.on('add', (watchPath) => { listen(watchPath); });
       watcher.on('unlink', (watchPath) => { listen(watchPath); });
     });
}
start();


/* 监听修改的文件
  * @params string类型 文件的绝对路径
*/
const listen = (listenPath) => {
    // cleanCache(listenPath);
    try {
      delete require.cache[require.resolve('./router')];
      router = require('./router');
      console.info(`${listenPath}文件更新成功！`);
    } catch (error) {
      console.info('文件更新错误:', error);
    }
  };
  //清除缓存，实现热更新
  const cleanCache = (modulePath) => {
    const module = require.cache[modulePath];
    if (module && module.parent) {
      module.parent.children.splice(module.parent.children.indexOf(module), 1);
      require.cache[modulePath] = null;
    }
    require.cache[modulePath] = null;
  };
