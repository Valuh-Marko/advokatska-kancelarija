import React, { useEffect, useRef } from "react";
import { Logo } from "../Icons/Logo/logo";
import { Linkedin } from "../Icons/Linkedin/linkedin";
import { Facebook } from "../Icons/Facebook/facebook";
import { Twitter } from "../Icons/Twitter/twitter";
import "./header.scss";

export const Header = () => {
  const header = useRef(null);

  useEffect(() => {
    const scrollListener = window.addEventListener("scroll", (e) => {
      if (window.scrollY > 768) {
        header.current.className = "c-header c-header--short";

        return;
      }

      header.current.className = "c-header";
    });

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
      <header ref={header} className="c-header">
        <div className="c-logo-wrapper">
          <Logo customClass="c-icon c-icon--logo" />
          <h3 className="c-logo">DND</h3>
        </div>
        <nav className="c-header-nav-wrapper">
          <ul className="c-header-nav">
            <a href="#" className="c-header__link">
              Home
            </a>
            <a href="#about" className="c-header__link">
              About
            </a>
            <a href="#services" className="c-header__link">
              Services
            </a>
            <a href="#footer" className="c-header__link">
              Contact
            </a>
          </ul>
          <ul className="c-header-socials">
            <a href="#" className="c-header-socials__link">
              <Linkedin customClass="c-icon" />
            </a>
            <a href="#" className="c-header-socials__link">
              <Facebook customClass="c-icon" />
            </a>
            <a href="#" className="c-header-socials__link">
              <Twitter customClass="c-icon" />
            </a>
          </ul>
        </nav>
      </header>
    </>
  );
};
