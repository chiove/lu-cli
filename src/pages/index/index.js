import React, {useState, useRef, useEffect, useCallback} from 'react';
import axios from 'axios';
import {Button} from 'antd';
import getInitialProps from 'src/utils/get-initial-props';
import './style.less';


export default getInitialProps(() => {
  const canvas = useRef(null);
  useEffect(() => {
    console.log(canvas);
  }, [canvas]);


  return (
    <div>
      <div ref={canvas} />
    </div>
  );
});
