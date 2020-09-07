import React from 'react';
import {Button, DatePicker} from 'antd';
import getInitialProps from 'src/utils/get-initial-props';
import './ca.less';

export default getInitialProps(() => (
  <div className="test2">
    <DatePicker />
    <Button type="primary" style={{marginLeft: 8}}>
      Primary Button1
    </Button>
    223
  </div>
));
