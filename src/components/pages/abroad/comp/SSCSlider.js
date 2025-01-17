import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import pic_1 from '../../../../media/schools/ssc_1.png';
import pic_2 from '../../../../media/schools/ssc_2.png';
import pic_3 from '../../../../media/schools/ssc_3.png';

const SSCSlider = () => {
  return (
    <div>
      <div className='fs-3 mb-3 schoolTitle'>SSC (Singapore School Cebu)</div>
      <div className='sliderSize mb-3 schoolCarousel'>
        <Carousel fade controls={true} interval={3000} indicators={true}>
          <Carousel.Item>
            <img
              className='d-block w-100 rounded imgShadow'
              src={pic_1}
              alt='Second slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 rounded imgShadow'
              src={pic_2}
              alt='Third slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100 rounded imgShadow'
              src={pic_3}
              alt='Third slide'
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='mb-3'>
        2010년에 설립된 싱가포르 스쿨은 마닐라, 세부, 클락 캠퍼스까지 3개의
        캠퍼스가 운영되고 있으며, 학교 이름에서 알 수 있듯이 싱가포르 수업
        방식을 채택하고 있습니다. 기본 필리핀 커리큘럼을 진행하고 있으며
        고학년에서 IGCSE와 IB를 수료하게 되며 영어, 중국어, 타갈로그어를 배워야
        합니다. K~G12까지 운영하고 있으며, 연간 학비는 800만 원에서 1,100만 원
        정도 됩니다.
      </div>

      <div>
        <a
          href='https://www.singaporeschoolcebu.com/'
          target='_blank'
          rel=' noreferrer'
        >
          https://www.singaporeschoolcebu.com/
        </a>
      </div>
    </div>
  );
};

export default SSCSlider;
