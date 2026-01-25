import React, {useState} from 'react';

function Form6(props) {
  //상태변수
  const [description, setDescription] = useState('리액트에서 textarea박스에 기본값 출력하기');
  const [menu, setMenu] = useState(''); //기본값은 없음

  //사용자가 select, option을 선택하면 함수가 실행
  const menuChange =(e) =>{
    setMenu(e.target.value);
    //console.log(menu); //상태 변수값을 출력시 그 이전값이 나옴 
    console.log(e.target.value);//현재 선택한 변수값이 나옴
  }

  // textarea박스에 값을 입력시 데이터 저장
  const handleChange = (e) =>{
    setDescription(e.target.value);
  }

  //사용자 정의 객체
  const txt_color_red={
    color:'#f00'
  }

  return (
    <>
      <h4 className="title4">6. textarea, select태그 사용하기</h4>
      <p>html태그에서는 textarea를 작성하고 안에 내용을 적지만 React jsx문법에서는 textarea value="함수명"으로 작성해야 한다.</p>

      <pre>
        *html문법    <textarea>내용적기</textarea>

        <br /><br />

        *jsx문법
        <br />
        
        textarea value=내용적기

      </pre>
      <br />
      <textarea 
        name="content" id="content" cols="30" rows="10"
        value={description}
        onChange={handleChange}
      />

      {/* <p>textarea에 입력한 내용 출력하기 : <span style={{color:'#f00'}}>{description}</span></p> */}
      <p>textarea에 입력한 내용 출력하기 : <span style={txt_color_red}>{description}</span></p>

      <p>select옵션 태그로 값 선택시 출력하기</p>
      <pre>
      * html태그 문법 <br />
      <select>
        <option value="">선택하세요</option>
        <option value="옵션값1">옵션값1</option>
        <option value="옵션값2">옵션값2</option>
        <option value="옵션값3">옵션값3</option>
        <option value="옵션값4">옵션값4</option>
      </select>

<br /><br />

      *jsx문법<br />
      <select value="변수">
        <option value="">선택하세요</option>
        <option value="옵션값1">옵션값1</option>
        <option value="옵션값2">옵션값2</option>
        <option value="옵션값3">옵션값3</option>
        <option value="옵션값4">옵션값4</option>
      </select>
      <br /><br />
      * select태그에 작성한 value속성에 작성한 값이 선택 됨.<br />
      </pre>
      <br />

      <h4 className="title4">7. 맛있는 점심메뉴를 선택하세요.</h4>
      <select value={menu} onChange={menuChange}>
        <option value="">메뉴를 선택하세요</option>
        <option value="샐러드">샐러드</option>
        <option value="김밥과 라면">김밥과 라면</option>
        <option value="김치찌개">김치찌개</option>
        <option value="갈비탕">갈비탕</option>
        <option value="콩나물국">콩나물국</option>
        <option value="자장면">자장면</option>
        <option value="라볶이">라볶이</option>
        <option value="햄버거">햄버거</option>
        <option value="스테이크">스테이크</option>
      </select>

      <p>내가 선택한 오늘의 점심 메뉴는 <span>'{menu}'</span> 입니다.</p>

      <ul>
        <li>console.log(menu) - useState상태 업데이트가 비동기적으로 처리되기 때문에 이전 값이 출력됨.</li>
        <li>수정할 부분 : setMenu(e.target.value); console.log(menu)</li>
        <li>개선된 방법 1 : console.log(e.target.value)</li>
        <li>개선된 방법 2 : useEffect함수를 사용<br />
          <pre>
    {/*
            1번줄 : import { useEffect } from 'react';

            중간코드에 삽입

            useEffect(()=>{
              console.log('선택한 메뉴:', menu);
            },[menu]); //사용자가 선택할 때 즉시 값 변경됨

            useEffect() 함수는 화면에 내용이 모두 출력되고 난 뒤 실행되는 함수로서 
            //1. 데이터를 가져오고자 할 때
            //2. 이벤트를 등록/해제 하고자 할 때
            //3. state(상태)가 변화할 때 사용한다. 
    */}
          </pre>
        </li>
      </ul>
    </>
  );
}

export default Form6;