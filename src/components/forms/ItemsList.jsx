import { nanoid } from "nanoid";
import styled from "styled-components";
import { useState, useEffect } from "react";

import ObjectID from "bson-objectid";

import NewItem from "./NewItem";

const ItemsListWrapper = styled.div`
  .item-list_button {
    font-size: 12px;
    line-height: 15px;
    font-weight: bold;
    letter-spacing: 0.25px;
    width: 100%;
    height: 48px;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.itemListBtn};
    color: ${({ theme }) => theme.colors.inputText};
  }

  .item-list_title {
    margin: 24px 0;
    font-size: 18px;
    font-weight: bold;
    line-height: 32px;
    letter-spacing: -0.38px;
    color: ${({ theme }) => theme.colors.inputText};
    display: flex;
    justify-content: space-between;

    &--error {
      margin: 24px 0;
      font-size: 18px;
      font-weight: bold;
      line-height: 32px;
      letter-spacing: -0.38px;
      /* color: ${({ theme }) => theme.colors.inputText}; */
      display: flex;
      justify-content: space-between;
      align-items: center;

      color: ${({ theme }) => theme.colors.errorRed};

      .error-message {
        font-size: 10px;
        line-height: 15px;
        letter-spacing: -0.21px;
      }
    }
  }
`;

function ItemsList({ invoice, setInvoice, setItemListIsValid, isChecking }) {
  const [tempItemList, setTempItemList] = useState(invoice.item_list);
  const [itemListError, setItemListError] = useState(false);
  const [newItemError, setNewItemError] = useState(true);

  const addNewItem = () => {
    setTempItemList([
      ...tempItemList,
      {
        _id: ObjectID(),
        item_name: "",
        quantity: 0,
        price: 0,
        total: 0,
      },
    ]);
  };

  const deleteItem = (id) => {
    const updatedTempItemList = tempItemList.filter((item) => item._id !== id);
    setTempItemList(updatedTempItemList);
  };

  useEffect(() => {
    if (isChecking) {
      if (tempItemList.length < 1) {
        setItemListError(true);
      }
    }
  }, [tempItemList, isChecking]);

  useEffect(() => {
    tempItemList.forEach((item) => {
      if (item.price > 0) {
        console.log("ok");
      }
    });
  }, [isChecking]);

  useEffect(() => {
    setInvoice({ ...invoice, item_list: tempItemList });
  }, [tempItemList]);

  return (
    <ItemsListWrapper>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(tempItemList, newItemError);
        }}
      >
        TEST
      </button>
      <h2
        className={itemListError ? "item-list_title--error" : "item-list_title"}
      >
        Item List
        {itemListError ? (
          <span className="error-message">can't be empty</span>
        ) : null}
      </h2>
      <div className="item-list_container">
        {tempItemList.map((item) => (
          <NewItem
            key={nanoid()}
            _id={item._id}
            name={item.item_name}
            quantity={item.quantity}
            price={item.price}
            total={item.total}
            setTempItemList={setTempItemList}
            tempItemList={tempItemList}
            deleteItem={deleteItem}
            itemListError={itemListError}
            setNewItemError={setNewItemError}
            isChecking={isChecking}
          />
        ))}
      </div>
      <button
        className="item-list_button"
        onClick={(e) => {
          e.preventDefault();
          addNewItem();
        }}
      >
        + Add New Item
      </button>
    </ItemsListWrapper>
  );
}

export default ItemsList;
