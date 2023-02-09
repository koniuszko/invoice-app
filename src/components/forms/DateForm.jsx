import styled from "styled-components";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { observer } from "mobx-react-lite";

import arrowDown from "../../assets/icon-arrow-down.svg";
import calendar from "../../assets/icon-calendar.svg";
import { useStore } from "../../context/context";
import { useState } from "react";

const DateFormWrapper = styled.div`
  .react-datepicker {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.dateBox};
    box-shadow: 0 0 10px 2px rgb(0, 0, 0, 0.1);

    &__triangle {
      display: none;
    }

    &__current-month {
      color: ${({ theme }) => theme.colors.primaryText};
    }

    &__day-name {
      color: ${({ theme }) => theme.colors.primaryText};
    }

    &__header {
      border: none;
      background-color: ${({ theme }) => theme.colors.dateBox};
    }

    &__day {
      color: ${({ theme }) => theme.colors.primaryText};

      &:hover {
        border-radius: 50%;
        color: #fff;
        background-color: ${({ theme }) => theme.colors.active};
      }

      &--selected {
        background: none;
        color: ${({ theme }) => theme.colors.active};
      }

      &--keyboard-selected {
        background-color: ${({ theme }) => theme.colors.active};
        border-radius: 50%;
      }

      &--outside-month {
        color: ${({ theme }) => theme.colors.dateNextText};
      }
    }
  }
  .container {
    position: relative;
    width: 330px;
  }
  .calendar {
    width: 20px;
    height: 20px;
    background-image: url(${calendar});
    background-repeat: no-repeat;
    position: absolute;
    z-index: 20;
    transform: translate(290px, 24px);
  }

  select {
    margin: 10px 0 24px;
    padding: 0 20px;
    height: 48px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.inputBorder};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.itemsBox};
    color: ${({ theme }) => theme.colors.primaryText};
    font-size: 12px;
    line-height: 15px;
    font-weight: bold;
    letter-spacing: -0.25px;
    appearance: none;
    background-image: url(${arrowDown});
    background-position: calc(100% - 20px) center;
    background-size: 20px 10px;
    background-repeat: no-repeat;
  }
  select:focus {
    outline: 1px solid ${({ theme }) => theme.colors.active};
  }

  .terms_list {
    margin: 10px 0 24px;
    padding: 0 20px;
    height: 48px;
    width: 330px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.inputBorder};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.itemsBox};
    color: ${({ theme }) => theme.colors.primaryText};
    font-size: 12px;
    line-height: 15px;
    font-weight: bold;
    letter-spacing: -0.25px;
    position: relative;
    display: flex;
    align-items: center;

    &-value {
      margin-right: auto;
    }
    &-icon {
      transform: translateY(20%);
      display: block;
      width: 20px;
      height: 20px;
      background-image: url(${arrowDown});
      background-size: 20px 10px;
      background-repeat: no-repeat;
    }

    &-options {
      background-color: ${({ theme }) => theme.colors.dropDownBorder};
      box-shadow: 0 0 10px 2px rgb(0, 0, 0, 0.1);
      list-style: none;
      border-radius: 4px;
      overflow: hidden;
      position: absolute;
      top: calc(100% + 5px);
      left: 0;

      .item {
        margin: 0 0 1px;
        padding: 15px 25px;
        text-align: left;
        height: 48px;
        width: 330px;
        background-color: ${({ theme }) => theme.colors.itemsBox};
        color: ${({ theme }) => theme.colors.primaryText};
        font-size: 12px;
        line-height: 15px;
        font-weight: bold;
        letter-spacing: -0.25px;
      }
    }
  }
`;

const DateForm = observer(function DateForm() {
  const { newInvoice, dateSetHandler, formChangeHandler } = useStore();

  const [termValue, setTermValue] = useState("Net 1 Day");
  const [term, setTerm] = useState(1);
  const [menuActive, setMenuActive] = useState(false);

  return (
    <DateFormWrapper>
      <label className="date_label">Invoice Date</label>
      <div className="containter">
        <div className="calendar"></div>
      </div>
      <DatePicker
        dateFormat={"dd MMM yyyy"}
        selected={newInvoice.invoice_date}
        onChange={(date) => dateSetHandler(date)}
      />

      <label>
        Payment Terms
        <div className="terms_list">
          <span className="terms_list-value">{termValue}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              setMenuActive(!menuActive);
              // something to scroll down if model is closed
            }}
            className="terms_list-icon"
          ></button>
          {menuActive ? (
            <ul
              id="options-list"
              className="terms_list-options"
            >
              <li
                onClick={() => {
                  setTermValue("Net 1 Day");
                  setTerm(1);
                }}
                className="item"
              >
                Net 1 Day
              </li>
              <li
                onClick={() => {
                  setTermValue("Net 7 Days");
                  setTerm(7);
                }}
                className="item"
              >
                Net 7 Days
              </li>
              <li
                onClick={() => {
                  setTermValue("Net 14 Days");
                  setTerm(14);
                }}
                className="item"
              >
                Net 14 Days
              </li>
              <li
                onClick={() => {
                  setTermValue("Net 30 Days");
                  setTerm(30);
                }}
                className="item"
              >
                Net 30 Days
              </li>
            </ul>
          ) : null}
        </div>
      </label>
      <label>
        Project Description
        <input
          id="project_description"
          type="text"
          value={newInvoice.project_description}
          onChange={(e) => formChangeHandler(e.target.id, e.target.value)}
        />
      </label>
    </DateFormWrapper>
  );
});

export default DateForm;
