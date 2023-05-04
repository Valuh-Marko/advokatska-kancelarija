import React, { useContext } from "react";
import { DividerCenter } from "../Decoratives/divider-center";
import "./our-work.scss";
import GeneralContext from "../../context/GeneralContext";
import { WorkCard } from "../WorkCard/work-card";

export const OurWork = () => {
  const { fieldsOfWork } = useContext(GeneralContext);

  return (
    <>
      <div className="c-our-work" id="services">
        <h2 className="c-out-work__heading">
          Nudimo širok spektar pravnih usluga za ispunjenje Vaših potreba
        </h2>
        <DividerCenter />
        <div className="c-our-work__content-holder">
          {fieldsOfWork.map((work, index) => (
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
