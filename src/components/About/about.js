import React from "react";
import { DividerSide } from "../Decoratives/divider-side";
import aboutImg from "../../assets/images/aboutImg.jpg";
import "./about.scss";

export const About = () => {
  return (
    <>
      <div className="c-about" id="about">
        <div className="c-about-text__container">
          <h2 className="c-about__heading">
            Lorem Ipsum Dolor Sit Amet Consectetur Molestie.
          </h2>
          <DividerSide />
          <p className="c-about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cumque
            tenetur cum at! Quos fuga, asperiores at exercitationem ad ipsa ex
            totam nostrum ipsam. Saepe fuga culpa distinctio excepturi
            perferendis velit dignissimos reiciendis adipisci laboriosam dolores
            provident, aspernatur, animi laborum est impedit! Ex, temporibus
            nisi. A dolorum repudiandae reiciendis delectus aliquid quam hic
            placeat molestiae?
          </p>
        </div>
        <img className="c-about-img" src={aboutImg} alt="about" />
      </div>
    </>
  );
};
