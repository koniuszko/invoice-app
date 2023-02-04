import styled from "styled-components";

import empty from "../assets/illustration-empty.svg";

const EmptyWrapper = styled.div`
  position: relative;
  top: 50%;
  text-align: center;

  img {
    margin-bottom: 40px;
  }

  h1 {
    font-size: 20px;
    line-height: 22px;
    font-weight: bold;
    letter-spacing: -0.63px;
    margin-bottom: 24px;
  }

  p {
    color: ${({ theme }) => theme.colors.secondaryText};
    padding: 0 24px;
    font-size: 12px;
    line-height: 15px;
    font-weight: normal;
    letter-spacing: -0.25px;

    span {
      font-weight: bold;
    }
  }
`;

function Empty() {
  return (
    <EmptyWrapper>
      <img
        src={empty}
        alt="illustration-empty"
      />
      <h1>There is nothing here</h1>
      <p>
        Create an invoice by clicking the <span className="bold">New </span>
        buttton and fet started.
      </p>
    </EmptyWrapper>
  );
}

export default Empty;
