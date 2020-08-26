import React from 'react';
import serialize from 'serialize-javascript';
import getAsset from 'src/utils/getAsset';

const Layout = (props) => {
  const { initalData, asset } = props;
  const { css, js } = getAsset(asset);
  console.log(css)
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta name='theme-color' content='#000000' />
        <link rel="icon" href="data:image/ico;base64,aWNv"/>

        {/* {css && css.map(item => <link rel='stylesheet' href={item} key={item} />)} */}
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
        {js && js.map(item => <script type="text/javascript" src={item} key={item}/>)}
      </body>
    </html>
  )
}

  export default Layout;