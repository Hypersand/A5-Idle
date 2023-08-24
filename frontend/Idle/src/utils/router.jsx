import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "../components/common/loading/Loading";
import ErrorBoundary from "../components/common/error/ErrorBoundary";

const TrimPage = React.lazy(() => import("../pages/trimPage"));
const DetailModelPage = React.lazy(() => import("../pages/detailModelPage"));
const ColorPage = React.lazy(() => import("../pages/colorPage"));
const OptionPage = React.lazy(() => import("../pages/optionPage"));
const BillPage = React.lazy(() => import("../pages/billPage"));
const MainPage = React.lazy(() => import("../pages/mainPage"));
const Layout = React.lazy(() => import("../components/layout/Layout"));
const CarSelectionPage = React.lazy(() => import("../pages/carSelectionPage"));
const ErrorPage = React.lazy(() => import("../pages/errorPage"));
const ServerErrorPage = React.lazy(() => import("../pages/serverErrorPage"));

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/selectCar" element={<CarSelectionPage />} />
          <Route element={<Layout />}>
            <Route path="/trim" element={<TrimPage />} />
            <Route path="/detail/:tab" element={<DetailModelPage />} />
            <Route path="/color/:tab" element={<ColorPage />} />
            <Route path="/option/:tab" element={<OptionPage />} />
          </Route>
          <Route path="/bill" element={<BillPage />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/error" element={<ServerErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
}

export default Router;
