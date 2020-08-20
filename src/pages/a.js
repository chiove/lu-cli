import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './style.less';
const A = (props) => {
    console.log(props,'我是a')
return <div className={'test'}>
    <div ><Link to={'/b'}>{'22'}</Link></div>
    </div>;
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