import React, {useState} from 'react';

function Form4(props) {

  //1. 상태변수가 선언하기
  // const [name, setName] = useState('');
  // const [id_txt, setId] = useState('');

  //2. 상태변수 여러개를 한꺼번에 담기
  const [formData, setFormData] = useState({
    name:'',
    id_txt:'',
  });

  //3. 입력폼에 데이터 입력시 각각 상태변수에 저장하기
  const nameChange=(e)=>{
  //   setName(e.target.value);
  // }
  // const id_txtChange=(e)=>{
  //   setId(e.target.value);
  // }

    const {name, value} = e.target;
    setFormData((prev)=>({
      ...prev,  //es6문법 스프레드 연산자(...) - 기존배열에 새로운 배열을 추가
      [name]:value
    }));
  }

  //다시쓰기 버튼 클릭시 이름, 아이디 내용 삭제하기
  const onDelete =()=>{
    // setName(''); //각각 상태값 초기화
    // setId(''); //각각 상태값 초기화

    setFormData({
      name:'',
      id_txt:''
    })
  };

  return (
    <>
      <h4 class="title4">4. 여러개의 input태그의 데이터 관리하기</h4>
      <ul>
        <li>e.target.value : 값(value)에 접근하기</li>
        <li>e.target.name : name 속성값에 접근하기</li>
        <li>state를 사용하여 입력값 관리</li>
        <li>onChange 이벤트를 통해 상태 업데이트</li>
        <li>useState함수를 사용하여 상태 관리값을 한꺼번에 선언하고 관리 할 수 있다.</li>
      </ul>

      <form>
        <p>출력내용(이름) : </p>
        <input type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={nameChange}
        />

        <p>출력내용(아이디) : </p>
        <input type="text" 
          id="id"
          name="id_txt"
          value={formData.id_txt}
          onChange={nameChange}
        />
      </form>

      <p>입력하신 이름은 '{formData.name}'이고, 아이디는 '{formData.id_txt}'입니다.</p>

      <input type="button" value="다시쓰기" onClick={onDelete} />
    </>
  );
}

export default Form4;