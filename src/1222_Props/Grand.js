import React, { Component } from 'react';
import Father from './Father';

class Grand extends Component {
  render() {
    return (
      <>
        <h3>할아버지 콤포넌트(Grand)</h3>
        <Father />
      </>
    );
  }
}

export default Grand;