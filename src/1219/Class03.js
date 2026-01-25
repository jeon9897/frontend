import React from 'react';
import banner from "../images/banner.jpg";
import '../css/Sub_style.css';

function Class03() {
  return (
    <>
      <h3 className="title3">4. 리액트에서 이미지 삽입하는 방법 4가지</h3>
      <ol className='list01'>
        <li>public 폴더에서 이미지 가져오기 위한 3가지 방법
          <ul>
            <li>src={`${process.env.PUBLIC_URL}/폴더명/파일명.확장자`}</li>
            <li>src={'/폴더명/파일명.확장자'}</li>
            <li>src={'폴더명/파일명.확장자'}</li>
          </ul> 
        </li>
        <li>src폴더에 이미지가 있는 경우 - import
          <ol>
            <li>import banner from "./src/폴더명/파일명.확장자";</li>
            <li>img src={} alt=""식으로 작성</li>
          </ol>
        </li>
        <li>src폴더에 이미지가 있는 경우 - require
          <p>img src={require('../images/banner.jpg').default} alt=""</p>
        </li>
        <li>css에서 이미지 경로를 설정하여 배경으로 이미지 삽입하기</li>
      </ol>

      <img src={`${process.env.PUBLIC_URL}/images/banner.jpg`} alt="배너" />
      <br />
      <img src={'/images/banner.jpg'} alt="배너" />
      <br />
      <img src={'images/banner.jpg'} alt="배너" />
      <br /><br />

      <img src={banner} alt="" />
      <br />
      <img src={require('../images/banner.jpg')} alt="" />

      <div className="bg_img">배경이미지</div>

    </>
  );
}

export default Class03;