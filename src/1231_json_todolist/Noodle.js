import React from 'react';
import dummy from './data/noodle.json'

function Noodle(props) {
  return (
    <>
      <h4>Noodle 데이터 출력하기</h4>
      <ul className="list01">
        {dummy.slice(0,5).map(noodle=>(
          <li key={noodle.num}>
            상품명 : {noodle.name}
            제조회사 : {noodle.company}
            라면종류 : {noodle.kind}
            상품가격 : {noodle.price}
            상품제조일 : {noodle.e_date}
          </li>
        ))
        }
      </ul>
    </>
  );
}

export default Noodle;