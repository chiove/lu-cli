import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './style.less';
const A = (props) => {
return <div className={'test'}>{
        props.initData && props.initData.data.map((item, index)=><div key={index}>{item.name}</div>)
    }</div>;
}
A.getInitData = async (ctx) => {
    const a = {
        code:0,
        data:[
            {
                name:'陆朝维',
                age:'27'
            },
            {
                name:'张三',
                age:'24'
            },
            {
                name:'李四',
                age:'25'
            },
        ]
    }
    if(__CLIENT__){
        const res = await axios('/api/getList');
        return res.data;
    }else{
        return a;
    }
}
export default A;