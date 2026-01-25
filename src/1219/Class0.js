import React from 'react';

function Class0(props) {
  return (
    <>
      <h3 className="title3">Node.js설치와 리엑트 프로젝트 실행방법</h3> 
      <ul className="list01">
        <li>리액트를 실행하기 위해서는 nodejs설치가 필수</li>
        <li>nodejs.com에서 안정화버전(짝수)을 다운로드 받아 설치 - 재부팅</li>
        <li>시작 - 실행 - cmd(명령프롬프트)하여 node -v(버전확인), npx -v(노드패키지 버전 실행)</li>
        <li>cmd(명령프롬프트)에서 npm i npx -g 실행하여 전역에서 명령어 사용할 수 있도록 설정</li>
        <li>cmd(명령프롬프트)에서 npx -v명령어로 버전 확인</li>
        <li>vs code를 실행하고 명령프롬프트(cmd)창에서 npx create-react-app '프로젝트 이름'을 작성하여 새로운 프로젝트를 실행한다.</li>
        <li>리액트 프로젝트 실행 명령어 : npm run start</li>
        <li>리액트 프로젝트 종료 : ctrl + C</li>
        <li>리액트 프로젝트 배포 : npm run build하여 build폴더가 생성되면 서버(github)에 build폴더 안에 있는 내용을 업로드함.</li>
      </ul>
    </>
  );
}

export default Class0;