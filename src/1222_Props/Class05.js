import React from 'react';

function Class05(props) {
  return (
    <>
      <h3 className="title3">일반 DOM, 가상 DOM</h3> 
      <p>DOM(Document Object Model)의 약자</p>
      <p>DOM - 객체로 문서를 표현하는 방법 - HTML, PHP, XML로 작성</p>

      <h4 className="title4">일반 DOM의 단점</h4>
      <ul className="list01">
        <li>동적 UI에 최적화되어있지 않다.</li>
        <li>HTML문서 자체적으로는 정적이여서 이것을 JS, jQuery로 동적이게 만들어야 한다.</li>
        <li>DOM을 조작할 때마다 엔진이 웹페이지를 다시 새로 그리기 때문에(렌더링) 업데이트가 너무 잦으면 성능이 떨어진다.</li>
        <li>데이터가 많은 페이지에서 스크롤바를 내릴수록 수많은 데이터가 로딩되는데 데이터를 표현하는데 있어 속도가 떨어지기 때문에 성능 이슈가 발생될 수 있다.</li>
        <li>위와 같은 상황에서 문제를 느낀 페이스북에서는 대규모 프로젝트를 생성시 편하게 사용할 수 있고, 빠르게 대처할 수 있는 리액트를 새롭게 만들었음.</li>
      </ul>
      <p>- 새로고침(Refresh) - f5</p>
      <p>- 리플로우(Reflow) - DOM의 구조나 레이아웃이 변경되면 브라우저는 새로운 레이아웃을 계산하고 화면을 다시 그립니다. 이를 '리플로우'라고 함. (예를 들어 요소의 크기나 위치를 변경하면 '리플로우'가 발생됨)</p>
      <p>- 리페인트(Repaint) : 요소의 색상이나 테두리 등 서식이 변경되면, 브라우저는 해당 요소를 다시 그립니다. 이를 '리페인트'라고 함.</p>

      <h4 className="title4">리액트의 가상돔</h4>
      <dl>
        <dt>1. 가상 DOM이란?</dt>
        <dd>**가상 DOM(Virtual DOM)**은 실제 브라우저 DOM을 직접 조작하지 않고, 메모리 상에 가볍게 만든 **DOM의 복사본(객체)**입니다.<br />
      리액트는 화면(UI)의 상태를 이 가상 DOM으로 관리합니다.</dd>
        <dt>2. 왜 가상 DOM을 사용할까?</dt>
        <dd>실제 DOM의 문제점 - DOM 조작은 비싸고 느림, 변경이 잦을수록 성능 저하 발생, 한 번의 변경에도 화면 전체를 다시 그릴 수 있음</dd>
        <dd>가상 DOM의 장점 - 변경 사항을 한 번에 모아서 처리, 최소한의 실제 DOM만 업데이트, 성능 최적화 및 예측 가능한 UI 관리</dd>
        <dt>3. 가상 DOM 동작 과정</dt>
        <dd>리액트의 가상 DOM 업데이트 흐름은 다음과 같습니다.</dd>
        <dd>상태(state) 또는 props 변경</dd>
        <dd>새로운 가상 DOM 생성</dd>
        <dd>이전 가상 DOM과 비교(diffing)</dd>
        <dd>바뀐 부분만 찾아냄</dd>
        <dd>실제 DOM에 최소한의 변경만 반영(reconciliation)</dd>
        <dd>👉 이 과정을 통해 불필요한 DOM 조작을 줄입니다.</dd>
        <dt>4. Diffing 알고리즘 핵심 원칙</dt>
        <dd>리액트는 빠른 비교를 위해 몇 가지 가정을 합니다.</dd>
        <dd>같은 타입의 요소는 같은 구조를 가짐</dd>
        <dd>다른 타입의 요소는 이전 트리를 버리고 새로 생성</dd>
        <dd>key를 사용해 리스트 요소를 효율적으로 비교</dd>
        <dd>
          <pre>
            {/* {items.map(item => (
              <li key={item.id}>{item.name}</li>
            ))} */}
          </pre>
          key가 없으면 불필요한 재렌더링 발생 가능
        </dd>
        <dt>5. Reconciliation(재조정)</dt>
        <dd>가상 DOM과 실제 DOM을 동기화하는 과정</dd>
        <dd>변경된 부분만 실제 DOM에 반영</dd>
        <dd>React의 핵심 성능 최적화 메커니즘</dd>
        <dt>6. 가상 DOM = 무조건 빠른가?</dt>
        <dd>❌ 항상 빠른 것은 아님</dd>
        <dd>변경이 거의 없는 경우 → 오히려 오버헤드 발생</dd>
        <dd>하지만 대규모 UI & 빈번한 상태 변경에는 매우 효율적</dd>
        <dd>👉 핵심은 “효율적인 업데이트 전략”</dd>
        <dt>7. 가상 DOM의 장점 정리</dt>
        <dd>✅ 빠른 UI 업데이트</dd>
        <dd>✅ 선언적 UI 작성 가능</dd>
        <dd>✅ 유지보수 및 예측 가능한 상태 관리</dd>
        <dd>✅ 크로스 플랫폼(웹, 모바일) 대응 가능</dd>
        <dt>8. 한 줄 요약</dt>
        <dd>가상 DOM은 실제 DOM을 직접 조작하지 않고, 변경된 부분만 효율적으로 업데이트하기 위한 리액트의 핵심 기술이다.</dd>
      </dl>
    </>
  );
}

export default Class05;