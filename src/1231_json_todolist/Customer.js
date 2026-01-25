import React from 'react';
import dummy from './data/customer.json';

function Customer(props) {
  return (
    <>
      <h4>Customer데이터 출력하기</h4>
      <ul className="list01">
        {dummy.map(customer=>(
          <li key={customer.c_name}>
            레스토랑명 : {customer.c_name}
            주소 : {customer.c_address}
            연락처 : {customer.c_tel}
          </li>
        ))
        }
      </ul>
    </>
  );
}

export default Customer;