import styled from "styled-components";
import { useState } from "react";

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
export default function FromForm({ invoice }) {
  const [street, setStreet] = useState(invoice.street);
  const [city, setCity] = useState(invoice.city);
  const [postcode, setPostcode] = useState(invoice.postcode);
  const [country, setCountry] = useState(invoice.country);

  return (
    <FromFormWrapper>
      <label className="street">
        Street Adress
        <input
          type="text"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
      </label>
      <label className="city">
        City
        <input
          className="half"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label className="postcode">
        Post Code
        <input
          className="half"
          type="text"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
      </label>
      <label className="country">
        Country
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(invoice);
        }}
      >
        TEST
      </button>
    </FromFormWrapper>
  );
}
