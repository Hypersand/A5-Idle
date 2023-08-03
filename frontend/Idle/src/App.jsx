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
      name: "Caligraphy",
      price: 4800,
    },
    detail: {
      engine: {
        name: "disel",
        price: 100,
      },
      wd: {
        name: "4wd",
        price: 40,
      },
      bodytype: {
        name: "4p",
        price: 40,
      },
    },
    color: {
      outside: {
        name: "gray",
        price: 10,
      },
      inside: {
        name: "red",
        price: 10,
      },
    },
    option: {
      additional: [
        { name: "sunroof", price: 10 },
        { name: "sunroof2", price: 10 },
      ],
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
