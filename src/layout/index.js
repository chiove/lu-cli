import React from 'react';
import serialize from 'serialize-javascript';

const Layout = (props) => {
  const {initalData = {}, session = {}} = props;
  const flag = Object.keys(initalData).length !== 0;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <meta name="theme-color" content="#000000" />
        <meta name="baidu-site-verification" content="code-oZ2VLUAXz8" />
        <meta name="keywords" content="koa,react,ssr,koa-react-ssr,lu-cli,同构,脚手架,陆朝维"/>
        <meta name="description" content="服务端渲染"/>
        <link rel="icon" href="data:image/ico;base64,aWNv"/>
        <title>陆朝维</title>
        <link rel="stylesheet" type="text/css" href="/static/css/styles.css" />
      </head>
      <body>
        <div id="app">{ props.children ? props.children : '' }</div>
        {
          flag && <script dangerouslySetInnerHTML={{
            __html: `window.__USE_SERVER__=true;window.__INITIAL_DATA__= ${serialize(initalData)}`,
          }}
          />
        }
        {
          session && <script dangerouslySetInnerHTML={{
            __html: `window.__USER__=${serialize(session)}`,
          }}
          />
        }
        <script type="text/javascript" src="/static/js/particles.min.js"/>
        <script type="text/javascript" src="/dll/dll.js"/>
        <script type="text/javascript" src="/static/js/libs.js"/>
        <script type="text/javascript" src="/static/js/manifest.js"/>
        <script type="text/javascript" src="/static/js/main.js"/>
        <script type="text/javascript" src="/static/js/styles.js"/>
      </body>
    </html>
  );
};

export default Layout;
