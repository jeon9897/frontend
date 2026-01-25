import React, {useState} from 'react';

//rsc  화살표 함수가 들어간 콤포넌트
const Counter2 = () => {

  //상태값을 관리하기 위한 useState함수

  //const [변수명, 함수명] = useState();
  const [num1, setNum] = useState(1); //초기값

  //1씩 더하는 함수
  const onPlus1=()=>{
    setNum(num1+1); //1씩 더하기
  }

///Line 18:11:  Expected '===' and instead saw '=='  eqeqeq
//== 값이 일치하는 경우
//=== 값, 형식이 일치하는 경우

  //1씩 감소하는 함수
  const onMinus1=()=>{
    if(num1===1){ //num값이 1일 경우
      setNum(1);//1로 초기화
    }else{ //그렇지 않은 경우
      setNum(num1-1); //1씩 감소
    }    
  }

  return (
    <>
      <p>+, - 버튼을 클릭하면 숫자증가, 숫자 감소하는 state값을 작성하기</p>
      <div>
          <input type="button" value="-" className="btn" onClick={onMinus1} />

          숫자출력 : <span className="num">
            {num1}
          </span>

          <input type="button" value="+" className="btn" onClick={onPlus1} />
          
        </div>
    </>
  );
};

export default Counter2;