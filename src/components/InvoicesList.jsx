import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import InvoiceItem from "./InvoiceItem";
import { useStore } from "../context/context";

const url = "http://localhost:3030";

const InvoicesListWrapper = styled.ul`
  list-style: none;
  margin-top: 32px;
  button {
    width: 100px;
    height: 50px;
    color: red;
    background-color: blue;
  }
`;

function InvoicesList() {
  const [invoices, setInvoices] = useState([]);
  const [counter, setCounter] = useState();
  const { counterUpdate } = useStore();
  useEffect(() => {
    axios
      .get(`${url}/invoices/`)
      .then((response) => {
        setInvoices(response.data);
        setCounter(invoices.length);
      })
      .then(counterUpdate(counter))
      .catch((error) => console.log(error));
  }, []);

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
      {/* <button onClick={() => console.log(invoices, counter)}>test</button> */}
    </InvoicesListWrapper>
  );
}

export default InvoicesList;
