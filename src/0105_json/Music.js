import React from 'react';
import mData from './music_data.json';

function Music(props) {
  const fruits = ['사과', '바나나', '오렌지'];

  return (
    <>
    <h3 className="title3">map함수로 json데이터 출력하기</h3>
      <h4>출력예시</h4>
      <ul className="list01">
        <li>사과</li>
        <li>바나나</li>
        <li>오렌지</li>
      </ul>

      <h4>map함수로 데이터 출력</h4>
      <ul className="list01">
        {fruits.map((fruit, index)=>(
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h4>Music데이터 출력하기(json)</h4>
        {mData.slice(0,4).map((music,i)=>
          <ul className="list01">
            <li key={music.id}>
              아이디 : {music.id}</li>
            <li>제목 : {music.title}</li>
            <li>URL주소 : {music.url}</li>
            <li>썸네일 주소 : {music.thumbnailUrl}</li>
          </ul>
        )}
    </>
  );
}

export default Music;