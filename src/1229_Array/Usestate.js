import React, {useState} from 'react';

function Usestate(props) {

  const style={
    width:'300px',
    padding:'10px',
    margin:'10px',
    border:'3px solid #f00'
  }
  const button={
    padding:'3px 10px',
    fontSize:'20px',
    margin:'0px 4px'
  }

  //const [변수명, 함수명] = useState('기본값');
  const [num, setNum] = useState(1); //초기값 1  == 수량
  const price = 7300;
  const total = num*price; //계산공식

  //onInCrese함수  기존값에 1을 더한다.
  const onIncrese =()=>{
    setNum(num+1);
  }

  //onDecrease함수 기존값에 1씩 뺀다. 만약 상태변수값이 1일 경우 1로 설정해야
  const onDecrese=()=>{
    if(num==1){ //num가 1이라면
      setNum(1); //setNum에 1값을 넣어줌
    }else{ //그렇지 않다면
      setNum(num-1); //기존값에 1을 뺀다.
    }
  }

  //값 초기화하기
  const onReset=()=>{
    setNum(1);
  }
  

  return (
    <>
      <h3>React함수형 콤포넌트를 위한 Hooks</h3>
      <p>리액트에서 상태관리(데이터 관리)를 위한 userState()함수 이해하기</p>
      <p>클래스형 콤포넌트는 state값을 바로 사용가능 했습니다. 하지만 함수형 콤포넌트에서는 state값을 사용할 수 없었는데, 리액트 버전 16.8이상부터는 useState()함수가 추가되어 함수형 콤포넌트에서도 state값을 사용할 수 있게 되었습니다.</p>
      <p>state는 자신 컴포넌트가 '유동적으로 변경될 값'을 관리할 때 사용합니다.</p>
      <p>useState()함수 사용시 import React, {useState} 함수를 추가해야 합니다.</p>

      <dl>
        <dt>문법)</dt>
        <dd>const [값변수, 값변경을 위한 함수] = useState(기본값);</dd>
        <dd>const 값변경을 위한 함수 = (); //내용</dd>
        <dd>const 스테이트 값을 갖고 오는 변수 = useState(기본값);</dd>
        <dd>const 스테이트 값 변수 = 스테이트 갖고 오는 변수[0];</dd>
        <dd>const 변경될 스테이트값 변수 = 스테이트 갖고 오는 변수[1];</dd>
      </dl>

      <div style={style}>
        <p>값 변화 : {num}</p>
        <input type="button" value="-" onClick={onDecrese} style={button} />
        <input type="button" value="+" onClick={onIncrese} style={button} />
        <p>상품가격 : 7,300원</p>
        <p>주문가격 : {total.toLocaleString()}원</p>

        <p>값 초기화 하기 : <input type="button" value="값 초기화" onClick={onReset} style={button} /> </p>
      </div>
    </>
  );
}

export default Usestate;