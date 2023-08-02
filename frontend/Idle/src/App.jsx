import { ThemeProvider } from "styled-components";
import color from "../styles/theme";
import { Reset } from "../styles/GlobalStyle";
import Title from "./components/common/title";

function App() {
  return (
    <ThemeProvider theme={color}>
      <Reset />
        <Title>aisdvhljnddsaㅏㄴㅇ루파ㅣㅓㄴ욾</Title>
    </ThemeProvider>
  )
}

export default App;