import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import getInitialProps from 'src/utils/getInitialProps';
import './style.less';
const A = (props) => {
return <div className='test'>
    <div ><Link to={'/b'}>{'12112'}</Link></div>
    </div>;
}
A.getInitialProps = async (ctx) => {
    if(__CLIENT__){
        const res = await axios('/api/getList');
        console.log('222')
        return res.data;
    }else{
        console.log('222')
        return await ctx.api.list.index(ctx);
    }
}
export default getInitialProps(A);