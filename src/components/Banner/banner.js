import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import GeneralContext from "../../context/GeneralContext";
import { Divider } from "../Decoratives/divider";
import { Logo } from "../Icons/Logo/logo";
import "./banner.scss";

export const Banner = () => {
  const { latinSayings } = useContext(GeneralContext);
  const [isVisible, setVisible] = useState(true);
  const [saying, setSaying] = useState(
    latinSayings[Math.floor(Math.random() * latinSayings.length)]
  );

  useEffect(() => {
    const setInvisibleInterval = setInterval(() => {
      setVisible(false);
    }, 4000);
    setTimeout(() => {
      const setVisibleInterval = setInterval(() => {
        setVisible(true);
        setSaying(
          latinSayings[Math.floor(Math.random() * latinSayings.length)]
        );
      }, 4000);
    }, 1000);
  }, []);

  return (
    <>
      <div className="c-banner">
        <Logo customClass="c-banner__logo" />
        <AnimatePresence>
          {isVisible ? (
            <motion.div
              key="nekiKey"
              className="c-banner__text-holder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2 className="c-heading">{saying.latin}</motion.h2>
              <motion.p className="c-subheading">{saying.translate}</motion.p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
};
