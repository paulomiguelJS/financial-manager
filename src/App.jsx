import { ThemeProvider } from "styled-components";
import { Router } from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global.js";
import { defaultTheme } from "./styles/themes/default.js";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
