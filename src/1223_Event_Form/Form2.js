import React, {useState} from 'react';

function Form2(props) {
  //변수선언
  let header = '';

  //상태관리 변수 선언과 초기값 설정하기
  const [name, setName] = useState('');
  const [pw_name, setPw] = useState('');

  //이름을 저장하기 위한 nameChange함수 작성
  const nameChange=(e)=>{//이름을 저장하기 위한 함수
    setName(e.target.value);//이름값 저장
  }
  //pw를 저장하기 위한 함수 pwChange
  const pwChange=(e)=>{//패스워드를 저장하기 위한 함수
    setPw(e.target.value); //패스워드값 저장
  }

  //조건식을 사용하여 값이 있을 경우에만 출력, 그렇지 않으면 공백으로 나오게 함.
  if(name){
    header=<p>사용자가 입력한 이름은 {name}이고, 패스워드는 {pw_name}입니다.</p>
  }else{
    header="";
  }

  //onDataReset버튼 클릭시 name, pw_name 초기화
  const onDataReset=(e)=>{
    setName('');
    setPw('');
  }

  return (
    <>
      <h4 className="title4">2. if문으로 조건식 작성하기</h4>

      {/* name, pw_name출력할 곳 */}
      {header}

      <form>
        <p>
          <label for="id_name">ID : </label>
          <input type="text" id="id_name" name="id_name" value={name} onChange={nameChange} />
        </p>

        <p>
          <label for="pw_name">PW : </label>
          <input type="text" id="pw_name" name="pw_name" value={pw_name} onChange={pwChange} />
        </p>
      </form>
      <p>
        <button tpye="button" onClick={onDataReset}>데이터 입력 초기화</button>
      </p>
    </>
  );
}

export default Form2;