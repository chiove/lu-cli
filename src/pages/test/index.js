import React from 'react';
import getInitialProps from 'src/utils/get-initial-props';
import './style.less';

class Test extends React.Component {
  constructor(props) {
    super(props);
    props.testRef && props.testRef(this);
    this.state = {};
  }

  render() {
    return (<>3333</>);
  }
}

export default getInitialProps(Test);
