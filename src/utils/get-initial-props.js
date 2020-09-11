// 高阶组件 用于提取重复逻辑

import React from 'react';

let _this = null;
let _isPop = false;
let _isMount = false;
const popStateCallback = () => {
  if (_this && _this.getInitialProps) {
    _isPop = true;
    if (_isMount) {
      _this.getInitialProps();
    }
  }
};

export default SourceComponent => class HoComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialData: {},
      canClientFetch: false,
    };
  }

  // 用于服务端调用
  static async getInitialProps(ctx) {
    const res = SourceComponent.getInitialProps ? await SourceComponent.getInitialProps(ctx) : {};
    return res;
  }

  // 用于封装处理
  async getInitialProps() {
    // ssr首次进入页面以及csr/ssr切换路由时才调用组件的getInitialProps方法
    const {match, location} = this.props;
    const res = SourceComponent.getInitialProps ? await SourceComponent.getInitialProps({match, location}) : {};
    this.setState({
      initialData: res,
      canClientFetch: true,
    });

    // console.log('getInitialProps');
    // let { tdk } = res.page;
    // if (tdk) {
    //     document.title = tdk.title;
    // }
  }

  async componentDidMount() {
    // 注册事件，用于在页面回退和前进的时候触发
    _isMount = true;// 组件挂载完成
    if (window.__USE_SERVER__) {
      _this = this;
      // 注册事件
      window.addEventListener('popstate', popStateCallback);
      if (_isPop) { // 如果前进或者后退 则需要异步获取数据
        this.getInitialProps();
      }
    }

    const canClientFetch = this.props.history && this.props.history.action === 'PUSH';
    if (canClientFetch || !window.__USE_SERVER__) {
      await this.getInitialProps();
    }
  }

  componentWillUnmount() {
    _isPop = false; // 重置为未触发
    _isMount = false;// 重置为未挂载
  }

  render() {
    const props = {
      initialData: {},
      ...this.props,
    };


    if (__SERVER__) {
      // 服务端渲染
      if (this.props.staticContext) props.initialData = this.props.staticContext.initialData || {};
    } else {
      // 客户端渲染
      const {canClientFetch, initialData} = this.state;
      if (canClientFetch) { // 需要异步请求数据
        props.initialData = initialData || {};
      } else {
        props.initialData = window.__INITIAL_DATA__;
        window.__INITIAL_DATA__ = null;
      }
    }
    return <SourceComponent {...props} />;
  }
};
