import React, { Component } from 'react';
import Child from './Child';

class Father extends Component {
  render() {
    return (
      <>
        <h3>Father(부모) 콤포넌트</h3>
        <Child />
        <Child name="김철수" age="23" hobby="운동" />
        <Child name="홍길동" age="18" hobby="컴퓨터" />
        <Child name="이순신" age="50" hobby="독서" />

        <p>자손쪽에서 값을 받기 위해 'this.props.속성명'을 작성했지만 부모쪽에서 값을 설정하여 보내지 않은 경우는 'defaultProps'로 설정할 수 있다.(기본값으로 출력됨)</p>
        
        <ol className="list01">
          <li>개발자가 실수해서 값을 입력하지 않았을 경우</li>
          <li>추후 값을 삽입하려고 하는 경우에 해당</li>
        </ol>
      </>
    );
  }
}

export default Father;