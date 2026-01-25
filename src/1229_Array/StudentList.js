import React, {useState, useRef} from 'react';
import StudentInput from './StudentInput';
import Student from './Student';

function StudentList(props) {
  // 배열 데이터 목록 출력하기 = 상태변수값
  const[students, setStudents] = useState([
    {
      id:'st001',
      name:'김남준',
      age:28,
      email:'rm@gmail.com'
    },
    {
      id:'st002',
      name:'김석진',
      age:30,
      email:'kim@gmail.com'
    },
    {
      id:'st003',
      name:'오수정',
      age:21,
      email:"ohsujin@gmail.com"
    },
    {
      id:'st004',
      name:'김석진',
      age:30,
      email:'kim@gmail.com'
    },
    {
      id:'st005',
      name:'김남준',
      age:28,
      email:"kim1924@gmail.com"
    },
  ]);

  //데이터 개수 5개가 존재하기 때문에 초기값은 6부터 시작되어야.
  const nextId = useRef(6);

  //입력상자에서 사용할 값을 state값으로 관리함
  const [inputs, setInputs] = useState({
    name:'',
    age:'',
    email:''
  });

  //비구조화 할당 방식으로 state값 각각 변수에 담기
  const {name, age, email} = inputs;

  //1. 데이터 변경을 위한 함수
  const onDataChange=(e)=>{
    //name과 value는 값이 변경되는 input태그의 속성을 비구조화 할당한다.
    const{name, value} = e.target;

    //state값 변경하기
    setInputs({
      ...inputs, //기존 배열에 새로운 데이터 추가
      [name]:value
    });
  }

  //2. 데이터 추가함수
  const onCreate=()=>{
    //유효성 검사실시
    if(!name.trim()||!email.trim()||!age){
      alert('이름, 나이, 이메일 주소를 모두 입력해주세요.');
      return;
    }

    //유효성 검사가 통과되면 아래 형식에 맞게 입력
    const student={
      id:'st00'+nextId.current,
      name,
      age:parseInt(age, 10),
      email
    };

    //스프레드 연산자(...) - 기존 students배열에 새로운 값을 이어서 추가한다.
    setStudents([...students, student]); 

    //새로 추가 입력한다.
    setInputs({
      name:'',
      age:'',
      email:''
    });
    
    //id값은 1씩 증가시켜 준다.
    //nextId.current = nextId.current + 1;
    nextId.current+=1;
  }

  //3. 자식콤포넌트에서 삭제 버튼 클릭시 전달받은 student.id값을 찾아서 삭제
  //해당 값이 지워지면 다시 재배열 작성함
  const onRemove=(id)=>{
    //아이디가 일치하지 않은 것들만 다시 재정렬 함
    setStudents(students.filter((student)=>student.id!==id));
  }

  //list서식
  const list_box={
    width:'800px'
  }
  return (
    <>
      <div style={list_box}>
        {/* 입력위한 콤포넌트 */}
        <StudentInput
          name={name} 
          age={age}
          email={email}
          onCreate={onCreate}
          onDataChange={onDataChange}
        />

        {/* 리스트 출력을 위한 콤포넌트 */}

        {/* 방법1. 비효율적인 배열 데이터 가져오기 */}
        {/* <ul>
          <li>이름 : {student[0].name}</li>
          <li>나이 : {student[1].age}</li>
          <li>이메일 : {student[2]}.email</li>
        </ul> */}

        {/* 방법2. 자식콤포넌트에 props값을 전달하여 자식콤포넌트에서 출력하기 */}
        {/* <ul>
          <li><Student student={students[0]} /></li>
          <li><Student student={students[1]} /></li>
          <li><Student student={students[2]} /></li>
          <li><Student student={students[3]} /></li>
          <li><Student student={students[4]} /></li>
        </ul> */}


        {/* 방법3. 배열 데이터 출력하기 
          - map함수는 기존 배열데이터를 가지고 새로운 배열을 생성하고자 할 때 사용.
          - map(현재 배열값,배열내 현재값 인덱스, 현재배열), 함수내에서 this로 사용될 값)
          - array.map(function(currentValue, index, array){
          새로운 배열
        }, thisArg)
          - 배열 데이터에서 중복되지 않는 값에 key값을 설정해야 함.
        */}

        {students.map((student)=>(
          <Student student={student} key={student.id} onRemove={onRemove} />
        ))}

      </div>
    </>
  );
}

export default StudentList;