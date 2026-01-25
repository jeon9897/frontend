import React, {useState} from 'react';

function LoginForm(props) {

  //1. 상태값 초기화 == 변수선언
  // const [username, setName] = useState('');  
  // const [userid, setId] = useState('');  

  //1. 상태값이 여러개일 경우 아래 방법을 사용
  const [inputs, setInputs] = useState({
    username:'',
    userid:''
  });

  //2. 값을 입력받아 내용을 저장한다.
  const {username, userid} = inputs;

  //3. 함수를 작성한다. //사용자가 입력폼에 입력을 하면 바로 함수가 동작
  const onDataChange=(e)=>{
    const{value, name} = e.target;  //각 input의 name속성값을 변수에 저장

    setInputs({
      ...inputs, //기존 input객체를 복사
      [name]:value //name키를 가진 값을 value로 설정

      /// ...(스프레드 연산자) - 기존 객체를 복사하여 새로운 객체에 추가하기
    });
  }

  //4. 데이터 초기화
  const onDataReset=(e)=>{
    setInputs({
      username:'',
      userid:''
    });
  }

  return (
    <>
      <h3 className="title3">useState함수를 활용하여 입력폼 '이름', '아이디' 입력하면 아래 내용 출력하고 '초기화'메뉴 클릭시 내용 비우기</h3>

      <ul className="list01">
        <li>여러개의 input요소 사용시 사용될 속성 name, value설정</li>
        <li>e.target.value //이벤트를 받는 타겟의 value값</li>
        <li>e.target.name //이벤트를 받는 타겟의 name값</li>
      </ul>

      <fieldset>
        <legend>폼그룹</legend>
        <p>
          <label for="user_name">이름 : </label>
          <input type="text" placeholder="이름을 입력하세요." name="username" value={username} onChange={onDataChange} id="user_name" />
        </p>
        <p>
          <label for="id_name">아이디 : </label>
          <input type="text" placeholder="아이디를 입력하세요" name="userid" value={userid} onChange={onDataChange} id="id_name" />
        </p>

        <input type="button" value="데이터 초기화하기" onClick={onDataReset} />

        <p>값 출력하기 : {username} : ({userid})</p>
      </fieldset>

      <dl>
        <dt>요약 설명</dt>
        <dd>값이 1개일 경우 useState()함수에 값을 그냥 적으면 기본값이 들어간다.</dd>
        <dd>하지만 상태값을 관리하기 위한 값이 2개 이기 때문에 2개를 관리하기 위해 따로 설정함.(username, userid) = 그럴때는 useState()함수에 객체로 입력하면 된다.</dd>
        <dt>객체의 속성으로 값을 호출하는 방법은 아래와 같다.</dt>
        <dd>inputs.username;</dd>
        <dd>inputs.userid;</dd>
        <dt>객체 비구조화 할당 방법으로 처리하기</dt>
        <dd>const username, userid; = inputs;</dd>
        <dd>... 기호 : 기존 inputs값을 복사해 오라는 의미로 나머지 패턴</dd>
        <dd>이때 객체의 모든 내용을 모두 펼쳐서 복사해 준다.</dd>
        <dd>[name] : value 에서 대괄호, 객체 안에서 key[]로 감싸면 그 안에 있는 속성명이 가리키는 실제값을 key값으로 사용된다.</dd>
      </dl>
    </>
  );
}

export default LoginForm;