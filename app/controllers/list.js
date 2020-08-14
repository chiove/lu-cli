module.exports = {
    async index(ctx, next) {
        ctx.body={
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
        await next();
    }
}