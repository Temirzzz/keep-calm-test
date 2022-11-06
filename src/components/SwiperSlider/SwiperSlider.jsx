import React from "react";
import Image from "../../UI/Image/Image";
import { Scrollbar, Mousewheel, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/parallax";
import "./SwiperSlider.scss";

const SwiperSlider = ({ images }) => {
  return (
    <Swiper
      modules={[Scrollbar, Mousewheel, Parallax]}
      spaceBetween={10}
      slidesPerView={1.5}
      mousewheel={true}
      initialSlide={0}
      breakpoints={{
        1241: {
          spaceBetween: 20,
          slidesPerView: 4,
          touchRatio: false,
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 3.5,
          touchRatio: false,
        },
        500: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
        321: {
          spaceBetween: 10,
          slidesPerView: 2,
        },
      }}
      preloadImages={false}
      watchSlidesProgress={true}
      parallax={true}
      className="parallax-bg"
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <Image src={image.src} alt={image.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
