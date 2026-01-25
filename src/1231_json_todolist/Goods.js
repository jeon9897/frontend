import React from 'react';
import dummy from './data/goods.json'

function Goods(props) {
  return (
    <>
      <h4>Goods 데이터 출력하기</h4>
      <ul className="list01">
        {dummy.slice(0,5).map(goods=>(
          <li key={goods.g_code}>
            상품명 : {goods.g_name}
            상품가격 : {goods.g_cost}
          </li>
        ))
        }
      </ul>
    </>
  );
}

export default Goods;