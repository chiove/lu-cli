import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import img from './a.png';
import logo from './login/images/logo.png';
import getInitialProps from 'src/utils/get-initial-props';
import './style.less';

const A = props => (<div className="test">
  <div >{props.initialData && props.initialData.data.map(item => <Link key={item.name} to={'/b'}>{item.name}</Link>)}</div>
  <img
    src={img}
    alt=""
    style={{
      height: 100,
      width: 100,
    }}
  />
  <img
    src={logo}
    alt=""
    style={{
      height: 100,
      width: 100,
    }}
  />
  <div>88889</div>
</div>);
A.getInitialProps = async (ctx) => {
  if (__CLIENT__) {
    const res = await axios('/api/getList');
    return res.data;
  } else {
    const res = await ctx.controllers.test.index.list();
    console.log(res);
    return res;
  }
};
export default getInitialProps(A);
