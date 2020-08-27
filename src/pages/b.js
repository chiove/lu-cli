import React , {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import getInitialProps from 'src/utils/getInitialProps';
import './b.less';
const b = (props) => {
    const [list =[], setList] = useState([]);

    return <div>
        <div className="test1" onClick={async ()=>{
            const res = await axios('/api/getList');
            setList(list.concat(res.data.data));
            }}>
                {
                // props.initalData.data.a
                '1'
                }
        </div>
        <div>
            {
                list.map((item,key)=><span key={key}>{item.name}</span>)
            }
        </div>
    </div>
    };
b.getInitialProps = async (ctx)=>{
    if(__CLIENT__){
        const res = await axios('/api/getDetails');
        return res.data;
    }else{
        return await ctx.api.list.details(ctx);
    }
}
export default getInitialProps(b);