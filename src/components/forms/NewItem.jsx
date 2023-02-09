import styled from "styled-components";

import { observer } from "mobx-react-lite";

import deleteIcon from "../../assets/icon-delete.svg";
import { useStore } from "../../context/context";
import { useLayoutEffect, useState } from "react";

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
  const [item, setItem] = useState({
    id: null,
    item_name: "",
    quantity: 1,
    price: 2,
    // total: quantity * price,
  });

  // useLayoutEffect;

  const { totalPriceCounter, itemListChangeHandler } = useStore();
  // totalPriceCounter();
  return (
    <NewItemWrapper>
      <label className="name">
        Item Name
        <input
          id="item_name"
          type="text"
          value={name}
          // onChange={(e) => setItem({ ...item, item_name: e.target.value })}
        />
      </label>
      <label className="qty">
        Qty.
        <input
          className="smaller"
          id="quantity"
          type="number"
          value={qty}
          // onChange={(e) =>
          //   setItem({
          //     ...item,
          //     quantity: e.target.value,
          //   })
          // }
        />
      </label>
      <label className="price">
        Price
        <input
          className="small"
          id="price"
          type="number"
          value={price}
          // onChange={(e) => setItem({ ...item, price: e.target.value })}
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
      <button
        className="new-item-delete"
        onClick={(e) => {
          e.preventDefault();
          console.log(item);
        }}
      >
        <img
          src={deleteIcon}
          alt="delete-icon"
        />
      </button>
    </NewItemWrapper>
  );
});

export default NewItem;
