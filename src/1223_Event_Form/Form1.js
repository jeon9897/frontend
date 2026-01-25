import React, {useState} from 'react';

function Form1(props) {
  //상태 변수선언
  //[변수명, 함수명] = useState(''); //state값
  const [name, setName] = useState('');

  //사용자가 입력양식에 글을 입력함(e)과 동시에 함수 실행 nameChange
  const nameChange=(e)=>{
    setName(e.target.value); //상태값을 함수에 담는다.
  }

  // 이름 초기화  함수 nameReset
  const nameReset =()=>{
    //alert('초기화 버튼입니다.');
    //input[type] name속성인 태그의 value값을 ''으로 처리
    setName(''); //상태관리 함수를 호출하면 ''빈값을 넣어준다.==값 비우기
  }

  return (
    <>
      <h4 className="title4">1. 기본 입력폼 양식</h4>
      <form>
        <p>이름을 작성하세요.</p>
        <p>입력한 값 : {name}</p>
        <input type="text" value={name} name="name" onChange={nameChange}/>
        <input type="button" value="초기화" onClick={nameReset} />

        <ul>
          <li>input태그의 값이 변경되면 'onChange'이벤트를 사용하여 문단태그(p)에 텍스트 값(name)이 변경되는 내용을 작성하기</li>
          <li>HTML 폼태그는 일반적으로 DOM에 의해 처리됨</li>
          <li>React 폼태그는 일반적으로 콤포넌트에 의해 처리됨</li>
          <li>콤포넌트가 데이터를 처리하면 모든 데이터가 state에 저장됨.</li>
        </ul>
      </form>
    </>
  );
}

export default Form1;