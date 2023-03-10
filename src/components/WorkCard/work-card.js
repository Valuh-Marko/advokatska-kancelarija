import React, { useState } from "react";
import { motion } from "framer-motion";
import "./work-card.scss";

export const WorkCard = ({ title, img, desc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        layout
        className={"c-work-card " + (isOpen && "c-work-card--open")}
        onClick={() => setIsOpen(!isOpen)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <img src={img} alt="bgImage" className="c-work-card__bg" />
        <motion.div className="c-work-card__info">
          <motion.h3 layout="position" className="c-work-card__title">
            {title}
          </motion.h3>
          <p className="c-work-card__text">{desc}</p>
        </motion.div>
      </motion.div>
    </>
  );
};
