import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import img from './a.png';
import getInitialProps from 'src/utils/getInitialProps';
import './style.less';
const A = (props) => {
return <div className='test'>
    <div >{props.initialData&&props.initialData.data.map((item)=><Link key={item.name} to={'/b'}>{item.name}</Link>)}</div>
        <img src={img} alt="" style={{
            height:100,
            width:100
        }}/>
    </div>;
}
A.getInitialProps = async (ctx) => {
    if(__CLIENT__){
        const res = await axios('/api/getList');
        return res.data;
    }else{
        return await ctx.api.list.index(ctx);
    }
}
export default getInitialProps(A);