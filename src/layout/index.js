import React from 'react';
  const Layout = (props) => {
    if (__CLIENT__) {
      return  props.children ? props.children : ''
    } else {
    //   const { serverData } = props.layoutData
    //   const { injectCss, injectScript } = props.layoutData.app.config
      return (
        <html lang='en'>
          <head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
            <meta name='theme-color' content='#000000' />
            <link rel='stylesheet' href="/static/css/main.css"/>
            <title>React App</title>
            {/* {
              injectCss && injectCss.map(item => <link rel='stylesheet' href={item} key={item} />)
            } */}
          </head>
          <body>
            <div id='app'>{ props.children ? props.children : '' }</div>
            <script src="/static/js/main.js"></script>
            <script src="/static/js/chunk.chunk.js"></script>
            {/* {
              serverData && <script dangerouslySetInnerHTML={{
                __html: `window.__USE_SSR__=true; window.__INITIAL_DATA__ =${serialize(serverData)}`
              }} />
            }
            <div dangerouslySetInnerHTML={{
              __html: injectScript && injectScript.join('')
            }} /> */}
          </body>
        </html>
      )
    }
  }

  export default Layout;