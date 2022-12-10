import { FooterContainer, FooterList, FooterLink } from "./style";
import { useNavigate } from "react-router";

interface Params {
  windowType: string;
}

const Footer = (footerProps: Params) => {
  const navigate = useNavigate();
  return (
    <>
      <FooterContainer windowType={footerProps.windowType}>
        <FooterList windowType={footerProps.windowType}>
          <FooterLink onClick={() => navigate(`/`)}>Contact Us</FooterLink>
          <FooterLink onClick={() => navigate(`/`)}>Term of Use</FooterLink>
          <FooterLink onClick={() => navigate(`/`)}>Privacy Policy</FooterLink>
        </FooterList>
      </FooterContainer>
    </>
  );
};

export default Footer;
