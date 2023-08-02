import { ThemeProvider } from "styled-components";
import color from "../styles/theme";
import { Reset } from "../styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrimPage from "./pages/trimPage";
import DetailModelPage from "./pages/detailModelPage";
import ColorPage from "./pages/colorPage";
import OptionPage from "./pages/optionPage";
import BillPage from "./pages/billPage";

function App() {
  return (
    <ThemeProvider theme={color}>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TrimPage />}></Route>
          <Route path="/detailmodel" element={<DetailModelPage />}></Route>
          <Route path="/color" element={<ColorPage />}></Route>
          <Route path="/option" element={<OptionPage />}></Route>
          <Route path="/bill" element={<BillPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
