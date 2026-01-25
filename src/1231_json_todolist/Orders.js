import React from 'react';
import dummy from './data/orders.json'

function Orders(props) {
  return (
    <>
      <h4>Orders 데이터 출력하기</h4>
      <ul className="list01">
        {dummy.slice(0,4).map(order=>(
          <li key={order.o_day}>
            주문일 : {order.o_day}
            주문자 : {order.c_name}
            상품코드 : {order.g_code}
            주문수량 : {order.g_num}
          </li>
        ))
        }
      </ul>
    </>
  );
}

export default Orders;