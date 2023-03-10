import styled from "styled-components";

import axios from "axios";

import {useState, useEffect} from "react";

import {useParams} from "react-router-dom";

import EditFormButtons from "./forms/EditFormButtons";
import DateForm from "./forms/DateForm";
import ToForm from "./forms/ToForm";
import FromForm from "./forms/FromForm";
import ItemsList from "./forms/ItemsList";
import Loader from "./Loader";
import Errors from "./forms/Errors";
import {useStore} from "../context/context";

const EditFormWrapper = styled.div`
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
    border: 1px solid;
    border-color: ${({theme}) => theme.colors.inputBorder};
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

  input:disabled {
    border: none;
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.inputText};
  }

  input.error {
    outline: 1px solid ${({theme}) => theme.colors.errorRed};
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

  .id-purple {
    color: #888eb0;
  }

  @media (min-width: 768px) {
    width: 616px;
    background-color: ${({theme}) => theme.colors.background};
    padding: 56px 56px 0;
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
  @media (min-width: 1440px) {
    width: 636px;
    background-color: ${({theme}) => theme.colors.background};
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

function EditForm() {
    const [isLoading, setIsLoading] = useState(true);
    const [invoice, setInvoice] = useState();

    const [isEditFormValid, setIsEditFormValid] = useState(false);
    const [isChecking, setIsChecking] = useState(false);

    const [fromFormIsValid, setFromFormIsValid] = useState(false);
    const [toFormIsValid, setToFormIsValid] = useState(false);
    const [dateFormIsValid, setDateFormIsValid] = useState(false);
    const [itemListIsValid, setItemListIsValid] = useState(false);

    const [fieldsValid, setFieldsValid] = useState(true);
    const [itemsValid, setItemsValid] = useState(true);

    const params = useParams();

    const {setEditModalOpen, url} = useStore();

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
            setIsEditFormValid(true);
        } else {
            setIsEditFormValid(false);
        }
    }, [invoice]);

    useEffect(() => {
        axios
            .get(`${url}/invoices/preview/${params.id}`)
            .then((response) => {
                setInvoice(response.data);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    const saveChanges = () => {
        setIsChecking(true);
        setTimeout(() => {
            if (isEditFormValid) {
                axios
                    .put(`${url}/invoices/edit/${params.id}`, invoice)
                    .then((response) => {
                        console.log(response.data);
                        window.location = `/invoices/preview/${params.id}`;
                    })
                    .catch((error) => console.log(error));
            }
        }, 500)
    };

    return isLoading ? (
        <Loader/>
    ) : (
        <EditFormWrapper>
            <h1>
                Edit <span className="id-purple">#</span>
                {invoice._id.slice(-6)}
            </h1>
            <form>
                <p className="purple">Bill From</p>
                <FromForm
                    invoice={invoice}
                    setInvoice={setInvoice}
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
                <EditFormButtons saveChanges={saveChanges}/>
                <div className="gradient"></div>
            </form>

        </EditFormWrapper>
    );
}

export default EditForm;
