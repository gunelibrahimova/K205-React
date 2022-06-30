import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import 'swiper/css';


const Slider = () => {
  const getProduct = useSelector((state) => state.products.products.message)

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
            getProduct &&
            getProduct.filter(x=>x.isSlider).map((product)=>(
                <SwiperSlide key={product.id}>
                    <img width="30%" src={product.coverPhoto} alt="" />
                </SwiperSlide>
            ))
        }
      </Swiper>
    </div>
  );
};

export default Slider;
