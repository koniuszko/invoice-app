import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../assets/icon-arrow-left.svg";

const BackButtonWrapper = styled.div`
  .back_btn {
    color: ${({ theme }) => theme.colors.primaryText};
    font-size: 12px;
    line-height: 15px;
    font-weight: bold;
    letter-spacing: -0.25px;
  }

  button {
    img {
      margin-right: 24px;
    }
  }
`;

function BackButton() {
  return (
    <BackButtonWrapper>
      <Link to="/">
        <button className="back_btn">
          <img
            src={arrow}
            alt="arrow-icon"
          />
          Go back
        </button>
      </Link>
    </BackButtonWrapper>
  );
}

export default BackButton;
