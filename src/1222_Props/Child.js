import React from 'react';

function Child({name='000', age='00', hobby='000'}) {
  return (
    <>
      <ul>
        <li>상품 사진</li>
        <li>이름 : {name}</li>
        <li>나이 : {age}</li>
        <li>취미 : {hobby}</li>
      </ul>
    </>
  );
}

export default Child;