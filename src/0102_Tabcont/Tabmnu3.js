import React, { useState } from 'react';
import './css/Tabmnu.css';

const Tabmnu3=()=>{
  //1. useState선언  const [변수명, 함수명] = useState();
  const [menuNum, setMenuNum] = useState('Home');

  //2. 내용을 담는 배열 객체 선언
  const tabs=[
    {title:'Home', content:'메인화면'},
    {title:'About', content:'소개'},
    {title:'Contact', content:'문의하기'},
  ];

  //3. 상태값과 일치하는 제목과 내용을 찾아서 변수에 담는다.
  const activeTabContent = tabs.find((tab)=>tab.title===menuNum)?.content;

  // ?.  옵셔널 체이닝 기법
  // tabs.find의 결과값이 undefinded 또는 null값이면 undefined값을 반환
  // 값이 있는 경우는 .content에 접근 가능

  // tabs.find((tab) => tab.title === menuNum).content;
  // find결과가 무조건 객체로 인식하여 오류가 날 수 있음
  // TypeError: Cannot read properties of undefined
  
  // $().메서드().메서드

  return (
    <>
      <article>
        <h3>Tabmnu3 구현하기</h3>
        <p>map함수 활용 - 배열 객체 활용</p>
        <nav className="menu_list">
          <ul>
            {tabs.map((tab)=>(
              <li
              key={tab.title}
              onClick={()=>setMenuNum(tab.title)}
              className={menuNum ===tab.title?'act':''}
              >
                {tab.title} 
              </li>
            ))}
          </ul>
        </nav>

{/* 상태값 변수가 menuNum를 아래 콘텐츠 1, 2, 3, 4 박스안에 출력하기 */}
        <div className="tab_content">
          <div className="content">{activeTabContent}</div>
        </div>
      </article>
    </>
  );
}

export default Tabmnu3;