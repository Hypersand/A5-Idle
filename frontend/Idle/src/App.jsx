import { ThemeProvider } from "styled-components";
import color from "./styles/theme";
import { Reset } from "styles/globalStyle";
import { useReducer, useState } from "react";
import { carContext, preloadContext } from "utils/context";
import { globalCar } from "utils/globalCar";
import Router from "utils/router";
import { carReducer } from "utils/reducer";

function App() {
  const [car, dispatch] = useReducer(carReducer, globalCar);
  const [preLoadData, setPreLoadData] = useState([])
  const [loaderIdx, setLoaderIdx] = useState(0)
  return (
    <ThemeProvider theme={color}>
      <Reset />
      <carContext.Provider value={{ car, dispatch }}>
        <preloadContext.Provider value={{ preLoadData, setPreLoadData, loaderIdx, setLoaderIdx }}>
          <Router />
        </preloadContext.Provider>
      </carContext.Provider>
    </ThemeProvider>
  );
}

export default App;
