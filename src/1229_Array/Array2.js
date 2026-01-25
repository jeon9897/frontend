import React from 'react';

function Array2(props) {
  // 스크립트 작성하기
  //1. for문으로 배열 데이터 출력하기
  //for(초기값;조건식;증감식){실행할 내용;}

  //배열데이터 작성하기
  const numbers = [1, 3, 5];

  console.log(numbers); //배열 데이터를 한꺼번에 출력

  for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
  }

  //2. map함수를 사용하여 숫자데이터 출력
  const numbers2 = [1, 3, 5];
  const listItems = numbers2.map((number,idx)=>{
    console.log(number);
    return <span key={idx}>{number}</span>;
  });

  //const 객체명 = 기존 배열명.map((배열내 현재값, 배열내 현재 인덱스)=>{
    //출력할 값;
  //})

  //3. map함수로 요일 출력하기
  const yoils = ['일', '월', '화', '수', '목', '금', '토'];
  const yData = yoils.map((yoil,i)=>{
    console.log('(' + yoil + ')'); //콘솔모드에 출력
    return <span key={i}>{yoil}</span> //span태그로 출력
  });

  //4. map함수로 영문자 요일+이모지 아이콘 출력하기
  const yoils2 = ['sun','mon','the','wed','the','fri','sat'];
  const yData2 = yoils2.map((yoil,i)=>{
    console.log('(😃'+ yoil + ')');
    //이모지 아이콘 window 로고키 + . or ;
    return <span key={i}>{yoil}</span>
  });

  //5. map함수로 숫자에 제곱근 구하여 출력하기
  const numbers3 = [4, 9, 16, 25, 36];
  const result = numbers3.map(Math.sqrt); //sqrt(제곱근)
  console.log(result);//2,3,4,5,6

  //6. map함수로 기존 배열값에 *2를 연산한 결과를 출력하기
  const numbers4 = [1,2,3,4,5,6,7,8,9,10];
  const result1 = numbers4.map(number=>number*2);  //화살표 함수
  //2,4,6,8,10,12,14,16,18,20

  const result2 = numbers4.map(function(number){ //일반함수
    return number*2;
  });

  //7. 학생 배열데이터 객체 생성
  const students = [
    {id:1, name:'이순신'},
    {id:2, name:'홍길동'},
    {id:3, name:'강감찬'},
    {id:4, name:'유관순'}
  ];

  //학생 이름만 새로운 데이터 배열로 만들어서 출력하기
  const names = students.map(student=>'('+student.id+')'+student.name);
  console.log(names);  //(1)이순신,(2)홍길동,(3)강감찬,(4)유관순

  //8. 과일 배열 데이터에서 소문자를 대문자로 변환하여 새로운 배열 출력하기
  const fruits = ['apple, banana, cherry, grape, orange'];
  const Fruits = fruits.map(fruit=>(fruit.toUpperCase()));

  return (
    <>
      <dl>
        <dt>* 배열 복습하기</dt>
        <dd>- 연관된 데이터를 출력하는 방법에 대해 학습</dd>
        <dd>- map함수는 기존의 배열을 실행한 결과를 가지고 새로운 배열을 만들고자 할 때 사용한다.</dd>
        <dd>- array.map((현재 배열값, 배열내 현재값 인덱스, 현재 배열), 함수내에서 this로 사용될 값)</dd>
      </dl>

      <br />
      <ol className="list01">
        <li>숫자 데이터 배열을 for문으로 출력해보기</li>
        <li>숫자 데이터 배열을 map함수로 출력해보기</li>
        <li>map함수로 '요일' 데이터 출력해보기</li>
        <li>map함수로 '특수문자 + 요일' 출력해보기</li>
        <li>map함수로 '제곱근' 출력해보기</li>
        <li>map함수로 '숫자 배열에*2' 출력해보기</li>
        <li>객체 타입의 데이터 출력해보기</li>
      </ol>

      <br />

      <p>map함수는 기존의 배열 callbackFunction에 의해서 새로운 배열을 만들기 위한 함수이다. 기존 배열에는 영향을 미치지 않는다.</p>

      <p>map함수로 데이터 출력하기(숫자) : {listItems}</p>
      <p>map함수로 데이터 출력하기(요일) : {yData}</p>
      <p>map함수로 데이터 출력하기(요일+이모지 아이콘) : {yData2}</p>
      <p>map함수로 제곱근 출력하기 : {result}</p>
      <p>map함수로 숫자배열에 * 2하기(화살표 함수) : {result1}</p>
      <p>map함수로 숫자배열에 * 2하기(일반 함수) : {result2}</p>
      <p>map함수로 학생 배열 데이터에서 이름만 출력하기 : {names}</p>
      <p>map함수로 영문자 소문자를 대문자로 변경하여 출력하기 : {Fruits}</p>
      <pre>const fruits = ['apple, banana, cherry, grape, orange']</pre>
      {/* 영문 소문자를 대문자로 전환 하는 메소드 toUpperCase() */}
    </>
  );
}

export default Array2;