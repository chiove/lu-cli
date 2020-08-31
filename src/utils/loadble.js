
import React from 'react';
import getInitialProps from './getInitialProps';

class AsyncComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            component: null
        };
    }

    async componentDidMount() {
        if (!this.state.component) {
            await this.load(this.props);
        }
    }

    async load(props) {
        this.setState({
            Module: null
        });
        const Module = await props.load();
        this.setState({
            component: Module.default ? Module.default : Module
        });
    }

    render() {
        return this.state.component ? this.props.children(this.state.component) : null;
    }
}

function loadble (loader) {
    if(__SERVER__){
        const loaderString = loader.toString();
        const prefix = loaderString.indexOf('src/pages/');
        const suffix = loaderString.indexOf('.js');
        const url = loaderString.substring(prefix + 10,suffix);
        require('src/pages/'+url+'.js');
    }
    const asyncFn = (props) => {
       return <AsyncComponent load={loader}>
            {(Component) => <Component {...props} />}
        </AsyncComponent>
    }
    return asyncFn;
}

export default loadble;