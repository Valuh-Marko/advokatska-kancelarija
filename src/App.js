import { About } from "./components/About/about";
import { Banner } from "./components/Banner/banner";
import { Header } from "./components/Header/Header";
import { OurWork } from "./components/OurWork/our-work";
import { Team } from "./components/Team/team";
import { GeneralProvider } from "./context/GeneralContext";
import { motion, useScroll, useTransform } from "framer-motion";
import "./styles/styles.scss";

function App() {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <GeneralProvider>
      <div className="App">
        <Header />
        <Banner />
        <About />
        <OurWork />
        <Team />
        <motion.div className="c-bottom-bg"
          style={{ y }}
        >
        </motion.div>
      </div>
    </GeneralProvider>
  );
}

export default App;
