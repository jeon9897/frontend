import React, {useRef, useState} from 'react';
import './ref.css';

function UseRef(props) {

  //1. pw, click, validate를 저장하기 위한 state선언
  const [inputs, setInputs] = useState({
    password:'', //패스워드 초기값
    clicked:false, //검증하기 버튼 초기값(누르지 않은 상태)
    validated:false //유효성검사 초기값
  });

  //2. 비구조화할당 방식
  const {password, clicked, validated} = inputs;

  //3. useRef선언
  const passwordInput = useRef(); //상단 첫줄에 useRef추가 확인해야....

  //4. 입력박스에 사용자가 패스워드를 입력하는 경우 실행하기 위한 함수
  const onInputChange=(e)=>{
    setInputs({
      password:e.target.value //입력한 패스워드 값을 변수에 담는다.
    })
  }

  //5. '검증하기'버튼 클릭시 해당 함수가 실행되어 패스워드 일치여부 확인
  const onInputCheck = (e) => {
    e.preventDefault(); //기본 이벤트 제거
    setInputs({
      clicked:true, //버튼 클릭시 상태값 true로 변경
      validated:password==='1234' //입력된 패스워드 값이 일치하는지 여부를 검사
    });

    if(password!=='1234'){
      passwordInput.current.focus(); //초첨이동하기
    }
  }

  //6. 패스워드 초기화 버튼 클릭시 해당요소에 값 지우기('')
  const onClear =(e)=>{
    setInputs({
      password:''
    });
  }

  return (
    <>
      <h3 className="title3">useRef를 통한 특정 DOM선택</h3>
      <p>ref는 '개발자가 특정 DOM요소를 선택해야 하는 상황이 발생될 때 사용하는 기능'으로서 클래스 콤포넌트에서 사용하지만 HOOKS에서 useRef함수가 추가되면서 함수형 콤포넌트에서도 사용이 가능합니다.</p>

      <p>javascript : DOM요소 선택 getElementById(), querySelector()</p>
      <p>jquery : DOM요소 선택 $('선택자') </p>
      <p>리액트의 JSX안에서 DOM에 id를 달면 해당 DOM을 렌더링 할 때 그대로 전달됩니다.</p>
      <p>컴포넌트가 여러개 생성되는 경우 같은 id가 중복되서 에러가 발생될 수 있습니다. 하지만 ref는 전역적으로 작동하지 않고, 콤포넌트 내부에서만 작동하기 때문에 이런 문제가 발생되지 않는다.</p>

      <dl>
        <dt>DOM을 꼭 사용해야 하는 상황</dt>
        <dd>특정 input태그에 포커스 주기</dd>
        <dd>스크롤 박스를 조작하기</dd>
        <dd>Canvas에 그림 그리기</dd>
        <dd>video play/pause 컨트롤 등</dd>
        <dd>기타....</dd>
      </dl>

      <h3 className="title3">실습응용. 입력양식을 만들고 버튼 클릭시 초점 처리하기</h3>

      <p>입력양식에 사용자가 내용을 입력하여 내용이 일치하면 특정 DOM요소를 선택하여 '초록색'배경 적용, 그렇지 않으면 다시 입력할 수 있도록 해당 DOM요소를 선택하여 초첨(focus, 주황색 배경)이 나오도록 한다.</p>
      
      <dl>
        <dt>ref, useRef를 사용하지 않는 폼태그의 문제점</dt>
        <dd>사용자가 클릭하고 값을 입력한 경우 아이디나 패스워드가 일치하면 상관없지만 틀린 경우는 다시 입력할 수 있도록 초점을 이동해야 한다.</dd>
        <dd>그래서 특정 DOM요소를 선택하기 위해 ref, useRef함수를 사용하여 초점이 정확하게 맞춰지도록 해야 함.(사용성 측면, UX)</dd>
      </dl>

      <form name="" method="" action="" className="formStyle">
        <fieldset>
          <legend>폼태그 제목</legend>
          <p>
            <input type="password" placeholder='패스워드 입력' value={password} onChange={onInputChange} ref={passwordInput} className={clicked&&(validated?'success':'failure')} />
          </p>
          <p>password박스는 삼항조건연산자(조건식?'참인값':'거짓인값';)로 서식 변경</p>
          <p>
            <input type="button" value="검증하기" onClick={onInputCheck} />
            <input type="button" value="패스워드 초기화" onClick={onClear} />      
          </p>
        </fieldset>
      </form>
    </>
  );
}

export default UseRef;