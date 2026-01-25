import React, { useState } from 'react';
import './modal.css';

function Modal(props) {
  //1. 상태관리를 위한 상태변수만들기
  // const [showModal, setShowModal]=useState(true); //처음부터 나오게 
  const [showModal, setShowModal]=useState(false); //버튼 클릭시 나오게 

  return (
    <>
      <h3 className="title3">React에서 모달열기/모달 닫기 구현하기</h3>
      <p>버튼 클릭시 모달 윈도우 열기/'닫기'버튼 클릭시 모달 숨기기</p>

      <button
        onClick={()=>setShowModal(true)}
      >
        모달열기</button>

      {/* 
      //조건부 렌더링 공식  
      // {showModal && (....)}
      // 
      // 
      */}

      {showModal&&(
        <div className="modal">
          <div className="m_inner">
            <img src={`${process.env.PUBLIC_URL}/images/coupon.jpg`} alt="모달 이미지" />

            <button onClick={()=>setShowModal(false)}>닫기</button>

          </div>
        </div>
      )}
      
    </>
  );
}

export default Modal;