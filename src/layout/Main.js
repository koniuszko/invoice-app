import styled from "styled-components";
import { useStore } from "../context/context";

import Header from "../components/Header";
import Empty from "../components/Empty";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Main() {
  const { invoicesCount } = useStore();
  return (
    <MainWrapper>
      <Header />
      {invoicesCount() > 0 ? <p>Placeholder</p> : <Empty />}
    </MainWrapper>
  );
}

export default Main;
