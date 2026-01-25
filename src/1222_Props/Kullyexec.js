import React, {useState} from 'react';

//rsc  화살표 함수가 들어간 콤포넌트
const Counter2 = () => {

  //상태값을 관리하기 위한 useState함수
    //초기값 설정
    const product_price = 14320; //고정값
  
    //const [변수명, 함수명] = useState();
    const [num, setNum] = useState(1); //초기값
    const [price, setPrice] = useState(product_price);//가격 초기값
  
    //1씩 더하는 함수
    const onPlus=()=>{
      const newNum = num+1; //1씩 더하기
      setNum(newNum);
      setPrice(newNum*product_price); //수량*가격
    }
  
  ///Line 18:11:  Expected '===' and instead saw '=='  eqeqeq
  //== 값이 일치하는 경우
  //=== 값, 형식이 일치하는 경우
  
    //1씩 감소하는 함수
    const onMinus=()=>{
      if(num===1) return; //num값이 1일 경우 
        
      const newNum = num-1; //1씩 감소
      setNum(newNum);
      setPrice(product_price*newNum); //수량*가격   
  }

  return (
    <>
      <div>
          <input type="button" value="-" className="btn" onClick={onMinus} />
          
          숫자출력 : <span className="num">
            {num}
          </span>

          <input type="button" value="+" className="btn" onClick={onPlus} />
          <p>
            가격 : {price.toLocaleString()} 원
          </p>
        </div>
    </>
  );
};

export default Counter2;