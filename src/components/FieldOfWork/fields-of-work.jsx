import { AnimatePresence } from 'framer-motion';
import React, { useState, useRef } from 'react'
import { useContext } from 'react'
import GeneralContext from '../../context/GeneralContext'
import { ShortModal } from "../Modal/modal";
import divider from "../../assets/images/divider.svg"
import "./field-of-work.scss"

export const FieldsOfWork = () => {
  const sliderRef = useRef(null);
  const sliderWrapperRef = useRef(null);

  const { fieldsOfWork } = useContext(GeneralContext);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const showNext = () => {
    const sliderRefClientWidth = sliderRef.current.clientWidth;
    const sliderRefChildrenCount = sliderRef.current.childElementCount;

    sliderRef.current.scrollLeft += sliderRefClientWidth * 0.6;

    if (sliderRef.current.scrollLeft >= sliderRefClientWidth * (sliderRefChildrenCount - 7)) {
      sliderRef.current.scrollLeft = 0;
    }
  }

  return (
    <div className="c-fields-of-work-container">
      <h2 className="c-fields-of-work__title">Oblasti rada</h2>
      <div onClick={showNext} className='c-slider-action'>
        <img src={divider} alt="divider" />
      </div>
      <div className={`c-fields-of-work-slider__wrapper`} ref={sliderWrapperRef}>
        <div ref={sliderRef} className="c-fields-of-work-slider">
          {fieldsOfWork.map((work, index) => (
            <div className='c-field-of-work' key={index}
              onClick={() => {
                modalOpen ? closeModal() : openModal();
                setModalData(work);
              }}
            >
              <img className='c-field-of-work__icon' src={work.icon} alt="icon" />
              <h3 className="c-field-of-work__title">{work.title}</h3>
              <p className="c-field-of-work__desc">{work.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {modalOpen && (
          <ShortModal
            modalOpen={modalOpen}
            handleClose={closeModal}
            data={modalData}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
