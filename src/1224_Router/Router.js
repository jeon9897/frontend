import React from 'react';

function Router(props) {
  return (
    <>
      <h3 className="title3">1. 리액트 Route란?</h3>
      <p>Route = 페이지이동 = 링크 = a태그</p>
      <p>라우팅이란? 사용자가 요청한 url주소에 따라 해당 url주소로 페이지를 이동하는 것이다.</p>
      <p>리액트에서는 route를 사용하기 위해 'npm i react-router-dom' 패키지를 설치해야 한다.</p>
      <p>리액트는 SPA(Single Page Application)방식으로서 기존의 MPA(Multi Page Application)방식에서는 여러개의 페이지를 사용하여 새로운 페이지를 로드하는 방식이였으나, 리액트에서는 새로운 페이지를 로딩하지 않고, 하나의 페이지(index.js, 콤포넌트(app.js))안에서 필요한 데이터만 로딩하여 출력하는 형태를 가지고 있다.</p>
      <p>React-Router-Dom은 신규 페이지를 불러오지 않는 상황에서 각각의 url에 따라 선택된 데이터를 하나의 페이지에서 렌더링 해주는 라이브러리이다.</p>

      <h3 className="title3">2. 리액트 라우터(React Router)</h3>
      <p>사용자가 입력한 주소를 감지하는 역할을 하며, 여러 환경에서 동작할 수 있도록 여러 종류의 라우터 콤포넌트를 제공한다.</p>
      <p>이중에서 가장 많이 사용하는 라우터 콤포넌트는 BrowerRouter, HashRouter이다.</p>
      <p>BrowerRouter : html5를 지원하는 브라우저의 주소를 감지</p>
      <p>HashRouter : hash주소를 감지</p>
      <p>설치는 'npm i react-router-dom'으로 설치하고 프로젝트 시작</p>
      
      <h3 className="title3">3. 리액트 라우터 관련 태그</h3>
      <p>BrowerRouter : 컴포넌트를 감싸는 영역으로 주로 메뉴나 헤더를 감싼다.</p>
      <p>Routes : 컴포넌트는 여러 Route를 감싸서 그 중에 규칙이 일치하는 라우트 단 하나의 렌더링시키는 역할을 한다.</p>
      <p>Link : html5의 a태그와 같다. 미리 보기시 a태그로 변경 됨.</p>

      <h3 className="title3">4. 쿼리스트링.useLocation</h3>
      <p>hash : 주소의 # 문자열 뒤에 나오는 값</p>
      <p>pathname : 현재 주소경로</p>
      <p>search : ?를 포함한 쿼리스트링</p>
      <p>state : 페이지로 이동시 임의로 넣을 수 있는 상태값</p>
      <p>key : location객체의 고유한 값, 초기값은 default, 페이지가 변경될 때마다 고유의 값이 생성된다.</p>
    </>
  );
}

export default Router;