import React from 'react';

function Student({student, onRemove}) {
  const list_style={
    display:'flex',
    listStyle:'none',
    // width:'800px',
    lineHeight:'40px',
    marginTop:'20px',
    justifyContent:'space-between',
    textAlign:'left'
  }
  const button_style={
    float:'right',
  }
  return (
    <>
      <ul style={list_style}
        // style={{
        //   display:'flex',
        //   listStyle:'none',
        //   width:'800px',
        // }}
      >
        <li>이름 : {student.name}</li>
        <li>나이 : {student.age}</li>
        <li>이메일 : {student.email}</li>
        <li><button style={button_style} onClick={()=>onRemove(student.id)}>데이터 삭제</button></li>
      </ul>
    </>
  );
}

export default Student;