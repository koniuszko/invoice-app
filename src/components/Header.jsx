import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

import Filters from "./Filters";

import addIcon from "../assets/icon-plus.svg";

const Wrapper = styled.header`
  margin-top: 104px;
  width: 330px;
  display: flex;
  align-items: center;

  .title {
    margin-right: auto;

    h1 {
      color: ${({ theme }) => theme.colors.primaryText};
      font-size: 20px;
      line-height: 22px;
      letter-spacing: -0.63px;
    }
    p {
      color: ${({ theme }) => theme.colors.secondaryText};
      font-size: 12px;
      line-height: 15px;
      letter-spacing: -0.25px;
    }
  }

  .new_btn {
    width: 90px;
    height: 44px;
    border-radius: 22px;
    background-color: #7c5dfa;
    display: flex;
    align-items: center;
    padding: 6px;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: -0.25px;
    color: #fff;

    div {
      width: 32px;
      height: 32px;
      border-radius: 16px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 8px;

      img {
        width: 10px;
        height: 10px;
      }
    }
  }
`;

function Header({ counter }) {
  return (
    <Wrapper>
      <div className="title">
        <h1>Invoices</h1>
        <p>{counter > 0 ? `${counter} invoices` : `No invoices`}</p>
      </div>
      <Filters />
      <Link to={"/invoices/add"}>
        <button className="new_btn">
          <div>
            <img
              className="plus_icon"
              src={addIcon}
              alt="plus-icon"
            />
          </div>
          New
        </button>
      </Link>
    </Wrapper>
  );
}

export default Header;
