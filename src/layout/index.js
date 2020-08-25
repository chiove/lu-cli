import React from 'react';
import serialize from 'serialize-javascript';

const Layout = (props) => {
  const { initalData } = props;
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='theme-color' content='#000000' />
        <link rel="icon" href="data:image/ico;base64,aWNv"/>
        <link rel='stylesheet' href="/static/css/app.css"/>
        <title>React App</title>
      </head>
      <body>
        <div id='app'>{ props.children ? props.children : '' }</div>
        {
          initalData && <script dangerouslySetInnerHTML={{
            __html: `window.__USE_SERVER__=true; window.__INITIAL_DATA__= ${serialize(initalData)}`
          }} />
        }
        <script src="/static/js/manifest.js"></script>
        <script src="/static/js/chunk.js"></script>
        <script src="/static/js/main.js"></script>
      </body>
    </html>
  )
}

  export default Layout;