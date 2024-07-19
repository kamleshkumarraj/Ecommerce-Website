import Banner1 from '../../assets/Images/banner-1.jpg'
import Banner2 from '../../assets/Images/banner-2.jpg'
import Banner3 from '../../assets/Images/banner-3.jpg'
import Banner4 from '../../assets/Images/banner-4.jpg'
import Banner5 from '../../assets/Images/banner-5.jpg'
import Banner6 from '../../assets/Images/banner-6.jpg'
import Banner7 from '../../assets/Images/banner-7.jpg'
import Banner8 from '../../assets/Images/banner-8.jpg'



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';

function Slider() {
    const sliderList = [Banner1 , Banner2 , Banner3 , Banner4 , Banner5 , Banner6 , Banner7 , Banner8];
  return (
    <div className='absolute w-[100%] z-[-100] object-cover'>
    <Swiper 
        loop = {true}
        autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
       modules={[ Autoplay]} className="mySwiper">
        {
            sliderList.map((banner , idx) => {
                return <SwiperSlide key={idx}>
                    <img className='w-[100%] h-[100%] object-contain' src={banner} alt="Banner-image" />
                </SwiperSlide>
            })
        }
  </Swiper>
    </div>
  )
}

export default Slider