import styled from "styled-components";

import empty from "../assets/illustration-empty.svg";
import {useWindowWidth} from "@react-hook/window-size";

const EmptyWrapper = styled.div`
  width: 220px;
  position: absolute;
  top: 35%;
  text-align: center;

  img {
    margin-left: -10px;
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
    color: ${({theme}) => theme.colors.secondaryText};
    padding: 0 24px;
    font-size: 12px;
    line-height: 15px;
    font-weight: normal;
    letter-spacing: -0.25px;

    span {
      font-weight: bold;
    }
  }

  @media (min-width: 768px) {
    width: 242px;

    img {
      margin-left: 0;
      margin-bottom: 64px;
    }

    p {
      padding: 0 8px;
      letter-spacing: 0.25px;
    }
  }
`;

function Empty() {
    const width = useWindowWidth();
    return (
        <EmptyWrapper>
            <img
                src={empty}
                alt="illustration-empty"
            />
            <h1>There is nothing here</h1>
            <p>
                Create an invoice by clicking the <span className="bold">{width >= 768 ? "New Invoice " : "New "}</span>
                button and fet started.
            </p>
        </EmptyWrapper>
    );
}

export default Empty;
