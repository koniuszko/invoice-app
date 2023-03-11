import React from "react";
import {observer} from "mobx-react-lite";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import styled from "styled-components";
import {GlobalStyles} from "./styles/Global";
import {ThemeProvider} from "styled-components";
import {useStore} from "./context/context";
import {light, dark} from "./styles/Theme";

import {Menu} from "./components/Menu";

import Main from "./layout/Main";
import Add from "./layout/Add";
import Preview from "./layout/Preview";
import Edit from "./layout/Edit";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = observer(function App() {
    const {theme} = useStore();
    return (
        <ThemeProvider theme={theme === "dark" ? dark : light}>
            <Wrapper className="App">
                <GlobalStyles/>
                <Router>
                    <Menu/>
                    <Routes>
                        <Route
                            path={"/"}
                            element={<Main/>}
                            exact
                        />
                        <Route
                            path={"/invoices/add"}
                            element={<Add/>}
                        />
                        <Route
                            path={"/invoices/preview/:id"}
                            element={<Preview/>}
                            exact
                        />
                        <Route
                            path={"/invoices/edit/:id"}
                            element={<Edit/>}
                            exact
                        />
                    </Routes>
                </Router>
            </Wrapper>
        </ThemeProvider>
    );
});
export default App;
