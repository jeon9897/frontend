import React, {useState} from 'react';

function Form3(props) {

  //1. 상태값을 저장하기 위한 변수 선언
  const [name, setName] = useState(''); //이름 저장
  const [result, setResult] = useState('');//전송버튼 클릭시 내용을 저장하기 위한 상태변수

  //2. nameChange함수
  const nameChange=(e)=>{ //입력하면서 이벤트가 발생
    setName(e.target.value); //입력한 값이 상태변수에 담겨 출력됨
  }

  //3. 전송버튼 클릭시 실행되는 함수
  const dataSubmit=(e)=>{
    e.preventDefault();//새로고침 방지
    setResult(`입력하신 이름은 : ${name}입니다.`); 
  }

  return (
    <>
      <form onSubmit={dataSubmit}>
        <h4 className="title4">3. onSubmit(전송버튼)으로 입력한 내용 전송하기</h4>

        <p>사용자가 입력한 이름은 <strong>{name}</strong>입니다.</p>

        <p id="result">{result && <strong>{result}</strong>}</p>

        <input type="text" name="name" onChange={nameChange} />
        <button type="submit">전송하기</button>
      </form>
    </>
  );
}

export default Form3;