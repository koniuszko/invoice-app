import React from "react";
import { observer } from "mobx-react-lite";

import { GlobalStyles } from "./styles/Global";
import { Menu } from "./components/Aside.styled";
import { ThemeProvider } from "styled-components";
import { useStore } from "./context/context";
import { light, dark } from "./styles/Theme.styled";

const App = observer(function App() {
  const { theme } = useStore();
  return (
    <ThemeProvider theme={theme === "dark" ? dark : light}>
      <div className="App">
        <GlobalStyles />
        <Menu />
      </div>
    </ThemeProvider>
  );
});
export default App;
