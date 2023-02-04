import styled from "styled-components";

import Empty from "../components/Empty";

const MainWrapper = styled.div`
  width: 220px;
  height: 280px;
`;

function Main() {
  return (
    <MainWrapper>
      <Empty />
    </MainWrapper>
  );
}

export default Main;
