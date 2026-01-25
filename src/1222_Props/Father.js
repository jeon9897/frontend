import React from 'react';
import Child from './Child';

function Father(props) {
  return (
    <>
      <h3 className="title3">Father(부모) 콤포넌트</h3>

      <Child /> 
      
      <br />

      <Child name="김철수" age="20" hobby='등산' />
      <br />
      <Child name="홍길동" age="30" hobby='게임' />

    </>
  );
}

export default Father;