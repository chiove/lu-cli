import React from 'react';
import serialize from 'serialize-javascript';

const Layout = (props) => {
  if (__CLIENT__) {
    return  props.children ? props.children : ''
  } else {

    const { initData } = props;
    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <meta name='theme-color' content='#000000' />
          <link rel='stylesheet' href="/static/css/app.css"/>
          <title>React App</title>
        </head>
        <body>
          <div id='app'>{ props.children ? props.children : '' }</div>
          <script src="/static/js/manifest.js"></script>
          <script src="/static/js/chunk.js"></script>
          <script src="/static/js/main.js"></script>
          {
            initData && <script dangerouslySetInnerHTML={{
              __html: `window.__USE_SERVER__=true;`
            }} />
          }

        </body>
      </html>
    )
  }
}

  export default Layout;