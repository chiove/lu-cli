# lu-cli

## 介绍
此脚手架基于koa+react+ssr+antd+热更新+按需加载实现同构，可在配置文件设置服务端渲染和客户端渲染。

## 概要
因为项目需要，也是基于学习的目的所以搭了一个react服务端渲染，市面上也是有很多react同构的框架，且都是最优实现，封装都太黑盒，如有特殊需求就无法实现，不太符合公司业务。于是乎就自己搭了一个，其中也有很多借鉴别人的地方。

## 特性
1.热更新

2.按需加载

3.项目简单，结构清晰

4，react最新版，支持hooks

5，没有用ts，所以不支持。

## 必要条件
所有子模块都是用的最新的，所以node版本这些相对于高的稳定版本吧！

## 安装

### 开发

没有发布npm，所以就

```
git clone https://github.com/chiove/lu-cli.git
```
这样吧！

下一步，我用的yarn，当然用npm也可以
```
yarn install
```

启动，为了webpack快一点所以加了dll，要先运行
```
yarn build:dll
```
然后

```
yarn dev
```
### 生产
正式环境打包，客户端打包和服务端打包
```
yarn build:all
```

启动
```
yarn prod
```
## 用法
 一键启动是否支持服务端渲染，就问屌不屌！
#### app/config/ssr.js

```
module.exports = {
  ssr: true, //这里设置整个项目是否需要服务端渲染。true为服务端渲染
};
```
当然，如果我开启了服务端渲染，但是我有一个页面需要用到window，对就是window，在服务端是不存在window的，所以在
#### src/router.js
中，加入了一个标识
```
import loadble from './utils/loadble';

const routes = [
  {
    path: '/',
    exact: true,
    ssr: false, //这个就是这个页面不使用服务端渲染，你就可以嚣张跋扈的使用window了
    component: loadble(() => import(/* webpackChunkName: 'index' */'./pages/index')),
  },
  {
    path: '*',
    component: loadble(() => import(/* webpackChunkName: 'not-found' */'./pages/not-found')),
  },
];

export default routes;
```
完了，就这样吧，感谢支持。么么么么么哒💋

