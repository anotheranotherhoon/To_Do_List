import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./recoil/darkMode";
import Router from './Router'
import { GlobalStyles } from "./styles/GlobalStyles";
import { useRecoilValue } from "recoil";

const App = () => {
  const themeState = useRecoilValue(theme)
  return (
    <ThemeProvider theme={themeState}>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App