import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "../components/common/loading/Loading";
import ErrorPage from "../pages/errorPage";

const TrimPage = React.lazy(() => import("../pages/trimPage"));
const DetailModelPage = React.lazy(() => import("../pages/detailModelPage"));
const ColorPage = React.lazy(() => import("../pages/colorPage"));
const OptionPage = React.lazy(() => import("../pages/optionPage"));
const BillPage = React.lazy(() => import("../pages/billPage"));
const MainPage = React.lazy(() => import("../pages/mainPage"));
const Layout = React.lazy(() => import("../components/layout/Layout"));
const SelectCarPage = React.lazy(() => import("../pages/selectCarPage"));

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/trim" element={<TrimPage />} />
          <Route path="/detail/:tab" element={<DetailModelPage />} />
          <Route path="/color/:tab" element={<ColorPage />} />
          <Route path="/option/:tab" element={<OptionPage />} />
        </Route>
        <Route path="/bill" element={<BillPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/selectCar" element={<SelectCarPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
