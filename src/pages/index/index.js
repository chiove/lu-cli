import React, {useState, useRef, useEffect, useCallback} from 'react';
import {Link, StaticRouter, Route, Switch} from 'react-router-dom';
import {
  FileTextOutlined,
  EditOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
import axios from 'axios';
import {Button} from 'antd';
import getInitialProps from 'src/utils/get-initial-props';
import options from './options';
import './style.less';

export default getInitialProps((props) => {
  useEffect(() => {
    window.particlesJS('home-canvas', options);
  }, []);
  const flag = props.location.pathname === '/home';
  return (
    <div className="home">
      <div id="home-canvas" />
      <div className="home-center">
        <div className="home-sidebar">
          <div className="home-sidebar-item">
            <Link to="/home">
              <div className="home-sidebar-logo-container">
                <div className="home-sidebar-logo" />
              </div>
            </Link>
          </div>
          <div className="home-sidebar-item">
            <Link to="/home/a">
              <FileTextOutlined className="home-sidebar-icon"/>
              <div className="home-sidebar-name">简历</div>
            </Link>
          </div>
          <div className="home-sidebar-item">
            <Link to="/home/login1">
              <EditOutlined className="home-sidebar-icon"/>
              <div className="home-sidebar-name">博客</div>
            </Link>
          </div>
          <div className="home-sidebar-item">
            <ContactsOutlined className="home-sidebar-icon"/>
            <div className="home-sidebar-name">联系</div>
          </div>
        </div>
        <div className="home-content">
          {
           !flag ? <Switch>
             {
             props.routes.map((item, key) => (<Route
               key={key}
               exact
               path={item.path}
               component={item.component}
             />))
         }
           </Switch> : (
             <div>
               <div className="home-header">
                 <div className="home-header-img" />
               </div>
               <div className="home-author">
                 陆朝维
               </div>
             </div>
           )
         }
        </div>
      </div>
    </div>
  );
});
