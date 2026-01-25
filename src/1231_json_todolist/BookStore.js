import React, {useState, useEffect} from 'react';
import dummy from './data/book_store.json';

function BookStore(props) {

  const [books, setBooks] = useState([]); //상태값 초기화

  useEffect(()=>{  //비동기 방식으로 데이터 불러오기
    //fetch('./data/bookstore.json') //방법1
    fetch(`${process.env.PUBLIC_URL}/data/book_store.json`) //방법2
    .then(response=>response.json())
    .then(json=>setBooks(json))
    .catch(err => console.error('데이터 불러오기 실패 : ', err));
  },[]);

  return (
    <>
      <h3 className="title3">book_store json데이터 출력하기</h3>
      <p>1. 파일 작은 경우 import방식으로 데이터 출력(정적)</p>
      <p>map함수와 slice메서드로 원하는 개수만 불러오기</p>
      <ul className="list01">
        <li>slice(start, end)</li>
        <li>start : 포함되는 시작 인덱스</li>
        <li>end : 포함되지 않는 종료 인덱스</li>
        <li>slice(0,5)은 0번 인덱스값부터 4번 인덱스값까지 총 5개의 값을 가져오겠다는 뜻.</li>
      </ul>

      <h4>BookStore 데이터 출력하기</h4>
      <ul className="list01">
        {
          dummy.slice(0,5).map(book=>(
            <li>
              💡num:{book.num} 지점명:{book.name}
              🤳지역1 : {book.area1}
              🧶지역2 : {book.area2}
              🎡지역3 : {book.area3}
              🛒주문수량 : {book.BOOK_CNT}
              👨‍🦱주문자 : {book.owner_nm}
              📞연락처 : {book.tel_num}
            </li>
          ))
        }
      </ul>

      <p>2. fetch를 활용한 비동기 방식으로 데이터 로딩하기</p>
      <ul className="list01">
        {books.slice(0,4).map(book=>(
          <li key={book.num}>
            num:{book.num}, name:{book.name}, <br />
            지역1 : {book.area1}, 
            지역2 : {book.area2},
            지역3 : {book.area3},<br />
            주문수량 : {book.BOOK_CNT},
            주문자 : {book.owner_nm},
            연락처 : {book.tel_num}
          </li>
        ))}
      </ul>

    </>
  );
}

export default BookStore;