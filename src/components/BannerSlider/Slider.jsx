/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Autoplay , FreeMode , Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


function Slider({data  , setImg  , category}) {
  return (
    <div className=''>
    <Swiper 
        slidesPerView={6}
        loop = {true}
        autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      
      freeMode = {true}
      pagination = {{
        clickable : true
      }}
    
       modules={[ Autoplay , FreeMode , Pagination]} className="mySwiper">
        {
            data.length > 0  && data?.map((item , idx) => {
                return <SwiperSlide key={idx} onClick={() => {
                  
                  setImg(item.images[0])
                }}>
                
                  <Link state={{id : item.id , category}} >
                   <div  href="#top-bar" id="card" className='overflow-hidden max-w-[30rem] min-h-[35rem] rounded-[1.5rem] border-[.5px] border-[#00000018] p-[2rem] mx-[1rem] '>
                      <div id="img" className='w-[100%] max-h-[20%]'>
                        <img className='w-[25rem] h-[20rem]' src={item.images[0]} alt="" />
                      </div>
                      <p>${item.price}</p>
                      <p className='text-[2rem]'>{item.title}</p>
                   </div>
                  </Link>
                  
                </SwiperSlide>
            })
        }
  </Swiper>
    </div>
  )
}

export default Slider