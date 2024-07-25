import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules'; 

const Carousal = ({ images }) => {
  return (
    <>
      <style>
        {`
        .swiper-button-next,
        .swiper-button-prev {
          color: #D55900;
          font-weight: bold; 
        }
        `}
      </style>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]} 
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full xl:h-[39rem]">
              <img src={item.image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-xl" />
              <h1 className="absolute bottom-16 left-12 italic underline text-white xl:text-5xl font-bold">{item.text}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousal;
