import { ThemeProvider } from "styled-components";
import color from "./styles/theme";
import { Reset } from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { carContext } from "./utils/context";
import { globalCar } from "./utils/globalCar";
import Router from "./utils/router";

function App() {
  const [car, setCar] = useState(globalCar);
  return (
    <ThemeProvider theme={color}>
      <Reset />
      <BrowserRouter>
        <carContext.Provider value={{ car, setCar }}>
          <Router />
        </carContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
