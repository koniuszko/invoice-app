import styled from "styled-components";

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
`;

function ToForm({ invoice, setInvoice }) {
  return (
    <ToFormWrapper>
      <label className="name">
        Client's Name
        <input
          type="text"
          value={invoice.client_name}
          onChange={(e) =>
            setInvoice({ ...invoice, client_name: e.target.value })
          }
        />
      </label>
      <label className="email">
        Client's Email
        <input
          type="email"
          value={invoice.client_email}
          onChange={(e) =>
            setInvoice({ ...invoice, client_email: e.target.value })
          }
        />
      </label>
      <label className="street">
        Street Adress
        <input
          type="text"
          value={invoice.client_street}
          onChange={(e) =>
            setInvoice({ ...invoice, client_street: e.target.value })
          }
        />
      </label>
      <label className="city">
        City
        <input
          className="half"
          type="text"
          value={invoice.client_city}
          onChange={(e) =>
            setInvoice({ ...invoice, client_city: e.target.value })
          }
        />
      </label>
      <label className="postcode">
        Post Code
        <input
          className="half"
          type="text"
          value={invoice.client_postcode}
          onChange={(e) =>
            setInvoice({ ...invoice, client_postcode: e.target.value })
          }
        />
      </label>
      <label className="country">
        Country
        <input
          type="text"
          value={invoice.client_country}
          onChange={(e) =>
            setInvoice({ ...invoice, client_country: e.target.value })
          }
        />
      </label>
    </ToFormWrapper>
  );
}

export default ToForm;
