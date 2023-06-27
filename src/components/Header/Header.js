import React, { useEffect, useRef, useState } from "react";
import { Logo } from "../Icons/Logo/logo";
import { AnimatePresence, motion } from "framer-motion";
import { slideIn, slideInFade } from "../../animations/SlideIn.animaiton";
import "./header.scss";
import { Link } from "react-router-dom";

export const Header = ({ isArticles }) => {
  const header = useRef(null);
  const [open, setOpen] = useState(false);
  const [isArticlesPage, setIsArticlesPage] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    isArticles && setIsArticlesPage(true);

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
        <Link href="#" className="c-logo-wrapper" to="/advokatska-kancelarija">
          <Logo customClass="c-icon c-icon--logo" />
          <h3 className="c-logo">NMB</h3>
        </Link>
        <nav className="c-header-nav-wrapper c-header-nav-wrapper--desktop">
          <ul className="c-header-nav">
            {!isArticlesPage ? (
              <>
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
              </>
            ) : null}
            <Link
              to="/advokatska-kancelarija/tekstovi"
              className="c-header__link"
            >
              Tekstovi
            </Link>
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
                {!isArticlesPage ? (
                  <>
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
                  </>
                ) : null}
                <motion.a
                  variants={slideInFade}
                  onClick={() => setOpen(!open)}
                  className="c-header__link"
                >
                  <Link to="/advokatska-kancelarija/tekstovi">Tekstovi</Link>
                </motion.a>
              </motion.ul>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};
