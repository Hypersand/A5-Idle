import { Route, Routes } from "react-router-dom";
import TrimPage from "../pages/trimPage";
import DetailModelPage from "../pages/detailModelPage";
import ColorPage from "../pages/colorPage";
import OptionPage from "../pages/optionPage";
import BillPage from "../pages/billPage";

function Router() {
  return (
    <Routes>
      <Route path="/trim" element={<TrimPage />}></Route>
      <Route path="/detailmodel" element={<DetailModelPage />}></Route>
      <Route path="/color" element={<ColorPage />}></Route>
      <Route path="/option" element={<OptionPage />}></Route>
      <Route path="/bill" element={<BillPage />}></Route>
    </Routes>
  );
}

export default Router;
