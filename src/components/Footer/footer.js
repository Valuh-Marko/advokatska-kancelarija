import React, { useContext } from "react";
import GeneralContext from "../../context/GeneralContext";
import { GrLocation, GrMail } from "react-icons/gr";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import "./footer.scss";

export const Footer = () => {
  const { ourTeam } = useContext(GeneralContext);

  return (
    <>
      <div className="c-footer" id="footer">
        <div className="c-footer__location">
          <h5 className="c-footer__title">
            <span>Kontakt</span>
          </h5>
          <a className="c-footer__adress">
            <GrLocation color="white" /> Maksima Gorkog 10a
          </a>
          <a className="c-footer__city">
            <BsFillHouseDoorFill /> 21000 Novi Sad
          </a>
        </div>
        {ourTeam.map((member, index) => (
          <div key={index} className="c-footer__team-member">
            <h5 className="c-footer__title">{member.name}</h5>
            <a className="c-footer__email" href={`mailto${member.email}`}>
              <GrMail /> {member.email}
            </a>
            <a className="c-footer__phone" href={`tel:${member.email}`}>
              <AiFillPhone />+{member.phone}
            </a>
          </div>
        ))}
      </div>
      <a href="https://calendar.google.com/calendar/embed?src=388de8e0ea2979f071bfccaa348787d848e465062f684b289ee2168359cee549%40group.calendar.google.com&ctz=Europe%2FBelgrade">
        Ajde kklini ovde
      </a>
    </>
  );
};
