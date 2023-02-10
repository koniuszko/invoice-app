import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { observer } from "mobx-react-lite";
import { useStore } from "../context/context";

import InvoiceItem from "./InvoiceItem";

const url = "http://localhost:3030";

const InvoicesListWrapper = styled.ul`
  list-style: none;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  button {
    width: 100px;
    height: 50px;
    color: red;
    background-color: blue;
  }
`;

const InvoicesList = observer(function InvoicesList({ counter, setCounter }) {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/invoices/`)
      .then((response) => {
        setInvoices(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => setCounter(invoices.length));

  return (
    <InvoicesListWrapper>
      {invoices.map((item) => (
        <InvoiceItem
          key={item._id}
          id={item._id}
          client={item.client_name}
          date={item.payment_date}
          list={item.item_list}
          status={item.status}
        />
      ))}
      <button onClick={() => console.log(invoices, counter)}>test</button>
    </InvoicesListWrapper>
  );
});

export default InvoicesList;
