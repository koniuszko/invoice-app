import styled from "styled-components";

import {useState, useEffect} from "react";

import axios from "axios";

import DateForm from "./forms/DateForm";
import ToForm from "./forms/ToForm";
import FromForm from "./forms/FromForm";
import ItemsList from "./forms/ItemsList";
import NewFormButtons from "./forms/NewFormButtons";
import Loader from "./Loader";

import addDays from "date-fns/addDays";
import Errors from "./forms/Errors";
import {useStore} from "../context/context";

const FormWrapper = styled.div`
  width: 330px;
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
    color: ${({theme}) => theme.colors.inputText};
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
        color: ${({theme}) => theme.colors.errorRed};
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
    border: 1px solid ${({theme}) => theme.colors.inputBorder};
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.itemsBox};
    color: ${({theme}) => theme.colors.primaryText};
    font-size: 12px;
    line-height: 15px;
    font-weight: bold;
    letter-spacing: -0.25px;
  }

  input:focus {
    outline: 1px solid ${({theme}) => theme.colors.active};
  }

  input.error {
    outline: 1px solid ${({theme}) => theme.colors.errorRed};
  }

  input:disabled {
    border: none;
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.inputText};
    border-radius: initial;
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
    margin: 20px 0 0;
    box-shadow: 0 0 20px 5px rgb(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    width: 636px;
    background-color: ${({theme}) => theme.colors.formBackground};
    padding: 56px 56px 0 76px;
    margin-top: 0;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;


    .purple {
      margin: 48px 0;
    }

    label {
      color: ${({theme}) => theme.colors.inputText};
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
          color: ${({theme}) => theme.colors.errorRed};
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
      width: 504px;
      border: 1px solid ${({theme}) => theme.colors.inputBorder};
      border-radius: 4px;
      background-color: ${({theme}) => theme.colors.itemsBox};
      color: ${({theme}) => theme.colors.primaryText};
      font-size: 12px;
      line-height: 15px;
      font-weight: bold;
      letter-spacing: -0.25px;
    }

    input:focus {
      outline: 1px solid ${({theme}) => theme.colors.active};
    }

    input.error {
      outline: 1px solid ${({theme}) => theme.colors.errorRed};
    }


    .half, .third {
      width: 152px;
    }

    .gradient {
      height: 10px;
      margin: 0;

    }
  }
`;

function NewForm() {
    const [isNewFormValid, setIsNewFormValid] = useState(true);
    const [isChecking, setIsChecking] = useState(false);

    const [fromFormIsValid, setFromFormIsValid] = useState(true);
    const [toFormIsValid, setToFormIsValid] = useState(false);
    const [dateFormIsValid, setDateFormIsValid] = useState(false);
    const [itemListIsValid, setItemListIsValid] = useState(false);

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
    const [address, setAddress] = useState();

    const {url} = useStore();

    useEffect(() => {
        if (isChecking) {
            if (fromFormIsValid && toFormIsValid && dateFormIsValid) {
                setFieldsValid(true);
            } else {
                setFieldsValid(false);
            }
        }
    }, [fromFormIsValid, toFormIsValid, dateFormIsValid]);

    useEffect(() => {
        if (isChecking) {
            if (itemListIsValid) {
                setItemsValid(true);
            } else {
                setItemsValid(false);
            }
        }
    }, [itemListIsValid]);

    useEffect(() => {
        if (fromFormIsValid && toFormIsValid && dateFormIsValid && itemListIsValid) {
            setIsNewFormValid(true);
        } else {
            setIsNewFormValid(false);
        }
    }, [fromFormIsValid, toFormIsValid, dateFormIsValid, itemListIsValid]);

    useEffect(() => {
        axios
            .get(`${url}/address/`)
            .then((response) => {
                setAddress({
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
        setIsChecking(true);
        console.log('sprawdzam')
        setTimeout(() => {
            if (isNewFormValid) {
                console.log('idzie')
                axios
                    .post(`${url}/invoices/add/pending`, {...invoice, ...address})
                    .then((response) => {
                        console.log(response.data);
                        window.location = '/';
                    })
                    .catch((error) => console.log(error));
            }
        }, 500)


    }


    const saveAsDraft = () => {
        axios
            .post(`${url}/invoices/add/draft`, {...invoice, ...address})
            .then((response) => {
                console.log(response.data);
                window.location = "/"
            })
            .catch((error) => console.log(error));
    };

    return isLoading ? (
        <Loader/>
    ) : (
        <FormWrapper>
            <h1>New Invoice</h1>
            <form>
                <p className="purple">Bill From</p>
                <FromForm
                    invoice={address}
                    setInvoice={setAddress}
                    setFromFormIsValid={setFromFormIsValid}
                />
                <p className="purple">Bill To</p>
                <ToForm
                    invoice={invoice}
                    setInvoice={setInvoice}
                    setToFormIsValid={setToFormIsValid}
                    isChecking={isChecking}
                />
                <DateForm
                    invoice={invoice}
                    setInvoice={setInvoice}
                    setDateFormIsValid={setDateFormIsValid}
                    isChecking={isChecking}
                />
                <ItemsList
                    invoice={invoice}
                    setInvoice={setInvoice}
                    setItemListIsValid={setItemListIsValid}
                    isChecking={isChecking}
                />
                <Errors
                    fieldsValid={fieldsValid}
                    itemsValid={itemsValid}
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
