import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Books(props) {
  //1. 상태 변수 선언
  const [data, setData] = useState([]);
  
  const navigate = useNavigate();

  
  
  //2. 상품 리스트 조회(출력)
  const loadData=()=>{
    //React비동기 통신
    axios
    //DB에서 json데이터를 불러온다.
    .get('http://localhost:9070/books')
    //성공시 데이터를 변수에 저장
    .then(res => {
        setData(res.data);
      })
    //실패시 에러 출력
    .catch(err=>console.log(err))
  }

  useEffect(()=>{
      loadData();
  },[]);

  //2. 상품삭제 하기
  const deleteData = (num)=>{
    if(window.confirm('정말 삭제하시겠습니까?')){
      axios //서버에 del요청 전송하기
      .delete(`http://localhost:9070/books/${num}`)
      //성공일때 아래 내용 실행
        .then(() => {
          alert('삭제되었습니다.');
          loadData(); // 데이터 삭제 후 목록을 다시 갱신해야 한다.
        })
        //실패일때 에러 출력
        .catch(err => console.log(err));
    }
  };

  return (
    <section>
      <h3>교보문고 DB입력/출력/삭제/수정</h3>
      <p>MYSQL DB에 있는 자료를 출력하고, 자료입력, 삭제, 수정하기를 실습 응용한다.</p>

      <div style={{'height':'360px'}}>
        <table>
          <caption>Book_Store Data</caption>
          <thead>
            <tr>
              <th>No</th>
              <th>서점명</th>
              <th>지역1</th>
              <th>지역2</th>
              <th>지역3</th>
              <th>주문수량</th>
              <th>주문자</th>
              <th>연락처</th>
              <th>메뉴</th>
            </tr>
          </thead>
          <tbody>
            {
            data.map(item=>(
            // data.map(item=>(
              <tr>
                <td>{item.num}</td>
                <td>{item.name}</td>
                <td>{item.area1}</td>
                <td>{item.area2}</td>
                <td>{item.area3}</td>
                <td>{Number(item.BOOK_CNT).toLocaleString()}</td>
                <td>{item.owner_nm}</td>
                <td>{item.tel_num}</td>
                <td>
                  <button onClick={()=>navigate(`/books/update/${item.num}`)}  >수정</button>&nbsp;
                  <button onClick={()=>{
                    deleteData(item.num)}}>삭제</button>
                </td>
              </tr>
            ))           
          }
          </tbody>
        </table>
      </div>

      

      <p style={{textAlign:'right',width:'700px'}}>
         {/* 클릭시 url주소에 http://localhost:3000/books/create 나오게 하기 위함. */}
        <button onClick={()=>navigate('./create')}>상품 등록</button>
      </p>
    </section>
  );
}

export default Books;