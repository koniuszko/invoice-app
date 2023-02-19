import styled from "styled-components";

import { useState, useEffect } from "react";

const FromFormWrapper = styled.div`
  width: 330px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: "street street" "city postcode" "country country";

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
`;
export default function FromForm({ invoice, setInvoice, setFromFormIsValid }) {
  const [streetError, setStreetError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [postcodeError, setPostcodeError] = useState(false);
  const [countryError, setCountryError] = useState(false);

  useEffect(() => {
    invoice.street === "" ? setStreetError(true) : setStreetError(false);
    invoice.city === "" ? setCityError(true) : setCityError(false);
    invoice.postcode === "" ? setPostcodeError(true) : setPostcodeError(false);
    invoice.country === "" ? setCountryError(true) : setCountryError(false);
  }, [invoice]);

  useEffect(() => {
    if (streetError || cityError || postcodeError || countryError) {
      setFromFormIsValid(false);
    } else {
      setFromFormIsValid(true);
    }
  }, [streetError, cityError, postcodeError, countryError]);

  return (
    <FromFormWrapper>
      <label className="street">
        <p className={streetError ? "label-name--error" : "label-name"}>
          Street Adress
          {streetError ? (
            <span className="error-message">can't be empty</span>
          ) : null}
        </p>

        <input
          className={streetError ? "error" : ""}
          type="text"
          value={invoice.street}
          onChange={(e) => {
            setInvoice({ ...invoice, street: e.target.value });
          }}
        />
      </label>
      <label className="city half">
        <p className={cityError ? "label-name--error" : "label-name"}>
          City
          {cityError ? (
            <span className="error-message">can't be empty</span>
          ) : null}
        </p>
        <input
          className={cityError ? "half error" : "half"}
          type="text"
          value={invoice.city}
          onChange={(e) => setInvoice({ ...invoice, city: e.target.value })}
        />
      </label>
      <label className="postcode half">
        <p className={postcodeError ? "label-name--error" : "label-name"}>
          Post Code
          {postcodeError ? (
            <span className="error-message">can't be empty</span>
          ) : null}
        </p>

        <input
          className={postcodeError ? "half error" : "half"}
          type="text"
          value={invoice.postcode}
          onChange={(e) => setInvoice({ ...invoice, postcode: e.target.value })}
        />
      </label>
      <label className="country">
        <p className={countryError ? "label-name--error" : "label-name"}>
          Country
          {countryError ? (
            <span className="error-message">can't be empty</span>
          ) : null}
        </p>
        <input
          className={countryError ? "error" : ""}
          type="text"
          value={invoice.country}
          onChange={(e) => setInvoice({ ...invoice, country: e.target.value })}
        />
      </label>
    </FromFormWrapper>
  );
}
