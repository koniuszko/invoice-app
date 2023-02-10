import styled from "styled-components";
import { useStore } from "../context/context";
import { useState } from "react";

import { observer } from "mobx-react-lite";

import Header from "../components/Header";
import Empty from "../components/Empty";
import InvoicesList from "../components/InvoicesList";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = observer(function Main() {
  const [counter, setCounter] = useState(2);

  return (
    <MainWrapper>
      <Header
        counter={counter}
        setCounter={setCounter}
      />
      {true ? (
        <InvoicesList
          counter={counter}
          setCounter={setCounter}
        />
      ) : (
        <Empty />
      )}
    </MainWrapper>
  );
});

export default Main;
