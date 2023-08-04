import { ThemeProvider } from "styled-components";
import color from "../styles/theme";
import { Reset } from "../styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrimPage from "./pages/trimPage";
import DetailModelPage from "./pages/detailModelPage";
import ColorPage from "./pages/colorPage";
import OptionPage from "./pages/optionPage";
import BillPage from "./pages/billPage";
import carContext from "../utils/carContext";
import currentPageContext from "../utils/currentPageContext";
import { useState } from "react";

function App() {
  const [car, setCar] = useState({
    trim: {
      name: "Leblanc",
      price: 40000000,
    },
    detail: {
      engine: {
        name: "가솔린",
        price: 0,
      },
      wd: {
        name: "4wd",
        price: 1000000,
      },
      bodytype: {
        name: "7인승",
        price: 2000000,
      },
    },
    color: {
      outside: {
        name: "그라파이드 그레이 메탈릭",
        price: 0,
      },
      inside: {
        name: "퀼팅천연(블랙)",
        price: 3000000,
      },
    },
    option: {
      additional: [
        { name: "현대스마트센스", price: 1000000 },
        { name: "컴포트2", price: 2000000 },
        { name: "듀얼와이드 선루프", price: 3000000 },
      ],
      confusing: [{ name: "abc", price: 0 }],
    },
    bill: {},
    getTrimSum: function () {
      return this.trim.price !== undefined ? this.trim.price : 0;
    },
    getDetailSum: function () {
      return this.detail.engine.price !== undefined &&
        this.detail.wd.price !== undefined &&
        this.detail.bodytype.price !== undefined
        ? this.detail.engine.price + this.detail.wd.price + this.detail.bodytype.price
        : 0;
    },
    getColorSum: function () {
      return this.color.outside.price !== undefined && this.color.inside.price !== undefined
        ? this.color.outside.price + this.color.inside.price
        : 0;
    },
    getOptionSum: function () {
      let total = 0;
      this.option.additional.forEach((item) => (total += item.price));
      return total;
    },
    getAllSum: function () {
      return this.getTrimSum() + this.getColorSum() + this.getDetailSum() + this.getOptionSum();
    },
    getAllOptionChecked() {
      if (
        this.trim.name !== undefined &&
        this.detail.engine.name !== undefined &&
        this.detail.wd.name !== undefined &&
        this.detail.bodytype.name !== undefined &&
        this.color.outside.name !== undefined &&
        this.color.inside.name !== undefined
      ) {
        return true;
      }
      return false;
    },
  });
  const [currentPage, setCurrentPage] = useState("bill");
  return (
    <ThemeProvider theme={color}>
      <Reset />
      <BrowserRouter>
        <carContext.Provider value={{ car, setCar }}>
          <currentPageContext.Provider value={{ currentPage, setCurrentPage }}>
            <Routes>
              <Route path="/trim" element={<TrimPage />}></Route>
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
