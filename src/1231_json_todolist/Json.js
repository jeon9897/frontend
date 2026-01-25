import React from 'react';
import BookStore from './BookStore';
import Customer from './Customer';
import Goods from './Goods';
import Noodle from './Noodle';import Orders from './Orders';
import Fruits from './Fruits';

function Json(props) {
  return (
    <>
      <h3 className="title3">JSON(제이슨, JavaScript Object Notation)</h3>
      <p>
        JavaScript Object Notation : 속성-값 쌍( attribute-value pairs and array data types (or any other serializable value)) 또는 "키-값 쌍"으로 이루어진 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷
        </p>
      <p>
        비동기 브라우저/서버 통신(Ajax)을 위해, 넓게는 XML(Ajax가 사용)을 대체하는 주요 데이터 포멧이다. 특히 인터넷에서 자료를 주고 받을 때 그 자료를 표현하는 방법으로 알려져 있다.
        </p>
      <p>
        자료의 종류에 큰 제한은 없으며, 특히 컴퓨터 프로그램의 변수값을 표현하는데 적합하다.
        </p>
      <p>
        본래는 자바스크립트 언어로부터 파생되어 자바스크립트의 구문 형식을 따르지만 언어 독립형 데이터 포멧이다.
        </p>
      <p>
        프로그래밍 언어나 플랫폼에 독립적이므로, 구문 분석 및 json데이터 생성을 위한 코드는 C, C++, C#, 자바(java), 자바스크립트, 펄, 파이썬 등 수많은 프로그래밍 언어에서 쉽게 이용할 수 있다.
        </p>
      <p>json데이터 파일의 확장자는 '.json'이다.</p>

      <dl>
        <dt>DB에서 저장한 JSON데이터 파일을 import하여 map함수로 출력하기</dt>
        <dd>1. BookStore</dd>
        <dd>2. Customer</dd>
        <dd>3. Goods</dd>
        <dd>4. Noodle(비동기)</dd>
        <dd>5. Orders</dd>
        <dd>6. Fruits(비동기)</dd>
      </dl>
      
      <hr />
      <BookStore /><hr />
      <Customer /><hr />
      <Goods /><hr />
      <Noodle /><hr />
      <Orders /><hr />
      <Fruits /><hr />

    </>
  );
}

export default Json;