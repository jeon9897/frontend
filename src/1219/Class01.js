import React from 'react';
import '../css/Sub_style.css';

function Class01(props) {

  // 사용자 정의 객체 생성하기
  const styling = {
    backgroundColor:"#0f0", //속성:값
    color:'#00f' //속성:값
  }

  return (
    <>
      <h2 className="title2">리엑트 JSX문법</h2>
      <ul className="list01">
        <li>JSX : JavaScript + XML의 약자</li>
        <li>리엑트에서 UI를 표현하고자 할 때 쓰는 문법</li>
        <li>자바스크립트의 확장문법, XML과 매우 비슷함.</li>
        <li>JSX를 반드시 사용해야 하는 것은 아니지만, JSX를 사용하면 REACT애플리케이션을 더 쉽게 작성이 가능하다.</li>
        <li>Compile란? = 영어단어 = 한글로 번역한다.</li>
      </ul>

      <h3 className="title3">1. JSX문법의 장점</h3>
      <ul className="list01">
        <li>html코드 작성 문법과 비슷하기 때문에 쉽고 사용자에게 익숙하다.</li>
        <li>콤포넌트들도 html태그를 작성하듯이 그냥 작성하여 활용도가 높다.</li>
      </ul>

      <h3 className="title3">2. JSX문서 작성시 주의할 점(문법)</h3>
      <ul className="list01">
        <li>꼭 태그는 최상위 태그 div,〈 〉 , fragment로 감싸줘야 합니다.</li>
        <li>닫는 태그는 반드시 작성해야 한다. br / 처럼 태그는 무조건 닫혀 있어야 하며, 종료 태그가 없는 태그는 끝에 /를 넣어준다.</li>
        <li>JSX의 표현식 { } : 콤포넌트 UI를 구현하는것 이외에도 여러가지 기능을 합니다. 그 중 하나가 자바스크립트 값을 처리하는 것입니다. { } 내부에는 변수값, 속성값 또는 기타 유효한 JAVASCRIPT 표현식을 작성 할 수 있습니다.</li>
        <li>JSX { } 안의 주석은 /*  */ 만 사용가능</li>
        <li>조건부 렌더링(삼항조건연산자 문법) = (조건식)?(참일 때 표현식):(거짓일 때 표현식);</li>
        <li>
          <b style={{color:'#00f'}}>JSX문법에서 CSS스타일 작성하는 5가지 방법</b>

          <ol className="list01">
            <li style={{backgroundColor:'#ffff00'}}>'inline스타일' 방식으로 서식적용</li>
            <li style={styling}>객체를 생성하여 변수값 활용</li>
            <li className="txt_color1">
              className="클래스명" 식으로 적용. html문서에서는 클래스 이름연결시 class='클래스명' or class="클래스명"으로 작성, 리액트에서는 class='' 를 className=''으로 작성해야 서식적용 = 컴파일 결과물 파일에는 class로 변환되어 나옴.
            </li>
            <li id="bg_color1">id선택자를 사용하여 서식적용하기(외부css서식)</li>
            <li>css Module방식으로 연결 - 컴포넌트에 스타일을 적용하다 보면 중복되는 경우가 있는데, css Module이라는 기술을 사용하며, css 클래스가 중첩되는 것을 방지 할 수 있다. css Module을 사용하는 파일은 [파일명.css] 대신 [파일명.module.css]로 저장해 주면된다.
              <pre>
                {/* 
                h3 className={style.title} css moudle방식으로 적용하기 /h3

                style.module.css파일 작성
                .title
                  background:#ff0;
                  font-size:30px;
                  color:#f00; 
               */}
              </pre>
            </li>
          </ol>
        </li>
        <li>리액트의 콤포넌트 2가지(class(클래스), function(함수))</li>
        <li>리액트에서는 파일명을 저장시 앞글자는 '대문자'로 저장을 한다.(App.js)</li>    
      </ul>
    </>
  );
}

export default Class01;