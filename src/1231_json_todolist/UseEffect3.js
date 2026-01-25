import React, {useState, useEffect} from 'react';

function UseEffect3(props) {
  //1. 상태값 초기값 설정
    const [seconds, setSeconds] = useState(0);

  //2. 컴포넌트 마운트시 1회만 실행 = useEffect설정
  useEffect(()=>{
    const interval = setInterval(()=>{ //매초마다 초를 1씩 증가
      setSeconds(prev=>prev+1);
    },1000);

    return()=>{ //컴포넌트 언마운트시 타이머 정리
      clearInterval(interval);
      console.log('타이머 정리');
    }
  });    

  return (
    <>
      <h3>useEffect예제 - 타이머 설정과 정리</h3>
      <div>타이머 : {seconds}초</div>
    </>
  );
}

export default UseEffect3;