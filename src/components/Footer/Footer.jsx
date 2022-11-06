import React from "react";
import Paragraph from "../paragraph/Paragraph";
import styled from "styled-components";

const Styledfooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 200px;
  background: #141414;
`;

const Footer = () => {
  return (
    <Styledfooter className="footer">
      <Paragraph className="paragraph_footer"> © TEST, 1022–2022</Paragraph>
    </Styledfooter>
  );
};

export default Footer;
