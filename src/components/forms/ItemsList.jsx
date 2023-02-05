import styled from "styled-components";

const ItemsListWrapper = styled.div``;
export default function FoItemsList() {
  return (
    <ItemsListWrapper>
      <h2>Item List</h2>
      <button>+ Add New Item</button>
    </ItemsListWrapper>
  );
}
