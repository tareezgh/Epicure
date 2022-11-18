import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-content">
        <ul >
          <li className="footer-list">
            <a href="#" className="footer-link">
              Contact Us
            </a>
          </li>
          <li className="footer-list">
            <a href="#" className="footer-link">
              Term of Use
            </a>
          </li>
          <li className="footer-list">
            <a href="#" className="footer-link">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
