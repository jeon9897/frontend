import React from 'react';
import Main from './Main';

function Array1(props) {
  //1차원 배열
  //const names = ['홍길동','이순신','강감찬','유관순'];

  //2차원 배열
  const students = [
    {id:1, name:'홍길동'},
    {id:2, name:'이순신'},
    {id:3, name:'강감찬'},
    {id:4, name:'유관순'}
  ]

  //map함수로 기존 배열을 복사하여 새로운 배열을 만들고 출력한다.
  const studentList = students.map((student)=>(<Main key={student.id} id={student.id} name={student.name} />));

  return (
    <>
      <h4>부모 콤포넌트가 내려준 값을 자식콤포넌트에서 받아 출력하기, props </h4>

      {studentList}

      <h3>반복 출력을 위한 배열 데이터 다루기</h3>
      <p>반복문의 종류, 문법을 익히고 데이터를 출력해 본다.</p>
      <ul className="list01">
        <li>for문</li>
        <li>while문</li>
        <li>do while문</li>
      </ul>

      <ol className="list01">
        <li>for문을 활용하여 데이터 반복출력 : for(초기값;조건식;증감식) 출력할 내용;</li>
        <li>map함수 - 배열을 순회해서 각 요소를 콜백함수로 적용하여 처리해 모은 새로운 배열을 반환하기 위한 함수. map함수에 전달되는 콜백함수는 '각 요소를 변환하여 새로운 배열로 매핑하는 역할을 한다. 매핑된 결과를 새로운 배열로 반환하기 때문에 이 함수의 이름이 'map'이다. 원본 배열은 변경하지 않으면서 해당 배열 요소에 대한 규칙적인 '새로운 배열을 생성'하고자 할 때 사용한다.</li>
        <li>배열 데이터 출력하기 - 배열 데이터를 가지고 다양한 방법으로 출력해보기</li>
      </ol>
      <p>문법: array.reduce(callback(accumulator, currentValue, index, array), initialValue)</p>   
    </>
  );
}

export default Array1;