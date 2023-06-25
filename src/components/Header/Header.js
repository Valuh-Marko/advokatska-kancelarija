import React, { useEffect, useRef, useState } from "react";
import { Logo } from "../Icons/Logo/logo";
import { Linkedin } from "../Icons/Linkedin/linkedin";
import { Facebook } from "../Icons/Facebook/facebook";
import { Twitter } from "../Icons/Twitter/twitter";
import { AnimatePresence, motion } from "framer-motion";
import { slideIn, slideInFade } from "../../animations/SlideIn.animaiton";
import "./header.scss";

export const Header = () => {
  const header = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    const scrollListener = window.addEventListener("scroll", (e) => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (window.scrollY > window.innerHeight - 50) {
        if (scrollTop > lastScrollTop) {
          header.current.className = "c-header c-header--short hide";
          setOpen(false);
        } else {
          header.current.className = "c-header c-header--short";
        }

        lastScrollTop = scrollTop;

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
        <a href="#" className="c-logo-wrapper">
          <Logo customClass="c-icon c-icon--logo" />
          <h3 className="c-logo">NMB</h3>
        </a>
        <nav className="c-header-nav-wrapper c-header-nav-wrapper--desktop">
          <ul className="c-header-nav">
            <a href="#" className="c-header__link">
              Početak
            </a>
            <a href="#about" className="c-header__link">
              O Nama
            </a>
            <a href="#services" className="c-header__link">
              Naše Usluge
            </a>
            <a href="#our-team" className="c-header__link">
              Upoznaj naš tim
            </a>
            <a href="#footer" className="c-header__link">
              Kontakt
            </a>
          </ul>
        </nav>
        <nav className="c-header-nav-wrapper c-header-nav-wrapper--mobile">
          <div
            className={`c-hamburger ${open && "open"}`}
            onClick={() => setOpen(!open)}
          >
            <div className="c-line-holder">
              <div className="c-line"></div>
              <div className="c-line"></div>
              <div className="c-line"></div>
            </div>
          </div>
          <AnimatePresence>
            {open && (
              <motion.ul
                className="c-header-nav"
                variants={slideIn}
                initial="initial"
                animate="open"
                exit="initial"
              >
                <motion.a
                  variants={slideInFade}
                  onClick={() => setOpen(!open)}
                  href="#"
                  className="c-header__link"
                >
                  Home
                </motion.a>
                <motion.a
                  variants={slideInFade}
                  onClick={() => setOpen(!open)}
                  href="#about"
                  className="c-header__link"
                >
                  About
                </motion.a>
                <motion.a
                  variants={slideInFade}
                  onClick={() => setOpen(!open)}
                  href="#services"
                  className="c-header__link"
                >
                  Services
                </motion.a>
                <motion.a
                  variants={slideInFade}
                  onClick={() => setOpen(!open)}
                  href="#our-team"
                  className="c-header__link"
                >
                  Meet Our Team
                </motion.a>
                <motion.a
                  variants={slideInFade}
                  onClick={() => setOpen(!open)}
                  href="#footer"
                  className="c-header__link"
                >
                  Contact
                </motion.a>
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};
