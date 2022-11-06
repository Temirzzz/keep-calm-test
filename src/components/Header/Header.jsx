import React from "react";
import Image from "../../UI/Image/Image";
import LogoSrc from "../../assets/images/logos/logo.svg";
import PhoneSrc from "../../assets/images/logos/phone.svg";
import Link from "../../UI/Link/Link";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  height: 100px;
  width: 100%;
  background: linear-gradient(0deg, #464341 0%, #010101 100%);
  padding: 0 20px;
  margin-bottom: 200px;
  @media screen and (max-width: 1239px) {
    margin-bottom: 72px;
  }
  @media screen and (max-width: 767px) {
    height: 60px;
  }

  .header__conteiner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const Header = () => {
  return (
    <StyledHeader className="header">
      <div className="header__conteiner">
        <Image className="image image_logo" src={LogoSrc} alt="logo" />
        <Link href="tel:+74954954954">
          <Image className="image image_phone" src={PhoneSrc} alt="phone" />
        </Link>
        <Link href="tel:+74954954954" className="link link_phone">
          +7 (495) 495-49-54
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
