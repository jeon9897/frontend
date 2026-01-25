import React, { useState } from 'react';
import './css/Tabmnu.css';

const Tabmnu2=()=>{
  //const [변수명, 함수명] = useState();
  const [menuNum, setMenuNum] = useState(1);

  return (
    <>
      <article>
        <h3>Tabmnu2 구현하기</h3>
        <p>map함수 활용</p>
        <nav className="menu_list">
          <ul>
            {[1,2,3,4].map((num)=>(
              <li
              key={num}
              onClick={()=>setMenuNum(num)}
              className={menuNum ===num?'act':''}
              >
                {`Menu_${num}`} 
                {/* 메뉴1, 메뉴2, 메뉴3, 메뉴4가 나오게 함 */}
              </li>
            ))}
          </ul>
        </nav>

{/* 상태값 변수가 menuNum를 아래 콘텐츠 1, 2, 3, 4 박스안에 출력하기 */}
        <div className="tab_content">
          <div className="content">{`Menu Content ${menuNum}`}</div>
        </div>
      </article>
    </>
  );
}

export default Tabmnu2;