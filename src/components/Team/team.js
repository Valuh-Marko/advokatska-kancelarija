import React, { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GeneralContext from "../../context/GeneralContext";
import { DividerSide } from "../Decoratives/divider-side";
import { heightMotion } from "../../animations/heightSwitch.animation";
import ornament35 from "../../assets/images/ornament35.svg";
import "./team.scss";
import { Modal } from "../Modal/modal";

export const Team = () => {
  const { ourTeam } = useContext(GeneralContext);
  const [hoverState, setHoverState] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="c-team" id="our-team">
        <h2 className="c-team__title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
          voluptates ad?
        </h2>
        <DividerSide />
        <div className="c-team__holder">
          {ourTeam.map((member, index) => {
            return (
              <div
                className={`c-member__image-wrapper ${
                  hoverState === index ? "active" : ""
                }`}
                key={`${index}img`}
              >
                <img className="c-member__image" src={member.img} alt="img" />
              </div>
            );
          })}
          {ourTeam.map((member, index) => {
            return (
              <motion.div
                className={`c-member__name ${
                  hoverState === index ? "active" : ""
                } `}
                initial="initial"
                whileHover="hover"
                animate="initial"
                key={`${index}name`}
                onHoverStart={() => setHoverState(index)}
                onClick={() => {
                  modalOpen ? closeModal() : openModal();
                  setModalData(index);
                }}
              >
                <h5 className="c-member__title">{member.title}</h5>
                <div className="c-member__logo"></div>
                <motion.p className="c-member__desc" variants={heightMotion}>
                  {member.desc}
                </motion.p>
              </motion.div>
            );
          })}
          <AnimatePresence>
            {modalOpen && (
              <Modal
                modalOpen={modalOpen}
                handleClose={closeModal}
                data={ourTeam[modalData]}
              />
            )}
          </AnimatePresence>
          <img src={ornament35} alt="ornament" className="c-ornament36" />
        </div>
      </div>
    </>
  );
};
