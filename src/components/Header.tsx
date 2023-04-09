import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);

  function handleScroll(): void {
    if (window.scrollY > lastScrollY) {
      // scrolling down
      setShow(() => false);
    } else {
      setShow(() => true);
    }
    setLastScrollY(() => window.scrollY);
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <header className={`header ${!show && "header-hide"}`}>
      <div className="header__container section__container">
        <h1 className="header__title">wongstephenk.com</h1>
        <div className="header__social">
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>
    </header>
  );
};
export default Header;
