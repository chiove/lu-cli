module.exports = {
    async index(ctx, next) {
        if(next){
            ctx.body={
                code:0,
                data:[
                    {
                        name:'大大',
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
            await next();
        }else{
            return {
                code:0,
                data:[
                    {
                        name:'大大',
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
        }

    }
}