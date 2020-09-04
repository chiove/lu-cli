import React from 'react';
import getInitialProps from 'src/utils/get-initial-props';
import './index.less';

export default getInitialProps(props => (
  <div className="not-found-container">
    <div className="not-found-section">
      <div className="not-found-content">404!</div>
      <div className="not-found-text">
        <span>你要找的页面不存在</span>
        <span
          className="not-found-href"
          onClick={() => {
            props.history.push('/home');
          }}
        >返回首页
        </span>
      </div>
    </div>
  </div>
));
