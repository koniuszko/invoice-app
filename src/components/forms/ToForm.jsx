import styled from "styled-components";

import {useState, useEffect} from "react";
import {useWindowWidth} from "@react-hook/window-size";

const ToFormWrapper = styled.div`
  width: 330px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "name name" "email email" "street street" "city postcode" "country country";

  .name {
    grid-area: name;
  }

  .email {
    grid-area: email;
  }

  .street {
    grid-area: street;
  }

  .city {
    grid-area: city;
  }

  .postcode {
    grid-area: postcode;
    justify-self: end;
  }

  .country {
    grid-area: country;
  }

  @media (min-width: 768px) {
    width: 504px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: "name name name""email email email""street street street" "city postcode country";

    .postcode {
      justify-self: center;
    }

    .country {
      justify-self: flex-end;
    }
  }
`;

function ToForm({invoice, setInvoice, setToFormIsValid, isChecking}) {
    const [clientNameError, setClientNameError] = useState(false);
    const [clientEmailError, setClientEmailError] = useState(false);
    const [clientStreetError, setClientStreetError] = useState(false);
    const [clientCityError, setClientCityError] = useState(false);
    const [clientPostcodeError, setClientPostcodeError] = useState(false);
    const [clientCountryError, setClientCountryError] = useState(false);

    const width = useWindowWidth();

    useEffect(() => {
        if (isChecking) {
            invoice.client_name === ""
                ? setClientNameError(true)
                : setClientNameError(false);
            invoice.client_email === ""
                ? setClientEmailError(true)
                : setClientEmailError(false);
            invoice.client_street === ""
                ? setClientStreetError(true)
                : setClientStreetError(false);
            invoice.client_city === ""
                ? setClientCityError(true)
                : setClientCityError(false);
            invoice.client_postcode === ""
                ? setClientPostcodeError(true)
                : setClientPostcodeError(false);
            invoice.client_country === ""
                ? setClientCountryError(true)
                : setClientCountryError(false);
        }
    }, [invoice, isChecking]);

    useEffect(() => {
        if (
            !clientNameError &&
            !clientEmailError &&
            !clientStreetError &&
            !clientCityError &&
            !clientPostcodeError &&
            !clientCountryError
        ) {
            setToFormIsValid(true);
        } else {
            setToFormIsValid(false);
        }
    }, [
        clientNameError,
        clientEmailError,
        clientStreetError,
        clientCityError,
        clientPostcodeError,
        clientCountryError,
    ]);

    return (
        <ToFormWrapper>
            <label className="name">
                <p className={clientNameError ? "label-name--error" : "label-name"}>
                    Client's Name
                    {clientNameError ? (
                        <span className="error-message">can't be empty</span>
                    ) : null}
                </p>

                <input
                    className={clientNameError ? "error" : ""}
                    type="text"
                    value={invoice.client_name}
                    onChange={(e) =>
                        setInvoice({...invoice, client_name: e.target.value})
                    }
                />
            </label>
            <label className="email">
                <p className={clientEmailError ? "label-name--error" : "label-name"}>
                    Client's Email
                    {clientEmailError ? (
                        <span className="error-message">can't be empty</span>
                    ) : null}
                </p>

                <input
                    className={clientEmailError ? "error" : ""}
                    type="email"
                    value={invoice.client_email}
                    onChange={(e) =>
                        setInvoice({...invoice, client_email: e.target.value})
                    }
                />
            </label>
            <label className="street">
                <p className={clientStreetError ? "label-name--error" : "label-name"}>
                    Street Adress
                    {clientStreetError ? (
                        <span className="error-message">can't be empty</span>
                    ) : null}
                </p>

                <input
                    className={clientStreetError ? "error" : ""}
                    type="text"
                    value={invoice.client_street}
                    onChange={(e) =>
                        setInvoice({...invoice, client_street: e.target.value})
                    }
                />
            </label>
            <label className="city half">
                <p className={clientCityError ? "label-name--error" : "label-name"}>
                    City
                    {clientCityError ? (
                        <span className="error-message">can't be empty</span>
                    ) : null}
                </p>

                <input
                    className={clientCityError ? "error half" : "half"}
                    type="text"
                    value={invoice.client_city}
                    onChange={(e) =>
                        setInvoice({...invoice, client_city: e.target.value})
                    }
                />
            </label>
            <label className="postcode half">
                <p className={clientPostcodeError ? "label-name--error" : "label-name"}>
                    Post Code
                    {clientPostcodeError ? (
                        <span className="error-message">can't be empty</span>
                    ) : null}
                </p>
                <input
                    className={clientPostcodeError ? "error half" : "half"}
                    type="text"
                    value={invoice.client_postcode}
                    onChange={(e) =>
                        setInvoice({...invoice, client_postcode: e.target.value})
                    }
                />
            </label>
            <label className={width >= 768 ? "country half" : "half"}>
                <p className={clientCountryError ? "label-name--error" : "label-name"}>
                    Country
                    {clientCountryError ? (
                        <span className="error-message">can't be empty</span>
                    ) : null}
                </p>
                <input
                    className={clientCountryError ? "error third" : "third"}
                    type="text"
                    value={invoice.client_country}
                    onChange={(e) =>
                        setInvoice({...invoice, client_country: e.target.value})
                    }
                />
            </label>
        </ToFormWrapper>
    );
}

export default ToForm;
