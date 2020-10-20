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
  const [typing, setTyping] = useState('');
  useEffect(() => {
    // window.particlesJS('home-canvas', options);
    skills();
    return () => { clearTimeout(timer); };
  }, []);

  let addIndex = 0;
  let deleteIndex = -1;
  let arrayIndex = 0;
  let timer = null;
  const skills = () => {
    const skillsArray = ['html', 'js', 'css', 'react', 'vue', 'webpack', 'node', 'koa', 'ssr'];
    if (addIndex <= skillsArray[arrayIndex].length) {
      setTyping(skillsArray[arrayIndex].slice(0, addIndex++));
      if (addIndex > skillsArray[arrayIndex].length) {
        timer = setTimeout(skills, 1500);
      } else {
        timer = setTimeout(skills, 100);
      }
    } else {
      clearTimeout(timer);
      if (deleteIndex > -skillsArray[arrayIndex].length) {
        setTyping(skillsArray[arrayIndex].slice(0, deleteIndex--));
        timer = setTimeout(skills, 100);
      } else {
        clearTimeout(timer);
        setTyping('');
        addIndex = 0;
        if (arrayIndex < skillsArray.length - 1) {
          arrayIndex += 1;
          deleteIndex = -1;
          timer = setTimeout(skills, 100);
        } else {
          arrayIndex = 0;
          timer = setTimeout(skills, 100);
        }
      }
    }
  };

  const flag = props.location.pathname === '/home';
  return (
    <div className="home">
      <span className="home-typing-title">会的技能</span>
      <span className="home-typing-content">{typing}</span>
      <span className="home-typing-input">|</span>
      {/* <div id="home-canvas" />
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
      </div> */}
    </div>
  );
});
