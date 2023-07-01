import { GeneralProvider } from "./context/GeneralContext";
import "./styles/styles.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Articles } from "./components/Articles/articles";
import { Header } from "./components/Header/Header";
import { useEffect, useState } from "react";
import { ArticlesProvider } from "./context/ArticlesContext";
import { useScroll, useTransform, motion } from "framer-motion";

function App() {
  let location = useLocation();
  const [isArticles, setIsArticles] = useState(false);

  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    location.pathname === "/advokatska-kancelarija/tekstovi"
      ? setIsArticles(true)
      : setIsArticles(false);
  }, [location]);

  return (
    <GeneralProvider>
      <ArticlesProvider>
        <div className="App">
          <Header isArticles={isArticles} />
          <Routes>
            <Route path="/advokatska-kancelarija" element={<Home />} />
            <Route
              path="/advokatska-kancelarija/tekstovi"
              element={<Articles />}
            />
          </Routes>
          <motion.div className="c-bottom-bg" style={{ y }}></motion.div>
        </div>
      </ArticlesProvider>
    </GeneralProvider>
  );
}

export default App;
