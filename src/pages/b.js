import React from 'react';
import axios from 'axios';
const b = (props) => {
    return <div>{props.initData.data.a}</div>
};
b.getInitData = async (ctx)=>{
    if(__CLIENT__){
        const res = await axios('/api/getDetails');
        return res.data;
    }else{
        return await ctx.api.list.details(ctx);
    }
}
export default b;