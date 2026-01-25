import React, { useState } from 'react';
import './css/Tabmnu.css';

const Tabmnu1=()=>{
  //const [변수명, 함수명] = useState();
  const [menuNum, setMenuNum] = useState(1);

  //객체명
  const tabMenuToggle = (e) =>{ //메뉴 클릭시 호출되는 함수
    setMenuNum(e); //상태값을 변화시키기 위한 state함수를 호출한다.
  }

  return (
    <>
      <article>
        <h3>Tabmnu1 구현하기</h3>
        <p>삼항조건 연산자를 활용</p>
        <nav className="menu_list">
          <ul>
            {/* 
              삼항조건 연산자 =>   조건식?참인값:거짓값;

              사용자가 li태그를 클릭하면 tabMenuToggle함수가 호출되면서 괄호안에 있는 숫자를 상태값 변수(menuNum)에 적용하여 상태값 변수(menuNum)와 숫자가 일치하면 act서식을 적용한다.

            */}
            <li onClick={()=>tabMenuToggle(1)} className={menuNum===1?'act':''}>tmnu1</li>
            <li onClick={()=>tabMenuToggle(2)} className={menuNum===2?'act':''}>tmnu2</li>
            <li onClick={()=>tabMenuToggle(3)} className={menuNum===3?'act':''}>tmnu3</li>
            <li onClick={()=>tabMenuToggle(4)} className={menuNum===4?'act':''}>tmnu4</li>
          </ul>
        </nav>

        <div className="tab_content">
          {/* 삼항조건연산자를 활용하여 위에서 나온 상태값 변수 menuNum값을 아래 대입하여
          해당하는 콘텐츠가 보여질 수 있도록 한다.
        */}

          {
            menuNum===1?(<div className="content">콘텐츠1 내용</div>):
            menuNum===2?(<div className="content">콘텐츠2 내용</div>):
            menuNum===3?(<div className="content">콘텐츠3 내용</div>):
            (<div className="content">콘텐츠4 내용</div>)

            //삼항조건연산자
            //조건식?참인값:거짓인값;
            //조건식?참인값1:참인값2:참인값3:거짓인값;
          }
        </div>
      </article>
    </>
  );
}

export default Tabmnu1;