import { nanoid } from "nanoid";
import styled from "styled-components";
import { useState, useEffect } from "react";

import NewItem from "./NewItem";

const ItemsListWrapper = styled.div`
  .item-list_title {
    margin: 24px 0;
    font-size: 18px;
    font-weight: bold;
    line-height: 32px;
    letter-spacing: -0.38px;
    color: ${({ theme }) => theme.colors.inputText};
  }

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
`;

function ItemsList({ invoice, setInvoice }) {
  const [tempItemList, setTempItemList] = useState(invoice.item_list);

  const addNewItem = () => {
    setTempItemList([
      ...tempItemList,
      { _id: nanoid(), item_name: "", quantity: 0, price: 0, total: 0 },
    ]);
  };

  const deleteItem = (id) => {
    const updatedTempItemList = tempItemList.filter((item) => item._id !== id);
    setTempItemList(updatedTempItemList);
  };

  useEffect(() => {
    setInvoice({ ...invoice, item_list: tempItemList });
  }, [tempItemList]);

  return (
    <ItemsListWrapper>
      <h2 className="item-list_title">Item List</h2>
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
