import React from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styled from "styled-components";

import { GlobalStyles } from "./styles/Global";
import { Menu } from "./components/Menu";
import { ThemeProvider } from "styled-components";
import { useStore } from "./context/context";
import { light, dark } from "./styles/Theme";
import Header from "./components/Header";
import Main from "./layout/Main";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = observer(function App() {
  const { theme } = useStore();
  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <Wrapper className="App">
        <GlobalStyles />
        <Menu />
        <Header />
        <Router>
          <Routes>
            <Route
              path={"/"}
              element={<Main />}
            />
          </Routes>
        </Router>
      </Wrapper>
    </ThemeProvider>
  );
});
export default App;
