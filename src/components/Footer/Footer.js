import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__section">
        Challenge by
        <a
          className="footer__link"
          href="https://www.frontendmentor.io/challenges/project-tracking-intro-component-5d289097500fcb331a67d80e"
          rel="noopener noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        .
      </p>
      <p className="footer__section">
        Coded by
        <a
          className="footer__link"
          href="https://twitter.com/santu69"
          rel="noopener noreferrer"
          target="_blank"
        >
          Shiva Santosh Jana
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
