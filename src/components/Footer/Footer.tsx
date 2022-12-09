import { FooterContainer, FooterList, FooterLink } from "./style";

interface Params {
  windowType: string;
}

const Footer = (footerProps: Params) => {
  return (
    <>
      <FooterContainer windowType={footerProps.windowType}>
        <FooterList windowType={footerProps.windowType}>
          <FooterLink>Contact Us</FooterLink>
          <FooterLink>Term of Use</FooterLink>
          <FooterLink>Privacy Policy</FooterLink>
        </FooterList>
      </FooterContainer>
    </>
  );
};

export default Footer;
