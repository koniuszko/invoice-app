import styled from "styled-components";

import axios from "axios";

import { useState, useEffect } from "react";

import Header from "../components/Header";
import Empty from "../components/Empty";
import InvoicesList from "../components/InvoicesList";
import Loader from "../components/Loader";

// const url = "http://localhost:3030";
const url = "https://invoice-backend.azurewebsites.net";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/invoices/`)
      .then((response) => {
        setInvoices(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => setCounter(invoices.length));

  return isLoading ? (
    <Loader />
  ) : (
    <MainWrapper>
      <Header counter={counter} />
      {true ? (
        <InvoicesList
          invoices={invoices}
          setCounter={setCounter}
        />
      ) : (
        <Empty />
      )}
    </MainWrapper>
  );
}

export default Main;
