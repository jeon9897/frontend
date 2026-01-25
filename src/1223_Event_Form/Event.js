import React from 'react';

function Event(props) {
  //객체 생성하기
  const shoot=()=>{
    alert('슛!~');
  }

  //매개변수가 있는 함수 호출하여 실행
  const shoot2=(txt)=>{
    alert(txt);
  }
  return (
    <>
      <h3 className="title3">이벤트(EVENT)</h3>
      <dl>
        <dt>이벤트(EVENT)란?</dt>
        <dd>- 사용자가 웹브라우저에서 DOM요소들과 상호작용하는 것</dd>
        <dd>- React에서 이벤트는 HTML과 동일한 이벤트를 갖습니다.</dd>
        <dd>- 이벤트는 DOM요소에서만 줄 수 있고, 우리가 생성한 컴포넌트에는 줄 수 없습니다.</dd>
      </dl>
      <p>리액트에서는 DOM을 직접적으로 조작하지 않습니다. 가상돔(Virtual DOM)을 통해 변경된 부분만 업데이트를 하기 때문에 UI상태가 불일치 발생 가능성이 있기 때문.</p>

      <h4 className="title4">1. HTML에서의 이벤트 - 이벤트명 작성시 모두 소문자로 작성해야</h4>
      <p>요소 onclick='함수명();'</p>
      <p><button onClick={shoot}>눌러보세요</button></p>
      <p><button onClick={()=>shoot2('매개변수를 전달하여 출력도 가능합니다.')}>눌러보세요</button></p>

      <h4 className="title4">2. React에서의 이벤트</h4>
      <p>리액트에서는 onClick 단어 중간에 'C' 대문자임</p>
      <p>요소 onClick={/*함수명*/}함수명</p>
      <p>요소 onClick={/*this.함수명*/}함수명</p>
      <p>class컴포넌트에서는 함수가 메서드화 처리되는 것이므로 this를 반드시 작성해야 함.</p>
    </>
  );
}

export default Event;