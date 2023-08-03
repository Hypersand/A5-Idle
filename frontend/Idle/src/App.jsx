import { ThemeProvider } from "styled-components";
import color from "../styles/theme";
import { Reset } from "../styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrimPage from "./pages/trimPage";
import DetailModelPage from "./pages/detailModelPage";
import ColorPage from "./pages/colorPage";
import OptionPage from "./pages/optionPage";
import BillPage from "./pages/billPage";
import { useState } from "react";
import carContext from "../utils/carContext";
import currentPageContext from "../utils/currentPageContext";
function App() {
  const [car, setCar] = useState({
    trim: {
      name: "",
      price: 0,
    },
    detail: {
      engine: {
        name: "",
        price: 0,
      },
      wd: {
        name: "",
        price: 0,
      },
      bodytype: {
        name: "",
        price: 0,
      },
    },
    color: {
      outside: {
        name: "",
        price: 0,
      },
      inside: {
        name: "",
        price: 0,
      },
    },
    option: {
      additional: [],
      confusing: [],
    },
  });
  const [currentPage, setCurrentPage] = useState("trim");
  return (
    <ThemeProvider theme={color}>
      <Reset />
      <BrowserRouter>
        <carContext.Provider value={{ car, setCar }}>
          <currentPageContext.Provider value={{ currentPage, setCurrentPage }}>
            <Routes>
              <Route path="/" element={<TrimPage />}></Route>
              <Route path="/detailmodel" element={<DetailModelPage />}></Route>
              <Route path="/color" element={<ColorPage />}></Route>
              <Route path="/option" element={<OptionPage />}></Route>
              <Route path="/bill" element={<BillPage />}></Route>
            </Routes>
          </currentPageContext.Provider>
        </carContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
