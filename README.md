--------------------------------------------------------
# frontend, backend(Express_server), DATABASE
> 클라우드 타입 사이트에 배포하여 GOODS, FRUITS, BOOKSTORE, NOODLE, QUETION, LOGIN페이지 입력(CREATE), 출력(READ), 수정(UPDATE), 삭제(DELETE) 구현하기

---

## 참고사항
> Goods.js, GoodsCreate.js, GoodsUpdate.js파일에서 get, put, delete, post주소값을 수정해야 함.
> AlertContext 수정 - 처음 페이지 로딩시 데이터 개수 로딩하기
> Goods.js 파일 localhost 주소 수정
> GoodCreate.js 파일 localhost 주소 수정
> GoodUpdate.js 파일 localhost 주소 수정

---

### AlertContext.js

useEffect(()=>{


    //axios.get('http://localhost:9070/goods')

    
    axios.get('https://port-0-backend-express-server-mkvweaew5df78f72.sel3.cloudtype.app/goods')

    
    .then(res=>setGoodsCount(res.data.length));

    
    //axios.get('http://localhost:9070/fruits')

    
    axios.get('https://port-0-backend-express-server-mkvweaew5df78f72.sel3.cloudtype.app/fruits')

    
    .then(res=>setFruitsCount(res.data.length));

    
    //axios.get('http://localhost:9070/bookstore')

    
    axios.get('https://port-0-backend-express-server-mkvweaew5df78f72.sel3.cloudtype.app/bookstore')

    
    .then(res=>setBookstoreCount(res.data.length));

    
    //axios.get('http://localhost:9070/question')

    
    axios.get('https://port-0-backend-express-server-mkvweaew5df78f72.sel3.cloudtype.app/question')

    
    .then(res=>setQuestionCount(res.data.length));

    
  },[]);

  

---

### Goods.js 수정할 부분
//React비동기 통신
    axios
    //DB에서 json데이터를 불러온다.
    .get('https://port-0-backend-express-server-mkvweaew5df78f72.sel3.cloudtype.app/goods')
    //성공시 데이터를 변수에 저장
    .then(res=>{

---
### 같은 방식으로 GoodsCreate.js, GoodsUpdate.js파일도 수정해야
---
### url주소 변경 사항(필수)
> http://localhost:9070/    =>  https://port-0-backend-express-server-mkvweaew5df78f72.sel3.cloudtype.app
    
    
-------------------------------------------------------

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
