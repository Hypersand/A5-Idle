import { Route, Routes } from "react-router-dom";
import TrimPage from "../pages/trimPage";
import DetailModelPage from "../pages/detailModelPage";
import ColorPage from "../pages/colorPage";
import OptionPage from "../pages/optionPage";
import BillPage from "../pages/billPage";
import Layout from "../components/layout/layout";
import MainPage from "../pages/mainPage";

function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/trim" element={<TrimPage />} />
        <Route path="/detail" element={<DetailModelPage />} />
        <Route path="/color" element={<ColorPage />} />
        <Route path="/option" element={<OptionPage />} />
        <Route path="/bill" element={<BillPage />} />
      </Route>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default Router;
