/**
    获取静态资源
    @param asset Object
*/

export default (asset) => {
    const keys = Object.keys(asset).filter(key => key.indexOf('.map') === -1);
    const css = [];
    const js = [
        '/static/js/libs.js',
        '/static/js/chunk.js',
        '/static/js/main.js',
        '/static/js/styles.js',
    ]
    keys.forEach((item)=>{
        if(item.indexOf('.css')===1){
            css.push(asset[item])
        }
    })
    return {css, js};
}