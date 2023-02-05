import styled from "styled-components";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { observer } from "mobx-react-lite";

import arrowDown from "../../assets/icon-arrow-down.svg";
import calendar from "../../assets/icon-calendar.svg";
import { useStore } from "../../context/context";

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
  /* .custom-select {
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
    position: relative;
  } */

  width: 330px;
`;

const DateForm = observer(function DateForm() {
  const { newInvoice, dateSetHandler, formChangeHandler } = useStore();
  return (
    <DateFormWrapper>
      <label>Invoice Date</label>
      <DatePicker
        dateFormat={"dd MMM yyyy"}
        selected={newInvoice.invoice_date}
        onChange={(date) => dateSetHandler(date)}
        shouldCloseOnSelect={true}
        closeOnScroll={true}
        showIcon
      />
      <label>
        Payment Terms
        <select
          name="terms"
          id="terms"
        >
          <option value="1">Net 1 Day</option>
          <option value="7">Net 7 Day</option>
          <option value="14">Net 14 Day</option>
          <option value="30">Net 30 Day</option>
        </select>
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
