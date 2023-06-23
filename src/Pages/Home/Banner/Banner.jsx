import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import banner1 from '../../../assets/bannerImg/1.jpg'
import banner2 from '../../../assets/bannerImg/2.jpg'
import banner3 from '../../../assets/bannerImg/3.jpg'
import banner4 from '../../../assets/bannerImg/4.jpg'
import banner5 from '../../../assets/bannerImg/5.jpg'


// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper"
            >

                <SwiperSlide><img src={banner1} className="" alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner2} className="" alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner3} className="" alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner4} className="" alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner5} className="" alt="" /></SwiperSlide>
                             
        </Swiper >
        </>
    );
};

export default Banner;