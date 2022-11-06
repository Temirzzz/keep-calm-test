import { createGlobalStyle } from "styled-components";

import ManropeRegular from "./manrope/Manrope-Regular.woff";
import ManropeMedium from "./manrope/Manrope-Medium.woff";
import ManropeBold from "./manrope/Manrope-Bold.woff";

import OrchideaRegular from "./orchidea/OrchideaPro-Regular.woff";
import OrchideaMedium from "./orchidea/OrchideaPro-Medium.woff";
import OrchideaBold from "./orchidea/OrchideaPro-Bold.woff";

export default createGlobalStyle`
  @font-face {
    font-family: 'OrchideaRegular';
    src: local('Font Name'), local('FontName'),
    url(${OrchideaRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'OrchideaMedium';
    src: local('Font Name'), local('FontName'),
    url(${OrchideaMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'OrchideaBold';
    src: local('Font Name'), local('FontName'),
    url(${OrchideaBold}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }



  @font-face {
    font-family: 'ManropeRegular';
    src: local('Font Name'), local('FontName'),
    url(${ManropeRegular}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'ManropeMedium';
    src: local('Font Name'), local('FontName'),
    url(${ManropeMedium}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'ManropeBold';
    src: local('Font Name'), local('FontName'),
    url(${ManropeBold}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;
