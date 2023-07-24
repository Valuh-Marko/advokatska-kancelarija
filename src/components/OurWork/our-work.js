import React, { useContext } from "react";
import { DividerCenter } from "../Decoratives/divider-center";
import "./our-work.scss";
import GeneralContext from "../../context/GeneralContext";
import { WorkCard } from "../WorkCard/work-card";

export const OurWork = () => {
  const { values } = useContext(GeneralContext);

  return (
    <>
      <div className="c-our-work">
        <h2 className="c-out-work__heading">
          Ovo su naša načela zastupanja klijenata
        </h2>
        <DividerCenter />
        <div className="c-our-work__content-holder">
          {values.map((work, index) => (
            <WorkCard
              title={work.type}
              img={work.img}
              desc={work.desc}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};
