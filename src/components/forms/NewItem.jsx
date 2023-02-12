import styled from "styled-components";

import deleteIcon from "../../assets/icon-delete.svg";
import { useState, useEffect } from "react";

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

function NewItem({
  _id,
  name,
  quantity,
  price,
  total,
  tempItemList,
  setTempItemList,
  deleteItem,
}) {
  const [tempItem, setTempItem] = useState({
    _id: _id,
    item_name: name,
    quantity: quantity,
    price: price,
    total: total,
  });

  const totalCounter = () => {
    let summary = tempItem.price * tempItem.quantity;
    summary.toFixed(2);
    setTempItem({ ...tempItem, total: summary });
  };

  useEffect(() => {
    totalCounter();
  }, [tempItem.price, tempItem.quantity]);

  useEffect(() => {
    const updatedTempItemList = tempItemList;
    let index = updatedTempItemList.findIndex(
      (item) => item._id === tempItem._id
    );
    updatedTempItemList[index] = tempItem;
    setTempItemList(updatedTempItemList);
  }, [tempItem]);

  return (
    <NewItemWrapper>
      <label className="name">
        Item Name
        <input
          id="item_name"
          type="text"
          value={tempItem.item_name}
          onChange={(e) =>
            setTempItem({ ...tempItem, item_name: e.target.value })
          }
        />
      </label>
      <label className="qty">
        Qty.
        <input
          className="smaller"
          id="quantity"
          type="number"
          value={tempItem.quantity}
          onChange={(e) => {
            setTempItem({
              ...tempItem,
              quantity: parseFloat(e.target.value),
            });
          }}
        />
      </label>
      <label className="price">
        Price
        <input
          className="small"
          id="price"
          type="number"
          value={tempItem.price}
          onChange={(e) => {
            setTempItem({
              ...tempItem,
              price: parseFloat(e.target.value),
            });
          }}
        />
      </label>
      <label className="total">
        Total
        <input
          id="total"
          className="small"
          type="number"
          value={tempItem.total.toFixed(2)}
          disabled
        />
      </label>
      <button
        className="new-item-delete"
        onClick={(e) => {
          e.preventDefault();
          deleteItem(tempItem._id);
        }}
      >
        <img
          src={deleteIcon}
          alt="delete-icon"
        />
      </button>
    </NewItemWrapper>
  );
}

export default NewItem;
