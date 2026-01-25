import React, {useState} from 'react';

function Form5(props) {
  
  // 1.  상태변수 만들기
  const [formData, setFormData] = useState({
    name:'', //이름
    age:null //나이
  });

  //2. 입력을 하면 각각 이름, 나이를 저장
  const nameChange=(e)=>{
    const {name, value} = e.target; //이름, 나이 저장
    setFormData(prev=>({
      ...prev, //새로운 배열객체에 데이터 저장
      [name]:value
    }));
  }

  //전송 버튼 클릭시 나이 데이터(숫자) 유효성 검사하기
  const dataSubmit=(e)=>{
    e.preventDefault(); //새로고침 방지
    const age = formData.age;
    if(!Number(age)){ //나이가 숫자데이터가 아니라면
      alert('나이는 숫자로 입력을 하셔야 합니다.'); //메세지 띄움
    }else{//나이가 숫자일 경우
      console.log('전송데이터 : ', formData); //콘솔창에 데이터 출력
    }
  }

  return (
    <>
      <h4 className="title4">5. 데이터 전송시 유효성 검사하기</h4>
      <p>* 이름, 나이 입력시 이름은 문자, 나이는 숫자로 입력해야 하되 나이가 숫자 데이터가 아니면 오류 메세지나 나올 수 있도록 해야 함.</p>
      <p>* if문을 사용하여 state값 중 나이가 숫자가 아니면 'alert 메서드'로 경고창을 띄움</p>
      <p>* 나이는 숫자 데이터이기 때문에 Number형으로 변환해야 함.</p>

      <form onSubmit={dataSubmit}>
        출력 내용 : 
        <p><strong>이름 : {formData.name}</strong></p>
        <p><strong>나이 : {formData.age}</strong></p>

        <p>
          <label for="name">이름을 입력하세요 : </label>
          <input type="text" name="name" id="name" onChange={nameChange} value={formData.name} />
        </p>

        <p>
          <label for="age">나이를 입력하세요 : </label>
          <input type="text" name="age" id="age" onChange={nameChange} value={formData.age || ''} />
          {/* 숫자데이터 값이 있으면 표시 혹은 없으면 공백으로 처리 */}
        </p>

        <p>
          <button type="submit">전송하기</button>
        </p>
      </form>
    </>
  );
}

export default Form5;