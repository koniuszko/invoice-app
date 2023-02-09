import styled from "styled-components";
import { useStore } from "../../context/context";
import { observer } from "mobx-react-lite";
import NewItem from "./NewItem";

const ItemsListWrapper = styled.div`
  .item-list_title {
    margin: 48px 0 24px;
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
const ItemList = observer(function ItemsList() {
  const { newInvoice, addingNewItem } = useStore();

  return (
    <ItemsListWrapper>
      <h2 className="item-list_title">Item List</h2>
      <div className="item-list_container">
        {newInvoice.item_list.map((item) => (
          <NewItem
            key={item.id}
            id={item.id}
            name={item.item_name}
            qty={item.quantity}
            price={item.price}
            total={item.total}
          />
        ))}
      </div>
      <button
        className="item-list_button"
        onClick={(e) => {
          e.preventDefault();
          addingNewItem({
            id: newInvoice.item_list.length + 1,
            item_name: "",
            quantity: 0,
            price: 0,
            total: 0,
          });
          console.log(newInvoice.item_list);
        }}
      >
        + Add New Item
      </button>
    </ItemsListWrapper>
  );
});

export default ItemList;
