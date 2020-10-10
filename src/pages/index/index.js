import React, {useState, useRef, useEffect, useCallback} from 'react';
import axios from 'axios';
import {Button} from 'antd';
import getInitialProps from 'src/utils/get-initial-props';
import './style.less';
// const camera, scene, renderer;
// const geometry, material, mesh;

export default getInitialProps(() => {
  const canvas = useRef(null);

  useEffect(() => {

  }, [canvas]);
  return (
    <div>
      <div className="canvas" ref={canvas} />
    </div>
  );
});
