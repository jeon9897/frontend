import React from 'react';

function StudentInput({name, age, email, onDataChange, onCreate}) {
  const input_style={
    height:'30px',
    margin:'3px'
  }
  const border_style={
    border:'3px solid #333',
    padding:'10px'
  }
  const button_style={
    border:'none',
    background:'#333',
    color:'#fff',
    width:'120px',
    height:'34px'
  }

  return (
    <>
      <div style={border_style}>
        <input type="text" name="name" placeholder="이름을 입력하세요." value={name} style={input_style} onChange={onDataChange} />

        <input type="text" name="age" placeholder="나이를 입력하세요." value={age} style={input_style} onChange={onDataChange} />

        <input type="email" name="email" placeholder="이메일 주소를 입력하세요. id@domain.com" value={email} style={input_style} onChange={onDataChange} />

        <input type="button" value="데이터 입력" style={button_style} onClick={onCreate} />
      </div>
    </>
  );
}

export default StudentInput;