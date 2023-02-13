import styled from "styled-components";

import { useState, useEffect } from "react";

import axios from "axios";

import DateForm from "./forms/DateForm";
import ToForm from "./forms/ToForm";
import FromForm from "./forms/FromForm";
import ItemsList from "./forms/ItemsList";
import NewFormButtons from "./forms/NewFormButtons";
import Loader from "./Loader";

const url = "http://localhost:3030";
// const url = "https://invoice-backend.azurewebsites.net";

const FormWrapper = styled.div`
  margin-top: 24px;

  h1 {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.5px;
    font-weight: bold;
  }

  .purple {
    margin: 24px 0;
    color: #7c5dfa;
    font-size: 12px;
    font-weight: bold;
    line-height: 15px;
    letter-spacing: -0.25px;
  }

  label {
    color: ${({ theme }) => theme.colors.inputText};
    font-size: 12px;
    font-weight: normal;
    line-height: 15px;
    letter-spacing: -0.25px;
    display: flex;
    flex-direction: column;
  }

  input {
    margin: 10px 0 24px;
    padding: 0 20px;
    height: 48px;
    width: 330px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.inputBorder};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.itemsBox};
    color: ${({ theme }) => theme.colors.primaryText};
    font-size: 12px;
    line-height: 15px;
    font-weight: bold;
    letter-spacing: -0.25px;
  }

  input:focus {
    outline: 1px solid ${({ theme }) => theme.colors.active};
  }

  input:disabled {
    border: none;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.inputText};
  }

  .half {
    width: 152px;
  }

  .gradient {
    width: 100%;
    position: relative;
    z-index: -1;
    bottom: 0;
    height: 64px;
    margin: 92px 0 0;
    box-shadow: 0 0 20px 5px rgb(0, 0, 0, 0.1);
  }
`;

function NewForm() {
  const [isLoading, setIsLoading] = useState(true);
  const [invoice, setInvoice] = useState({
    client_name: "",
    client_email: "",
    client_street: "",
    client_city: "",
    client_postcode: "",
    client_country: "",
    invoice_date: new Date(),
    payment_date: new Date(),
    project_description: "",
    item_list: [],
  });
  const [adress, setAdress] = useState();

  useEffect(() => {
    axios
      .get(`${url}/adress/`)
      .then((response) => {
        setAdress(response.data[0]);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const saveInvoice = (status) => {
    axios
      .post(`${url}/invoices/add/${status}`, invoice)
      .then((response) => {
        console.log(response.data);
        // window.location = `/invoices/preview/${params.id}`;
      })
      .catch((error) => console.log(error));

    console.log("saved");
  };

  const saveAsDraft = () => {
    setInvoice({
      ...invoice,
      status: "draft",
      street: adress.street,
      city: adress.city,
      country: adress.country,
      postcode: adress.postcode,
    });
    console.log(invoice);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <FormWrapper>
      <h1>New Invoice</h1>
      <form>
        <p className="purple">Bill From</p>
        <FromForm
          invoice={adress}
          setInvoice={setAdress}
        />
        <p className="purple">Bill To</p>
        <ToForm
          invoice={invoice}
          setInvoice={setInvoice}
        />
        <DateForm
          invoice={invoice}
          setInvoice={setInvoice}
        />
        <ItemsList
          invoice={invoice}
          setInvoice={setInvoice}
        />
        <NewFormButtons
          saveInvoice={saveInvoice}
          saveAsDraft={saveAsDraft}
        />
      </form>
      <div className="gradient"></div>
    </FormWrapper>
  );
}

export default NewForm;
