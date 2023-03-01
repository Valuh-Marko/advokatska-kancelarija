import React, { useContext, useEffect } from "react";
import GeneralContext from "../../context/GeneralContext";
import { Divider } from "../Decoratives/divider";
import { Logo } from "../Icons/Logo/logo";
import "./banner.scss";

export const Banner = () => {
  const { latinSayings } = useContext(GeneralContext);
  const saying = latinSayings[Math.floor(Math.random() * latinSayings.length)];

  return (
    <>
      <div className="c-banner">
        <Logo customClass="c-banner__logo" />
        <h2 className="c-heading">{saying.latin}</h2>
        <Divider />
        <p className="c-subheading">{saying.translate}</p>
      </div>
    </>
  );
};
