import React from 'react'
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';


const Category = ({catName}) => {
  const getProduct = useSelector((state) => state.products.products.message)

  return (
    <div>
        <h5>{catName}</h5>
        


<Swiper
        spaceBetween={50}
        slidesPerView={6}
      >
        {
            getProduct &&
            getProduct.filter(x=>x.categoryName === catName).map((product) =>(
                <SwiperSlide key={product.id}>
                    <img width="100%" src={product.coverPhoto} alt="" />
                </SwiperSlide>
            ))
        }
      </Swiper>
        </div>
        
  )
}

export default Category