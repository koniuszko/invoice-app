import { useState } from "react";
import styled from "styled-components";

import { useStore } from "../context/context";
import { observer } from "mobx-react-lite";

import arrow from "../assets/icon-arrow-down.svg";
import check from "../assets/icon-check.svg";

const FiltersWrapper = styled.div`
  margin-right: 8px;
  position: relative;

  button {
    color: ${({ theme }) => theme.colors.primaryText};
    font-weight: bold;
    font-size: 12px;
    letter-spacing: -0.25px;

    img {
      margin-left: 12px;
      transition: 120ms ease-in-out;
    }
  }

  .filters {
    position: absolute;
    top: 36px;
    right: 0;
    transform: translateX(50%);
    width: 192px;
    height: 128px;
    border-radius: 8px;
    padding: 24px;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.checkboxBox};
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow: 0 4px 14px 4px rgb(0, 0, 0, 0.15);

    label {
      font-size: 12px;
      font-weight: bold;
      line-height: 15px;
      letter-spacing: 0.25px;
      display: flex;

      input[type="checkbox"] {
        margin-right: 12px;
        appearance: none;
        width: 16px;
        height: 16px;
        border: solid 2px transparent;
        border-radius: 2px;
        background-color: ${({ theme }) => theme.colors.checkbox};
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        &::before {
          content: "";
          width: 1em;
          height: 1em;
          border-radius: 1px;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          background: url(${check});
          background-size: contain;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-color: #7c5dfa;
        }

        &:checked {
          border-color: #7c5dfa;
        }

        &:checked::before {
          transform: scale(1);
        }

        &:hover {
          border: solid 2px #7c5dfa;
        }
      }
    }
  }
`;

const arrowRotate = {
  transform: "rotate(180deg)",
};

const Filters = observer(function Filters() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  const { filters, filtersChange } = useStore();

  return (
    <FiltersWrapper>
      <button
        onClick={(e) => {
          e.preventDefault();
          setFiltersOpen(!filtersOpen);
        }}
      >
        Filter
        <img
          src={arrow}
          alt="arrow-icon"
          style={filtersOpen ? arrowRotate : null}
        />
      </button>
      {filtersOpen ? (
        <div className="filters">
          <label>
            <input
              type="checkbox"
              checked={filters.draft}
              onChange={() => filtersChange("draft")}
            />
            Draft
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.pending}
              onChange={() => filtersChange("pending")}
            />
            Pending
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.paid}
              onChange={() => filtersChange("paid")}
            />
            Paid
          </label>
        </div>
      ) : null}
    </FiltersWrapper>
  );
});

export default Filters;
