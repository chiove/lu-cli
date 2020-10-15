import React, {useState, useRef, useEffect, useCallback} from 'react';
import {BrowserRouter, StaticRouter, Route, Switch} from 'react-router-dom';
import {
  FileTextOutlined,
  EditOutlined,
  ContactsOutlined,
} from '@ant-design/icons';

import axios from 'axios';
import {Button} from 'antd';
import getInitialProps from 'src/utils/get-initial-props';
import './style.less';

export default getInitialProps((props) => {
  console.log(props);
  return (
    <div className="home">
      <div className="home-center">
        <div className="home-sidebar">
          <div className="home-sidebar-item">
            <div className="home-sidebar-logo-container">
              <div className="home-sidebar-logo" />
            </div>

          </div>
          <div className="home-sidebar-item">
            <FileTextOutlined className="home-sidebar-icon"/>
            <div className="home-sidebar-name">简历</div>
          </div>
          <div className="home-sidebar-item">
            <EditOutlined className="home-sidebar-icon"/>
            <div className="home-sidebar-name">博客</div>
          </div>
          <div className="home-sidebar-item">
            <ContactsOutlined className="home-sidebar-icon"/>
            <div className="home-sidebar-name">联系</div>
          </div>
        </div>
        <div className="home-content">
          <Switch>
            {
              props.routes.map((item, key) => (<Route
                key={key}
                exact
                path={item.path}
                component={item.component}
              />))
          }
          </Switch>
        </div>
      </div>
    </div>
  );
});
