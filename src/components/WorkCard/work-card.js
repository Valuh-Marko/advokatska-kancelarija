import React from "react";
import "./work-card.scss";

export const WorkCard = ({ title, img, desc }) => {
  return (
    <>
      <div className="c-work-card">
        <img src={img} alt="bgImage" className="c-work-card__bg" />
        <div className="c-work-card__info">
          <h3 className="c-work-card__title">{title}</h3>
          <p className="c-work-card__text">{desc}</p>
        </div>
      </div>
    </>
  );
};
