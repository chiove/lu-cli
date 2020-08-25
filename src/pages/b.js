import React , {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const b = (props) => {
    console.log(props,'bbb');
    const [list =[], setList] = useState([]);

    return <div>
        <div onClick={async ()=>{
            const res = await axios('/api/getList');
            setList(list.concat(res.data.data));
            }}>
                {
                // props.initalData.data.a
                '222'
                }
        </div>
        <div>
            {
                list.map((item,key)=><span key={key}>{item.name}</span>)
            }
        </div>
    </div>
    };
b.getinitalData = async (ctx)=>{
    if(__CLIENT__){
        const res = await axios('/api/getDetails');
        return res.data;
    }else{
        return await ctx.api.list.details(ctx);
    }
}
export default b;