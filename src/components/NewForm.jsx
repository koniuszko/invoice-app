import styled from "styled-components";

import { useState, useEffect } from "react";

import axios from "axios";

import DateForm from "./forms/DateForm";
import ToForm from "./forms/ToForm";
import FromForm from "./forms/FromForm";
import ItemsList from "./forms/ItemsList";
import NewFormButtons from "./forms/NewFormButtons";
import Loader from "./Loader";

import addDays from "date-fns/addDays";
import Errors from "./forms/Errors";

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

    .label-name {
      &--error {
        display: flex;
        justify-content: space-between;
        color: ${({ theme }) => theme.colors.errorRed};
      }
    }

    .error-message {
      font-size: 10px;
      line-height: 15px;
      letter-spacing: -0.21px;
    }
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

  input.error {
    outline: 1px solid ${({ theme }) => theme.colors.errorRed};
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
  const [isNewFormValid, setIsNewFormValid] = useState(false);

  const [fromFormIsValid, setFromFormIsValid] = useState(true);

  const [fieldsValid, setFieldsValid] = useState(true);
  const [itemsValid, setItemsValid] = useState(true);

  const [isLoading, setIsLoading] = useState(true);
  const [invoice, setInvoice] = useState({
    client_name: "",
    client_email: "",
    client_street: "",
    client_city: "",
    client_postcode: "",
    client_country: "",
    invoice_date: new Date(),
    payment_date: addDays(new Date(), 1),
    project_description: "",
    item_list: [],
  });
  const [adress, setAdress] = useState();

  // const formValidCheck = () => {
  //   console.log("form check");
  //   console.log("ok");
  //   if()
  // };

  useEffect(() => {
    if (!fromFormIsValid) {
      setIsNewFormValid(false);
    } else {
      setIsNewFormValid(true);
    }
  }, [fromFormIsValid]);

  useEffect(() => {
    axios
      .get(`${url}/adress/`)
      .then((response) => {
        setAdress({
          city: response.data[0].city,
          street: response.data[0].street,
          postcode: response.data[0].postcode,
          country: response.data[0].country,
        });
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const saveInvoice = () => {
    if (isFormValid) {
      axios
        .post(`${url}/invoices/add/pending`, { ...invoice, ...adress })
        .then((response) => {
          console.log(response.data);
          window.location = `/invoices/preview/${params.id}`;
        })
        .catch((error) => console.log(error));

      console.log("saved");
    }
    setFieldsValid(false);
    setItemsValid(false);
    console.log("form is not valid");
  };

  const saveAsDraft = () => {
    axios
      .post(`${url}/invoices/add/draft`, { ...invoice, ...adress })
      .then((response) => {
        console.log(response.data);
        window.location = `/invoices/preview/${params.id}`;
        console.log();
      })
      .catch((error) => console.log(error));

    console.log("saved");
  };

  return isLoading ? (
    <Loader />
  ) : (
    <FormWrapper>
      <h1>New Invoice</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          formValidCheck();
          console.log("button");
        }}
      >
        TEST
      </button>
      <form>
        <p className="purple">Bill From</p>
        <FromForm
          invoice={adress}
          setInvoice={setAdress}
          setFromFormIsValid={setFromFormIsValid}
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
      <Errors
        fieldsValid={fieldsValid}
        itemsValid={itemsValid}
      />
      <div className="gradient"></div>
    </FormWrapper>
  );
}

export default NewForm;
