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
      slidesPerView={"auto"}
      mousewheel={true}
      initialSlide={0}
      breakpoints={{
        768: {
          spaceBetween: 40,
          touchRatio: false,
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
