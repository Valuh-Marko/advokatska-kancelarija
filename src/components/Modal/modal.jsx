import React from 'react'
import { motion } from 'framer-motion'
import { Backdrop } from '../Backdrop/backdrop'
import ReactDOM from 'react-dom'
import close from "../../assets/images/close.svg"
import "./modal.scss";

export const Modal = ({ handleClose, data }) => {
  return ReactDOM.createPortal(
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="c-modal"
      >
        <img src={close} alt="close-img" className='c-close-icon' onClick={handleClose} />
        <img src={data.img} alt="image" className="c-modal-img" />
        <div className="c-modal-text-container">
          <h2 className="c-modal-title">{data.name}</h2>
          <h5 className='c-modal-subtitle'>{data.title}</h5>
          <p className="c-modal-desc">{data.desc}</p>
        </div>
      </motion.div>
    </Backdrop>,
    document.getElementById('portal')
  )
}

export const ShortModal = ({ handleClose, data }) => {
  return ReactDOM.createPortal(
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="c-modal"
      >
        <img src={close} alt="close-img" className='c-close-icon' onClick={handleClose} />
        <img src={data.icon} alt="image" className="c-modal-img c-modal-img__short" />
        <div className="c-modal-text-container">
          <h2 className="c-modal-title">{data.title}</h2>
          <p className="c-modal-desc">{data.desc}</p>
        </div>
      </motion.div>
    </Backdrop>,
    document.getElementById('portal')
  )
}

export const ArticlesModal = ({ handleClose, data }) => {
  return ReactDOM.createPortal(
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="c-modal c-modal--article"
      >
        <img src={close} alt="close-img" className='c-close-icon' onClick={handleClose} />
        <img src={data.img} alt="image" className="c-modal-img" />
        <div className="c-modal-text-container">
          <h2 className="c-modal-title">{data.title}</h2>
          <p className="c-modal-desc">{data.desc}</p>
        </div>
      </motion.div>
    </Backdrop>,
    document.getElementById('portal')
  )
}