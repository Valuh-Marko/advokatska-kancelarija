import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import GeneralContext from "../../context/GeneralContext";
import { Logo } from "../Icons/Logo/logo";
import "./banner.scss";

export const Banner = () => {
  const { latinSayings } = useContext(GeneralContext);
  const [isVisible, setVisible] = useState(true);
  const [saying, setSaying] = useState(
    latinSayings[Math.floor(Math.random() * latinSayings.length)]
  );

  useEffect(() => {
    const setVisibilityInterval = setInterval(() => {
      handleSayingSwitching();
    }, 8000);

    return () => {
      clearInterval(setVisibilityInterval);
    };
  });

  const handleSayingSwitching = () => {
    setVisible(false);
    setTimeout(() => {
      setSaying(latinSayings[Math.floor(Math.random() * latinSayings.length)]);
    }, 300);
    setTimeout(() => {
      setVisible(true);
    }, 600);
  };

  return (
    <>
      <div className="c-banner">
        <Logo customClass="c-banner__logo" />
        <AnimatePresence>
          <div
            key="nekiKey"
            className={`c-banner__text-holder ${
              !isVisible ? "invisible" : "visible"
            }`}
          >
            <motion.h2 className="c-heading">{saying.latin}</motion.h2>
            <motion.p className="c-subheading">{saying.translate}</motion.p>
          </div>
        </AnimatePresence>
      </div>
    </>
  );
};
