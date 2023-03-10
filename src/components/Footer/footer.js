import React, { useContext } from 'react'
import GeneralContext from '../../context/GeneralContext'
import { GrLocation, GrMail } from "react-icons/gr"
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillPhone } from 'react-icons/ai'
import ornament15 from '../../assets/images/ornament15.svg'
import './footer.scss'

export const Footer = () => {
  const { ourTeam } = useContext(GeneralContext)

  return (
    <>
      <div className="c-footer" id='footer'>
        <div className="c-footer__location">
          <h5 className="c-footer__title">Contact</h5>
          <a className="c-footer__adress"><GrLocation color='white' /> Maksima Gorkog 10a</a>
          <a className="c-footer__city"><BsFillHouseDoorFill />  21000 Novi Sad</a>
        </div>
        {ourTeam.map((member, index) => (
          <div key={index} className="c-footer__team-member">
            <h5 className="c-footer__title">{member.title}</h5>
            <a className="c-footer__email"><GrMail /> {member.email}</a>
            <a className="c-footer__phone"><AiFillPhone /> {member.phone}</a>
            <a className="c-footer__social"><AiFillLinkedin /> {member.social}</a>
          </div>
        ))}
        <img className='c-ornament' src={ornament15} alt="ornament" />
      </div>
    </>
  )
}
