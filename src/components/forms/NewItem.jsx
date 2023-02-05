import styled from "styled-components";

import { observer } from "mobx-react-lite";

import deleteIcon from "../../assets/icon-delete.svg";
import { useStore } from "../../context/context";

const NewItemWrapper = styled.div`
  width: 330px;
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "name name name name" "qty price total button";
  gap: 0 16px;

  .smaller {
    width: 64px;
  }
  .small {
    width: 100px;
  }
  .name {
    grid-area: name;
  }
`;

const NewItem = observer(function NewItem({ name, qty, price, total }) {
  const { totalPriceCounter } = useStore();
  totalPriceCounter();
  return (
    <NewItemWrapper>
      <label className="name">
        Item Name
        <input
          id="client_name"
          type="text"
          value={name}
        />
      </label>
      <label className="qty">
        Qty.
        <input
          className="smaller"
          id="qty"
          type="number"
          value={qty}
        />
      </label>
      <label className="price">
        Price
        <input
          className="small"
          id="price"
          type="number"
          value={price}
        />
      </label>
      <label className="total">
        Total
        <input
          id="total"
          className="small"
          type="number"
          value={total}
          disabled
        />
      </label>
      <button className="new-item-delete">
        <img
          src={deleteIcon}
          alt="delete-icon"
        />
      </button>
    </NewItemWrapper>
  );
});

export default NewItem;
