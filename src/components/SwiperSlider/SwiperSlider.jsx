import React from "react";
import Image from "../../UI/Image/Image";
import { Scrollbar, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import "./SwiperSlider.scss";

const SwiperSlider = ({ images }) => {
  return (
    <Swiper
      modules={[Scrollbar, Mousewheel]}
      // scrollbar={{ draggable: true }}
      spaceBetween={30}
      slidesPerView={4.5}
      mousewheel={true}
      initialSlide={0}
      breakpoints={{
        767: {
          touchRatio: false,
        },
      }}
      parallax={true}
      className="parallax-bg"
      data-swiper-parallax="-23%"
    >
      {images.map((image) => (
        <SwiperSlide
          data-swiper-parallax="-300"
          data-swiper-parallax-duration="600"
          key={image.id}
        >
          <Image src={image.src} alt={image.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;
