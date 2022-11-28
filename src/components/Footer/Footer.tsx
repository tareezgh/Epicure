import React from "react";

import { FooterContainer, FooterList, FooterLink } from "./style";

interface Params {
  Type: string;
}

const Footer = (props: Params) => {
  return (
    <>
      <FooterContainer type={props.Type}>
        <FooterList type={props.Type}>
          <FooterLink>Contact Us</FooterLink>
          <FooterLink>Term of Use</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
        </FooterList>
      </FooterContainer>
    </>
  );
};

export default Footer;
