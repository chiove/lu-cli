import React, {useState, useEffect} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import {
  FileTextOutlined,
  EditOutlined,
  ContactsOutlined,
  Html5Outlined,
} from '@ant-design/icons';
import getInitialProps from 'src/utils/get-initial-props';
import options from './options';
import './style.less';

export default getInitialProps((props) => {
  const [typing, setTyping] = useState('');
  useEffect(() => {
    window.particlesJS('home-canvas', options);
  }, []);

  useEffect(() => {
    let addIndex = 0;
    let deleteIndex = -1;
    let arrayIndex = 0;
    let timer = null;
    const skills = () => {
      const skillsArray = ['H5', 'ES6', 'React', 'Vue', 'Webpack', 'Node', 'Koa', '前端工程化', '客户端服务端同构', '公众号', '小程序'];
      if (addIndex <= skillsArray[arrayIndex].length) {
        setTyping(skillsArray[arrayIndex].slice(0, addIndex++));
        if (addIndex > skillsArray[arrayIndex].length) {
          timer = setTimeout(skills, 1500);
        } else {
          timer = setTimeout(skills, 80);
        }
      } else {
        clearTimeout(timer);
        if (deleteIndex > -skillsArray[arrayIndex].length) {
          setTyping(skillsArray[arrayIndex].slice(0, deleteIndex--));
          timer = setTimeout(skills, 80);
        } else {
          clearTimeout(timer);
          setTyping('');
          addIndex = 0;
          if (arrayIndex < skillsArray.length - 1) {
            arrayIndex += 1;
            deleteIndex = -1;
            timer = setTimeout(skills, 80);
          } else {
            arrayIndex = 0;
            timer = setTimeout(skills, 80);
          }
        }
      }
    };
    skills();
    return () => { clearTimeout(timer); };
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
            <Link to="/demo">
              <Html5Outlined className="home-sidebar-icon"/>
              <div className="home-sidebar-name">同构</div>
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
               <div className="home-typing-container">
                 <div className="home-typing-name">会的技能</div>
                 <div className="home-typing-content">
                   <span className="home-typing-skill">{typing}</span>
                   <span className="home-typing-input">|</span>
                 </div>
               </div>
             </div>
           )
         }
        </div>
      </div>
    </div>
  );
});
