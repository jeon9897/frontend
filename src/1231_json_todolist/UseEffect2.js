import React, {useEffect} from 'react';

function UseEffect2(props) {
  useEffect(()=>{
    console.log('콤포넌트가 마운트될 때 출력됨.');
  },[]); //빈 배열 : 처음 렌더링 될 때 한번만 실행됨.

  return (
    <>
      <p>useEffect로 내용 출력하기</p>
    </>
  );
}

export default UseEffect2;