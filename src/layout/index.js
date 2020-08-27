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
        <title>React App</title>
        <link rel="stylesheet" type="text/css" href="/static/css/styles.css" />
      </head>
      <body>
        <div id='app'>{ props.children ? props.children : '' }</div>
        {
          initalData && <script dangerouslySetInnerHTML={{
            __html: `window.__USE_SERVER__=true; window.__INITIAL_DATA__= ${serialize(initalData)}`
          }} />
        }
        <script type="text/javascript" src="/static/js/libs.js"/>
        <script type="text/javascript" src="/static/js/chunk.js"/>
        <script type="text/javascript" src="/static/js/main.js"/>
        <script type="text/javascript" src="/static/js/styles.js"/>
      </body>
    </html>
  )
}

  export default Layout;