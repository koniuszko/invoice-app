import { Link } from "react-router-dom";
import styled from "styled-components";
import arrow from "../assets/icon-arrow-left.svg";
import NewForm from "../components/NewForm";

const AddWrapper = styled.div`
  width: 100%;
  margin-top: 104px;

  .back_btn {
    margin-left: 24px;
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

function Add() {
  return (
    <AddWrapper>
      <Link to="/">
        <button className="back_btn">
          <img
            src={arrow}
            alt="arrow-icon"
          />
          Go back
        </button>
      </Link>
      <NewForm />
    </AddWrapper>
  );
}

export default Add;
