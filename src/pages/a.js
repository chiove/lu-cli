import React, {useEffect, useRef} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import img from './a.png';
import logo from './login/images/logo.png';
import getInitialProps from 'src/utils/get-initial-props';

import Test from './test';


import './style.less';

const A = (props) => {
  // console.log(Test, <Test/>);
  const couterRef = useRef();
  useEffect(() => {
    console.log(couterRef.current, '3333');
  }, []);
  return (<div className="test">
    <div >{props.initialData && props.initialData.data.map(item => <Link key={item.name} to={'/b'}>{item.name}</Link>)}</div>
    <div>
      <Test ref={couterRef} test={1}/>
    </div>
  </div>);
};
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
