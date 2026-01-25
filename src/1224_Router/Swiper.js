import React from 'react';

function Swiper(props) {
  return (
    <>
      <h3 className="title3">5. swiper 플러그인 설치 / 적용</h3>
      <pre>
        <br />
        1. 설치<br />
        npm i swiper<br /><br />

        2. main콤포넌트 상단에 작성<br />
        import Swiper, SwiperSlide  from 'swiper/react';<br />
        import Pagination, Navigation, Autoplay from 'swiper/modules';<br />
        import 'swiper/css';<br />
        import 'swiper/css/navigation';<br />
        import 'swiper/css/pagination';<br /><br />

        3. 태그작성<br />
        Swiper<br />
              SwiperSlide<br />
                img src=`${process.env.PUBLIC_URL}/images/slide1.jpg`alt="배너1" /<br />
              /SwiperSlide<br />
              SwiperSlide<br />
                img src=`${process.env.PUBLIC_URL}/images/slide2.jpg` alt="배너2" /<br />
              /SwiperSlide<br />
              SwiperSlide<br />
                img src=`${process.env.PUBLIC_URL}/images/slide3.jpg`alt="배너3" /<br />
              /SwiperSlide<br />
              SwiperSlide<br />
                img src={`${process.env.PUBLIC_URL}/images/slide4.jpg`} alt="배너4" /<br />
              /SwiperSlide<br />
        /Swiper<br /><br /><br />

        4. Swiper(부모요소)태그에 옵션추가 - 좌, 우버튼, 콘트롤버튼, 자동슬라이드, 터치슬라이드<br /><br />

        Swiper<br />
          modules=[Navigation, Pagination, Scrollbar, Autoplay] //사용할 모듈 추가<br />
          spaceBetween=0    //슬라이드 이미지 간격<br />
          slidesPerView=1  //한페이지에 보여질 이미지 개수<br />
          navigation                  //메뉴<br />
          autoplay=delay:3000 //자동슬라이드 시간<br />
          pagination=clickable:true //콘트롤버튼 클릭가능여부<br />
          scrollbar=draggable:true  //터치스크롤 여부<br />
          className="mslide" //슬라이드 서식 추가<br /><br />
        

        5. class서식 추가<br />
        .swiper <br />
          width: 100%;<br />
          height: 100%;<br /><br />
        

        .swiper-slide img <br />
          width: 100%;<br />
          display: block;<br />
        <br />
        </pre>
    </>
  );
}

export default Swiper;