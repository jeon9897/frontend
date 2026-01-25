// import '@fontsource/noto-sans-kr';          // 기본 400
// import '@fontsource/noto-sans-kr/700.css'; // bold
import './App.css';
import Class0 from './1219/Class0'; //nodejs설치와 리엑트 프로젝트 실행방법
import Class01 from './1219/Class01'; //리엑트 JSX문법
import Class02 from './1219/Class02'; //콤포넌트(component)의 종류
import Class03 from './1219/Class03'; //리액트에서 이미지 삽입
import Class04 from './1222_Props/Class04'; //리액트 배포방법
import Class05 from './1222_Props/Class05'; //일반 DOM, 가상 DOM
import Class06 from './1222_Props/Class06'; //콤포넌트 개념과 종류(클래스, 함수형) 
import Class07 from './1222_Props/Class07'; //리엑트 props개념과 사용
import Class08 from './1222_Props/Class08'; //상태관리를 위한 stat
import Event from './1223_Event_Form/Event'; //이벤트
import Form from './1223_Event_Form/Form'; //폼태그
import Router from './1224_Router/Router'; //주소감지, 페이지 이동
import Swiper from './1224_Router/Swiper'; //주소감지, 페이지 이동
import Array1 from './1226_Array/Array1'; //배열 데이터
import Yellow from './1226_Array/Yellow'; //배열 데이터
import Array2 from './1229_Array/Array2'; //배열데이터
import Usestate from './1229_Array/Usestate'; //리액트 상태관리(useState)
import LoginForm from './1229_Array/LoginForm'; //폼양식 상태관리(useState)
import UseRefDom from './1229_Array/UseRefDom';
import Array3 from './1229_Array/Array3'; //배열객체 생성, 추가, 삭제
import Json from './1231_json_todolist/Json'; //json데이터 출력
import LifeCycle from './1231_json_todolist/LifeCycle'; //json, 콤포넌트 라이프사이클 이해
import UseEffect1 from './1231_json_todolist/UseEffect1'; //useEffect이해와 활용
import UseEffect2 from './1231_json_todolist/UseEffect2'; //useEffect이해와 활용
import UseEffect3 from './1231_json_todolist/UseEffect3'; //useEffect이해와 활용
import UseEffect4 from './1231_json_todolist/UseEffect4'; //todolist만들기
import Tabmnu1 from './0102_Tabcont/Tabmnu1'; //탭메뉴
import Tabmnu2 from './0102_Tabcont/Tabmnu2'; //탭메뉴 최적화 버전
import Tabmnu3 from './0102_Tabcont/Tabmnu3'; //탭메뉴 배열객체 내용 삽입하여 만들기
import Music from './0105_json/Music'; //음악data map함수로 출력
import Modal from './0107_modal/Modal';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';//폰트어썸
import { faBars } from '@fortawesome/free-solid-svg-icons'; // 전체 버튼아이콘
import { faTimes } from '@fortawesome/free-solid-svg-icons'; //닫기 버튼아이콘 

function App() {
  //0. useState(상태변수)
  const [visible, setVisible] = useState(false); //초기값은 false(안보이게)
  const [menuOpen, setMenuOpen] = useState(false); //모바일 메뉴 초기값
  
  // 1. scroll기능이 들어간 함수 작성하기
  const scrollTop=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }

  //2. useEffect를 활용하여 콤포넌트가 생성되면 이벤트 기능 추가
  useEffect(()=>{
    const handleScroll=()=>{ //함수명
      setVisible(window.scrollY>300); //상태 함수 값 설정 
    };

    //스크롤 이벤트를 활용하여 handleScroll함수 호출하기
    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll);
  },[])

  //3. 하단 '새로고침'버튼 클릭시 페이지 새로 불러오기
  const handleRefrash=()=>{
    window.location.reload();
  }

  //4. 배열객체를 사용하여 메뉴목록 작성하기
  const menuItems = [
    {id:'day1', label:'1일차 학습'},
    {id:'day2', label:'2일차 학습'},
    {id:'day3', label:'3일차 학습'},
    {id:'day4', label:'4일차 학습'},
    {id:'day5', label:'5일차 학습'},
    {id:'day6', label:'6일차 학습'},
    {id:'day7', label:'7일차 학습'},
    {id:'day8', label:'8일차 학습'},
    {id:'day9', label:'9일차 학습'},
    {id:'day10', label:'10일차 학습'},
    {id:'day11', label:'11일차 학습'},
    {id:'day12', label:'12일차 학습'},
    {id:'day13', label:'13일차 학습'},
    {id:'day14', label:'14일차 학습'},
    {id:'day15', label:'15일차 학습'},
    {id:'day16', label:'16일차 학습'},
    {id:'day17', label:'17일차 학습'},
    {id:'day18', label:'18일차 학습'},
    {id:'day18', label:'19일차 학습'},
    {id:'day18', label:'20일차 학습'}
  ]

  //5. 메뉴 목록 클릭시 해당 id값을 찾아서 이동하기
  const handleMenuClick=(id)=>{
    const el = document.getElementById(id);
    //console.log(el); //콘솔모드에서 클릭한 메뉴의 id값 확인
    if(el){
      const y = el.getBoundingClientRect().top + window.pageYOffset-60;
      window.scrollTo({top:y, behavior:'smooth'});
      setMenuOpen(false);//메뉴 클릭시 메뉴목록 닫기
    }
  }

  return (
    <>
      <header className="header">
        <h1>리액트 학습하기</h1>

        {/* 전체메뉴(토글) 클릭시 해당 함수호출하여 .gnb 위치 right:0이 되어야. 나옴 */}

        <button onClick={()=>setMenuOpen(!menuOpen)}
          style={{ 
            fontSize:'28px',
            color:'#fff',
            position:'fixed',
            top:'16px',
            right:'20px',
            cursor:'pointer',
            border:'none',
            background:'none',
            zIndex:'1000'
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* 학습목차 메뉴 목록 */}
        {/* 메뉴 목록은 menuOpen상태 변수값이 true, false일 경우 위치가 달라지도록 한다. */}
        <nav className="gnb" style={{
          right:menuOpen?'0px':'-100%'
        }}>

          {/* 닫기 버튼 */}
          <button className="close_btn"
            onClick={()=>setMenuOpen(false)}
            //setMenuOpen의 값을 false로 설정하여 메뉴목록이 다시 숨겨지도록 한다.
          >
          <FontAwesomeIcon icon={faTimes} 
            style={{fontSize:'30px'}}
          />
          </button>

          {/* menuItems 배열 객체를 활용하여 메뉴목록 출력 */}
          <ul>
            {menuItems.map(item=>(
              <li key={item.id}>
                <button onClick={()=>handleMenuClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
      </header>

      <main>
        <h2 className="title2" id="day1" >1일차 학습 1219 - 리액트 소개와 nodejs설치, 프로젝트 설치, 실행방법, 리액트 jsx 문법, 콤포넌트 개념, css적용방법, 이미지 삽입방법</h2>
        
        <Class0 />
        <Class01 />
        <Class02 />
        <Class03 />

        <p>실습예제 - 모바일 동물병원</p>

        <h2 className="title2" id="day2">2일차 학습 1222 - 리액트 배포방법과 일반돔, 가상돔 이해하기, props, state, event</h2>
        <Class04 />
        <hr />
        <Class05 />
        <hr />
        <Class06 />
        <hr />
        <Class07 />
        <hr />
        <Class08 />

        <h2 className="title2" id="day3">3일차 학습 1223 - 이벤트와 폼태그</h2>
        <Event />
        <hr />
        <Form />
        <hr />

        <h2 className="title2" id="day4">4일차 학습 1224 - Router를 활용한 페이지 전환, swiper설치방법</h2>
        <Router />
        <Swiper />

        <h2 className="title2" id="day5">5일차 학습 1226 - 배열 데이터 다루기</h2>
        <Array1 />
        <hr />
        <Yellow />

        <h2 className="title2" id="day6">6일차 학습 1229 - 배열 데이터 복습, React Hooks(useState, useRef, userEffect)</h2>
        <p>💡 React Hooks는 기존 class형 콤포넌트에서 사용하던 문법을 함수형 콤포넌트에서도 사용할 수 있도록 추가된 문법 몇가지를 말함. 16.8버전 부터 적용됨. (2일차 참고, 피그마 참고)</p>

        <Array2 />
        <hr />

        <Usestate />
        <hr />

        <LoginForm />
        <hr />

        <UseRefDom />
        <hr />

        <Array3 />

        <h2 className="title2" id="day7">7일차 학습 1230 - 배열 데이터 응용하기</h2>
        <div>
          <a href="http://jeon9897.github.io/modutour2025" title="">모두투어 상품 입력/출력/삭제 기능 구현하기</a>
          <ol className="list01">
            <li><a href="https://sihi-j.github.io/Banila/" title="Banila Co">Banila Co(장서현)</a></li>
            <li><a href="https://hrkim0413.github.io/bakery/" title="bakery">bakery(김혜련)</a></li>
            <li><a href="https://ijh950809-dotcom.github.io/olive/" title="">olive(임지희)</a></li>
            <li><a href="https://lynsunwoo.github.io/Tomford/" title="Tomford">Tomford(선우린)</a></li>
            <li><a href="https://16automne.github.io/perfume2025/" title="perfume">perfume2025(조다빈)</a></li>
            <li><a href="https://youngchild-cloud.github.io/musinsa_react/" title="musinsa">musinsa(김영찬)</a></li>
            <li><a href="https://anybil30-design.github.io/Starbucks_React/" title="스타벅스">스타벅스(권지환)</a></li>
            <li><a href="https://kwag-hoon.github.io/react-yellow/" title="노랑풍선">노랑풍선(곽훈)</a></li>
            <li>신진영</li>
            <li>이도건</li>
            <li>정하영</li>
          </ol>
        </div>

        <h2 className="title2" id="day8">8일차 학습 1231 - DB에서 저장한 JSON데이터 map함수로 출력하기, HOOKS(useEffect), 오늘의 할일(TodoList)</h2>

        <Json />

        <LifeCycle /><hr />

        <UseEffect1 /><hr />
        <UseEffect2 /><hr />
        <UseEffect3 /><hr />
        <UseEffect4 />

        <h2 className="title2" id="day9">9일차 학습 0102 - 탭콘텐츠 구현하기</h2>

        <Tabmnu1 />
        <hr />

        <Tabmnu2 />
        <hr />

        <Tabmnu3 />

        <h2 className="title2" id="day10">10일차 학습 0105 - Json데이터(music) 출력하기, API를 활용한 영화소개 페이지 구현하기</h2>
        <Music />

        {/* 영화소개 페이지 구현하기 github url주소 a태그로 연결하기 */}

        <h2 className="title2" id="day11">11일차 학습 0106 - API를 활용한 영화소개 페이지 구현하기</h2>
        <a href="https://jeon9897.github.io/movie202601/" title="페이지로 이동하기">API 영화 사이트 보기</a>
        <p>GitHub Page에 React프로젝트 배포시 라우트 경로에 레포지토리 이름이 포함되기 때문에 BrowserRouter에 basename을 설정해야 함.</p>
        <p>GitHub에 올라간 페이지에서 페이지 이동시 '404 Not Found'에러 발생시 아래와 같은 방법으로 설정하고 재배포할 것.</p>
        <p>설정 방법 : BrowserRouter basename='/레포지토리명'</p>

        <h2 className="title2" id="day12">12일차 학습 0107 - Top버튼, 새로고침(f5) 기능, 모바일 내비게이션, 모달윈도, Frontend, Backend 셋팅과 실행</h2>

        <Modal />
        <ol className="list01">
          <li>💡 useState 훅 사용 : showModal이라는 상태 변수와 setShowModal이라는 상태 변경 함수를 선언했습니다. 초기값을 true로 설정하면 모달이 처음부터 표시되고, false로 설정하면 버튼 클릭 시에만 표시됩니다.</li>
          <li>💡 모달 트리거 : "모달 열기" 버튼을 클릭하면 setShowModal(true)가 실행되어 모달이 열립니다.</li>
          <li>💡 조건부 렌더링 : 
            {/* 
                {showModal && (...)} 
            */}
            구문을 사용하여 showModal이 true일 때만 모달을 표시합니다.
          </li>
          <li>💡 모달 스타일링 : 부모박스요소는 고정배치, 배경색 검정, 투명도 적용, 내부 박스요소는 화면중앙에 배치 되도록 흰색 배경 적용</li>
          <li>💡 모달 닫기 : '닫기'버튼 클릭시 setShowModal(false)를 실행하여 모달을 숨기도록 한다.</li>
        </ol>
  
        <h2 className="title2" id="day13">13, 14일차 학습 0108, 0109 - Frontend, Backend Goods데이터를 활용한 입력(C)/출력(R)/수정(U)/삭제(D) 구현하기</h2>

        <h2 className="title2" id="day15">15일차 학습 - 0112 - Frontend, Backend Fruits데이터를 활용한 입력(C)/출력(R)/수정(U)/삭제(D) 구현하기</h2>

        <h2 className="title2" id="day16">16일차 학습 - 0113 - Frontend, Backend BookStore데이터를 활용한 입력(C)/출력(R)/수정(U)/삭제(D) 구현하기</h2>

        <h2 className="title2" id="day17">17일차 학습 - 0114 - Frontend, Backend Pagenation, Noodle데이터를 활용한 입력(C)/출력(R)/수정(U)/삭제(D) 구현하기</h2>

        <h2 className="title2" id="day18">18일차 학습 - 0115 - Frontend, Backend 검색기능 구현, </h2>

        <h2 className="title2" id="day19">19일차 학습 - 0116 - Frontend, Backend 질문하기(Question)</h2>

        <h2 className="title2" id="day20">20일차 학습 - 0119 - Frontend, Backend 로그인, 회원가입</h2>

      </main>

      <footer className="footer">
        
        {visible &&(
          <button
            onClick={scrollTop} //{객체-함수,배열,변수, css서식...}
            style={{
              position:'fixed',
              right:'20px',
              bottom:'100px',
              padding:'15px 12px',
              fontSize:'16px',
              backgroundColor:"#fff",
              color:"#333",
              border:"1px solid #ccc",
              boxShadow:"0px 3px 6px #ccc",
              cursor:"pointer",
              zIndex:1000
            }}
          >Top</button>
        )}

        <button onClick={handleRefrash}>새로고침(F5)</button>
        <address>Copyright&copy;2025 React학습목차 allrights reserved.</address>
      </footer>
    </>
  );
}

export default App;
