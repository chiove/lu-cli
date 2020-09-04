
import React from 'react';


class AsyncComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: null,
    };
  }

  async componentDidMount() {
    if (!this.state.component) {
      await this.load(this.props);
    }
  }

  async load(props) {
    const Module = await props.load();
    this.setState({
      component: Module.default ? Module.default : Module,
    });
  }

  render() {
    return this.state.component ? this.props.children(this.state.component) : null;
  }
}

function loadble(loader) {
  if (__SERVER__) {
    // 服务端组件重新require引入，实现热更新。
    const loaderString = loader.toString();
    const prefix = loaderString.indexOf('src/pages/');
    const suffix = loaderString.indexOf('.js');
    const url = loaderString.substring(prefix + 10, suffix);
    require(`src/pages/${url}.js`);
  }
  const asyncFn = props => (<AsyncComponent load={loader}>
    {Component => <Component {...props} />}
  </AsyncComponent>);
  return asyncFn;
}

export default loadble;
