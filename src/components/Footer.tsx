import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="gray"></div>
      <div>
        <p className="footer_text">© Stephen Wong {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
