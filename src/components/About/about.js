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
            Stavljamo Vaše pravne <br /> potrebe na prvo mesto
          </h2>
          <DividerSide />
          <p className="c-about__text">
            Mi smo posvećeni tim iskusnih advokata koji su strastveni u
            pomaganju našim klijentima da ostvare svoje pravne ciljeve. Naša
            misija je da pružimo personalizovanu i efikasnu pravnu
            zastupljenost. Fokusirani na komunikaciju, poverenje i integritet,
            neprestano radimo kako bismo se zalagali za naše klijente i
            zaštitili njihova prava i interese. Bez obzira da li se suočavate sa
            složenim pravnim pitanjem ili jednostavno trebate vođstvo i savet,
            mi smo tu da pomognemo. Sa našim obimnim znanjem i iskustvom u
            različitim oblastima prava, posvećeni smo pružanju najvišeg
            kvaliteta pravnih usluga i postizanju uspešnih ishoda za naše
            klijente.
          </p>
        </div>
        <img className="c-about-img" src={aboutImg} alt="about" />
      </div>
    </>
  );
};
