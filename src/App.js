import { GeneralProvider } from "./context/GeneralContext";
import "./styles/styles.scss";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Articles } from "./components/Articles/articles";

function App() {
  return (
    <GeneralProvider>
      <div className="App">
        <Routes>
          <Route path="/advokatska-kancelarija" element={<Home />} />
          <Route
            path="/advokatska-kancelarija/tekstovi"
            element={<Articles />}
          />
        </Routes>
      </div>
    </GeneralProvider>
  );
}

export default App;
