import styled from "styled-components";

import arrow from "../assets/icon-arrow-down.svg";

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
        border: solid 1px transparent;
        border-radius: 2px;
        background-color: ${({ theme }) => theme.colors.checkbox};
        display: grid;
        place-content: center;
        overflow: hidden;

        &::before {
          content: "";
          width: 100%;
          height: 100%;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          box-shadow: inset 1em 1em #7c5dfa;
        }

        &:checked::before {
          transform: scale(1);
        }

        &:hover {
          border: solid 1px #7c5dfa;
        }
      }
    }
  }
`;

function Filters() {
  return (
    <FiltersWrapper>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log("ok");
        }}
      >
        Filter
        <img
          src={arrow}
          alt="arrow-icon"
        />
      </button>
      <div className="filters">
        <label>
          <input type="checkbox" />
          Draft
        </label>
        <label>
          <input type="checkbox" />
          Pending
        </label>
        <label>
          <input type="checkbox" />
          Paid
        </label>
      </div>
    </FiltersWrapper>
  );
}

export default Filters;
