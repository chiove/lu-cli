import React from 'react';
import getInitialProps from 'src/utils/getInitialProps';

export default getInitialProps(() => (
  <div>
    <span onClick={() => { console.log('我是C页面'); }}>我是C页面</span>
  </div>
));
