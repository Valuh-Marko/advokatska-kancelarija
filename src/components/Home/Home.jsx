import { Header } from '../Header/Header'
import { Banner } from '../Banner/banner'
import { About } from '../About/about'
import { OurWork } from '../OurWork/our-work'
import { Team } from '../Team/team'
import { Footer } from '../Footer/footer'
import { motion, useScroll, useTransform } from "framer-motion";
import React from 'react'

export const Home = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div>
      <Banner />
      <About />
      <OurWork />
      <Team />
      <Footer />
      <motion.div className="c-bottom-bg" style={{ y }}></motion.div>
    </div>
  )
}
