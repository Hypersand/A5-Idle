import { ThemeProvider } from "styled-components";
import color from "./styles/theme";
import { Reset } from "./styles/globalStyle";
import { BrowserRouter } from "react-router-dom";
import { useReducer } from "react";
import { carContext } from "./utils/context";
import { globalCar } from "./utils/globalCar";
import Router from "./utils/router";
import { carReducer } from "./utils/reducer";

function App() {
  const [car, dispatch] = useReducer(carReducer, globalCar);
  return (
    <ThemeProvider theme={color}>
      <Reset />
      <BrowserRouter>
        <carContext.Provider value={{ car, dispatch }}>
          {console.log(car)}
          <Router />
        </carContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
