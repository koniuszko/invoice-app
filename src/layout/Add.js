import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../assets/icon-arrow-left.svg";
import NewForm from "../components/NewForm";

const Wrapper = styled.div`
  width: 330px;
  margin-top: 104px;

  button {
    color: ${({ theme }) => theme.colors.primaryText};
    font-size: 12px;
    line-height: 15px;
    font-weight: bold;
    letter-spacing: -0.25px;

    img {
      margin-right: 24px;
    }
  }
`;

function Add() {
  return (
    <Wrapper>
      <Link to="/">
        <button>
          <img
            src={arrow}
            alt="arrow-icon"
          />
          Go back
        </button>
      </Link>
      <NewForm />
    </Wrapper>
  );
}

export default Add;
