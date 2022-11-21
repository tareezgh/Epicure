import React from "react";


import { FooterContainer, FooterList, FooterLink } from "./style";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterList>
          <FooterLink>Contact Us</FooterLink>
          <FooterLink>Term of Use</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
        </FooterList>
      </FooterContainer>

    </>
  );
};

export default Footer;
