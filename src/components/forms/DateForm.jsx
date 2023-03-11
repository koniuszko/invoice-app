import styled from "styled-components";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import arrowDown from "../../assets/icon-arrow-down.svg";
import calendar from "../../assets/icon-calendar.svg";

import addDays from "date-fns/addDays";
import formatISO from "date-fns/formatISO";
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";

import {useState, useEffect} from "react";
import {parseISO} from "date-fns";

const DateFormWrapper = styled.div`
  .react-datepicker {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: ${({theme}) => theme.colors.dateBox};
    box-shadow: 0 0 10px 2px rgb(0, 0, 0, 0.1);

    &__triangle {
      display: none;
    }

    &__current-month {
      color: ${({theme}) => theme.colors.primaryText};
    }

    &__day-name {
      color: ${({theme}) => theme.colors.primaryText};
    }

    &__header {
      border: none;
      background-color: ${({theme}) => theme.colors.dateBox};
    }

    &__day {
      color: ${({theme}) => theme.colors.primaryText};

      &:hover {
        border-radius: 50%;
        color: #fff;
        background-color: ${({theme}) => theme.colors.active};
      }

      &--selected {
        background: none;
        color: ${({theme}) => theme.colors.active};
      }

      &--keyboard-selected {
        background-color: ${({theme}) => theme.colors.active};
        border-radius: 50%;
      }

      &--outside-month {
        color: ${({theme}) => theme.colors.dateNextText};
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
    z-index: 1;
    transform: translate(290px, 24px);
  }

  select {
    margin: 10px 0 24px;
    padding: 0 20px;
    height: 48px;
    border: 1px solid;
    border-color: ${({theme}) => theme.colors.inputBorder};
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.itemsBox};
    color: ${({theme}) => theme.colors.primaryText};
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
    outline: 1px solid ${({theme}) => theme.colors.active};
  }

  .terms_list {
    margin: 10px 0 24px;
    padding: 0 20px;
    height: 48px;
    width: 330px;
    border: 1px solid;
    border-color: ${({theme}) => theme.colors.inputBorder};
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.itemsBox};
    color: ${({theme}) => theme.colors.primaryText};
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
      background-color: ${({theme}) => theme.colors.dropDownBorder};
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
        background-color: ${({theme}) => theme.colors.itemsBox};
        color: ${({theme}) => theme.colors.primaryText};
        font-size: 12px;
        line-height: 15px;
        font-weight: bold;
        letter-spacing: -0.25px;
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 0 24px;

    .calendar {
      transform: translate(204px, 26px);
    }

    .react-datepicker-wrapper {
      width: 240px;

      input {
        width: 240px;
      }
    }

    .terms_list {
      width: 240px;

      &-value {
        margin-right: auto;
      }

      &-icon {
        transform: translateY(30%);
      }

      &-options {
        width: 240px;
      }
    }
  }
`;

function DateForm({invoice, setInvoice, setDateFormIsValid, isChecking}) {
    const [projectDescriptionError, setProjectDescriptionError] = useState(false);

    const [term, setTerm] = useState(
        invoice.client_name
            ? differenceInCalendarDays(
                parseISO(invoice.payment_date),
                parseISO(invoice.invoice_date)
            )
            : 1
    );
    const [termValue, setTermValue] = useState("Net " + term + " Day");
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        if (isChecking) {
            invoice.project_description === ""
                ? setProjectDescriptionError(true)
                : setProjectDescriptionError(false);
        }
    }, [invoice, isChecking]);

    useEffect(() => {
        if (!projectDescriptionError) {
            setDateFormIsValid(true);
        } else {
            setDateFormIsValid(false);
        }
    }, [projectDescriptionError]);

    const paymentDateHandler = (days) => {
        setTerm(days);
        setTermValue(`Net ${days} Day${days === 1 ? "" : "s"}`);
    };

    useEffect(() => {
        setInvoice({
            ...invoice,
            payment_date: formatISO(addDays(new Date(invoice.invoice_date), term)),
        });
    }, [term]);

    return (
        <DateFormWrapper>
            <div className="flex_item">
                <label className="date_label">Invoice Date</label>
                <div className="containter">
                    <div className="calendar"></div>
                </div>
                <DatePicker
                    dateFormat={"dd MMM yyyy"}
                    selected={Date.parse(invoice.invoice_date)}
                    onChange={(date) =>
                        setInvoice({...invoice, invoice_date: formatISO(date)})
                    }
                />
            </div>
            <div className="flex_item"><label>
                Payment Terms
                <div className="terms_list">
                    <span className="terms_list-value">{termValue}</span>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setMenuActive(!menuActive);
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
                                    paymentDateHandler(1);
                                }}
                                className="item"
                            >
                                Net 1 Day
                            </li>
                            <li
                                onClick={() => {
                                    paymentDateHandler(7);
                                }}
                                className="item"
                            >
                                Net 7 Days
                            </li>
                            <li
                                onClick={() => {
                                    paymentDateHandler(14);
                                }}
                                className="item"
                            >
                                Net 14 Days
                            </li>
                            <li
                                onClick={() => {
                                    paymentDateHandler(30);
                                }}
                                className="item"
                            >
                                Net 30 Days
                            </li>
                        </ul>
                    ) : null}
                </div>
            </label></div>
            <div className="flex_item"><label>
                <p
                    className={
                        projectDescriptionError ? "label-name--error" : "label-name"
                    }
                >
                    Project Description
                    {projectDescriptionError ? (
                        <span className="error-message">can't be empty</span>
                    ) : null}
                </p>

                <input
                    className={projectDescriptionError ? "error" : ""}
                    id="project_description"
                    type="text"
                    value={invoice.project_description}
                    onChange={(e) =>
                        setInvoice({...invoice, project_description: e.target.value})
                    }
                />
            </label></div>

        </DateFormWrapper>
    );
}

export default DateForm;
