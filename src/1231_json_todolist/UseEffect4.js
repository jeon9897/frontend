import React, {useState, useEffect} from 'react';

function UseEffect4(props) {
  const [width, setWidth] = useState(window.innerWidth);//브라우저 창 너비값
  const [height, setHeight] = useState(window.innerHeight);//브라우저 창 높이값

  useEffect(()=>{
    const handleResize=()=>{
      setWidth(window.innerWidth); //브라우저 창 너비값(패딩값 포함)
      setHeight(window.innerHeight); //브라우저 창 높이값(패딩값 포함)
    }
    //화면크기를 조정하면 가로, 세로크기값 저장
    window.addEventListener('resize', handleResize);

    return()=>{
      window.removeEventListener('resize', handleResize);
    }
  },[]);

  return (
    <>
      <h3>useEffect예제 4. - 윈도우 리사이즈 이벤트 감지하기</h3>
      <p>브라우저의 가로크기를 조절하여 값 확인하기</p>
      <p>현재창 너비는 : {width}px 입니다.</p>
      <p>현재창의 높이는 : {height}px 입니다.</p>

      <ul className="list01">
        <li>화면 로드 시 현재 window.innerWidth, window.innerHeight를 상태에 저장</li>
        <li>브라우저 창 크기가 변경되면 resize 이벤트 발생</li>
        <li>handleResize 함수가 실행되어 width, height 상태를 업데이트</li>
        <li>UI에 즉시 변경된 창 크기가 반영</li>
        <li>컴포넌트가 제거될 때 removeEventListener로 이벤트 정리</li>
        <li>브라우저 크기가 다시 변경되면 화면이 다시 렌더링됨</li>
      </ul>
    </>
  );
}

export default UseEffect4;