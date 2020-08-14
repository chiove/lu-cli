import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './style.less';
const A = (props) => {
return <div className={'test'}>{
        props.initData && props.initData.data.map((item, index)=><div  key={index}><Link to={'/b'}>{item.name}</Link></div>)
    }</div>;
}
A.getInitData = async (ctx) => {
    if(__CLIENT__){
        const res = await axios('/api/getList');
        return res.data;
    }else{
        return await ctx.api.list.index(ctx);
    }
}
export default A;