import { Route, Routes } from "react-router-dom";
import TrimPage from "pages/trimPage";
import DetailModelPage from "pages/detailModelPage";
import ColorPage from "pages/colorPage";
import OptionPage from "pages/optionPage";
import BillPage from "pages/billPage";
import MainPage from "pages/mainPage";
import Layout from "layout/Layout";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/trim" element={<TrimPage />} />
        <Route path="/detail/:tab" element={<DetailModelPage />} />
        <Route path="/color/:tab" element={<ColorPage />} />
        <Route path="/option/:tab" element={<OptionPage />} />
      </Route>
      <Route path="/bill" element={<BillPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default Router;
