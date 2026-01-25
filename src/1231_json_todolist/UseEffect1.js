import React, { useState, useEffect } from "react";

function UseEffect1() {
  //1. 상태변수, 상태함수 = 초기값 설정
  const [count, setCount] = useState(0);

  useEffect(() => {
    //콤포넌트가 마운트될 때 출력됨
    console.log(`count가 변경됨 → 현재 값: ${count}`);
  }, [count]); // count 변경될 때만 실행

  return (
    <>
      <p>현재 count: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
      
    </>
  );
}

export default UseEffect1;