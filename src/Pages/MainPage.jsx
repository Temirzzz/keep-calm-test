import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Block from "../components/Block/Block";
import Image from "../UI/Image/Image";
import { images } from "../components/SwiperSlider/imageSrc";
import SwiperSlider from "../components/SwiperSlider/SwiperSlider";
import Paragraph from "../components/paragraph/Paragraph";
import FirstSrc from "../assets/images/1.png";
import SecondSrc from "../assets/images/2.png";
import ThirdSrc from "../assets/images/3.png";
import FourthSrc from "../assets/images/4.png";

const MainPage = () => {
  return (
    <>
      <Header />
      <Block
        classNameBlock="block block_pad"
        ClassNameSection="block__content block_bottom-120  block_bottom-64"
      >
        <Paragraph title className="paragraph paragraph_title">
          ut aliquip ex ea commodo consequat
        </Paragraph>
      </Block>
      <Block
        classNameBlock="block block_pad"
        ClassNameSection="block__content block_right-indent block_bottom-120"
      >
        <Image
          src={FirstSrc}
          alt="woman-with-ring"
          className="image image_first"
        />

        <Block
          classNameBlock="block"
          ClassNameSection="block__content  block_column"
        >
          <Paragraph className="paragraph paragraph_subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Paragraph>
          <Paragraph className="paragraph paragraph_text">
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br />
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </Paragraph>
        </Block>
      </Block>

      <Block
        classNameBlock="block block_pad"
        ClassNameSection="block__content block_right-indent block_bottom-120 block_bottom-70"
      >
        <Block
          classNameBlock="block"
          ClassNameSection="block__content  block_column"
        >
          <Paragraph className="paragraph paragraph_subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Paragraph>
          <Paragraph className="paragraph paragraph_text">
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br />
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </Paragraph>
        </Block>
        <Image
          src={SecondSrc}
          alt="woman-in-heat"
          className="image image_second"
        />
      </Block>
      <Block
        classNameBlock="block block_pad"
        ClassNameSection="block__content block_bottom-120"
      >
        <Paragraph className="paragraph paragraph_title">
          Lorem ipsum dolor sit amet
        </Paragraph>
      </Block>

      <Block
        classNameBlock="block block_swiper-pad"
        ClassNameSection="block__content block_bottom-160 block_row block_swiper"
      >
        <SwiperSlider images={images} />
      </Block>

      <Block
        classNameBlock="block block_pad"
        ClassNameSection="block__content block_right-indent block_bottom-120"
      >
        <Image
          src={ThirdSrc}
          alt="woman-in-dress"
          className="image image_first"
        />

        <Block
          classNameBlock="block"
          ClassNameSection="block__content  block_column"
        >
          <Paragraph className="paragraph paragraph_subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Paragraph>
          <Paragraph className="paragraph paragraph_text">
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br />
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </Paragraph>
        </Block>
      </Block>

      <Block
        classNameBlock="block block_pad"
        ClassNameSection="block__content block_right-indent block_bottom-120 block_bottom-70"
      >
        <Block
          classNameBlock="block"
          ClassNameSection="block__content  block_column"
        >
          <Paragraph className="paragraph paragraph_subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Paragraph>
          <Paragraph className="paragraph paragraph_text">
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br />
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </Paragraph>
        </Block>
        <Image
          src={FourthSrc}
          alt="woman-with-flower"
          className="image image_second"
        />
      </Block>
      <Footer />
    </>
  );
};

export default MainPage;
