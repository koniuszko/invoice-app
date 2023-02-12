import styled from "styled-components";

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
export default function FromForm({ invoice, setInvoice }) {
  return (
    <FromFormWrapper>
      <label className="street">
        Street Adress
        <input
          type="text"
          value={invoice.street}
          onChange={(e) => setInvoice({ ...invoice, street: e.target.value })}
        />
      </label>
      <label className="city">
        City
        <input
          className="half"
          type="text"
          value={invoice.city}
          onChange={(e) => setInvoice({ ...invoice, city: e.target.value })}
        />
      </label>
      <label className="postcode">
        Post Code
        <input
          className="half"
          type="text"
          value={invoice.postcode}
          onChange={(e) => setInvoice({ ...invoice, postcode: e.target.value })}
        />
      </label>
      <label className="country">
        Country
        <input
          type="text"
          value={invoice.country}
          onChange={(e) => setInvoice({ ...invoice, country: e.target.value })}
        />
      </label>
    </FromFormWrapper>
  );
}
