import styled from "styled-components";
import { useStore } from "../../context/context";
import NewItem from "./NewItem";

const ItemsListWrapper = styled.div`
  .item-list_title {
    margin: 66px 0 24px;
    font-size: 18px;
    font-weight: bold;
    line-height: 32px;
    letter-spacing: -0.38px;
    color: ${({ theme }) => theme.colors.inputText};
  }

  .item-list_button {
    width: 100%;
    height: 48px;
    border-radius: 24px;
    background-color: ${({ theme }) => theme.colors.itemListBtn};
    color: ${({ theme }) => theme.colors.inputText};
  }
`;
export default function ItemsList() {
  const { newInvoice } = useStore();

  return (
    <ItemsListWrapper>
      <h2 className="item-list_title">Item List</h2>
      <div className="item-list_container">
        {newInvoice.item_list.map((item) => (
          <NewItem
            key={item.item_name}
            name={item.item_name}
            qty={item.quantity}
            price={item.price}
            total={item.total}
          />
        ))}
      </div>
      <button className="item-list_button">+ Add New Item</button>
    </ItemsListWrapper>
  );
}
