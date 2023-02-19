import styled from "styled-components";

import { useStore } from "../context/context";
import { observer } from "mobx-react-lite";

import InvoiceItem from "./InvoiceItem";

const InvoicesListWrapper = styled.ul`
  list-style: none;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InvoicesList = observer(function InvoicesList({ invoices }) {
  const { filters } = useStore();

  const checkedFilters = Object.entries(filters)
    .filter((filter) => filter[1])
    .map((filter) => filter[0]);
  const filteredInvoices = invoices.filter(({ status }) =>
    checkedFilters.includes(status)
  );

  const renderItems = filteredInvoices.map((item) => (
    <InvoiceItem
      key={item._id}
      id={item._id}
      client={item.client_name}
      date={item.payment_date}
      list={item.item_list}
      status={item.status}
    />
  ));

  return <InvoicesListWrapper>{renderItems}</InvoicesListWrapper>;
});

export default InvoicesList;
