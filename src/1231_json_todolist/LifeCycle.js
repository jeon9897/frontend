import React, {useState, useEffect} from 'react';
// import Toggle form './Toggle';

function LifeCycle(props) {
  return (
    <>
      <h3 className="title3">LifeCycle(생명주기)</h3>

      <Toggle />

    </>
  );
}

function Toggle(){
  const [isOn, setIsOn] = useState(false);

  const handleChange=()=>{
    setIsOn(prev=>!prev);
    console.log('버튼 상태:' , !isOn)
  };

  //1. componentDidMount(콤포넌트 생성시 실행
  useEffect(()=>{
    console.log('DidMount, 콤포넌트가 생성될때');
  });

  //2. componentDidUpdate(콤포넌트의 상태가 변화할 때 실행)
  useEffect(()=>{
    console.log("DidUpdate, 상태가 변화할때");
  }, [isOn]);

  //3. componentWillUnmount(콤포넌트가 없어질때)
  useEffect(()=>{
    return()=>{
      console.log('WillUnMount, 콤포넌트 없어질때')
    };
  },[]);

  return(
    <div>
      {/* 클릭시 상태값에 따라 버튼을 ON/OFF로 변경함 */}
      <button onClick={handleChange}>{isOn?"ON":"OFF"}</button>
    </div>
  )
}

export default LifeCycle;