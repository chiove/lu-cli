import React from 'react';
import {Button, DatePicker} from 'antd';
import 'antd/dist/antd.less';
import getInitialProps from 'src/utils/get-initial-props';

export default getInitialProps(() => (
  <div className="App">
    <DatePicker />
    <Button type="primary" style={{marginLeft: 8}}>
      Primary Button1
    </Button>
    223
  </div>
));
