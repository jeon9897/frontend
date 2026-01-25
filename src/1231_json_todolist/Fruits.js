import React from 'react';
import dummy from './data/fruit.json'

function Fruits(props) {
  return (
    <>
      <h4>Fruits 데이터 출력하기</h4>
      <ul className="list01">
        {dummy.slice(0,5).map(fruit=>(
          <li key={fruit.num}>
            과일명 : {fruit.name}
            과일색상 : {fruit.color}
            원산지 : {fruit.country}
          </li>
        ))
        }
      </ul>
    </>
  );
}

export default Fruits;