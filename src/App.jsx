import { ThemeProvider } from "styled-components";
import Router from "./shared/Router";
import GlobalStyle from "./utils/GlobalStyle";
import theme from "./utils/theme";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
