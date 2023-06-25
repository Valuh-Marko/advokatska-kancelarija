import React from "react";
import { motion } from "framer-motion";
import "./work-card.scss";

export const WorkCard = ({ title, img, desc }) => {
  return (
    <>
      <motion.div className={"c-work-card"}>
        <img
          src={img}
          alt="bgImage"
          className="c-work-card__bg"
          loading="lazy"
        />
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
