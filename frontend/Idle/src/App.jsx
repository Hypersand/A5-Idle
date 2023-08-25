import { useReducer, useState } from "react";
import { carReducer } from "./store/reducer";
import { ThemeProvider } from "styled-components";
import { globalCar } from "./store/globalCar";
import { Reset } from "./styles/globalStyle";
import Router from "./utils/router";
import { carContext, preloadContext } from "./store/context";
import color from "./styles/theme";
import { preloadImage } from "./utils/preloader";

function App() {
  const [car, dispatch] = useReducer(carReducer, globalCar);
  const [preLoadData, setPreLoadData] = useState([]);

  function preloadImages() {
    preLoadData.forEach((ele) => {
      ele.forEach((item) => window.requestIdleCallback(() => preloadImage(item.imgUrl)));
    });
  }

  return (
    <ThemeProvider theme={color}>
      <Reset />
      <carContext.Provider value={{ car, dispatch }}>
        <preloadContext.Provider value={{ preLoadData, setPreLoadData, preloadImages }}>
          <Router />
        </preloadContext.Provider>
      </carContext.Provider>
    </ThemeProvider>
  );
}

export default App;
