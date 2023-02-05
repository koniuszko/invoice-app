import styled from "styled-components";
import { useStore } from "../../context/context";
import { observer } from "mobx-react-lite";

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

const ToForm = observer(function ToForm() {
  const { newInvoice, formChangeHandler } = useStore();
  return (
    <ToFormWrapper>
      <label className="name">
        Client's Name
        <input
          id="client_name"
          type="text"
          value={newInvoice.client_name}
          onChange={(e) => formChangeHandler(e.target.id, e.target.value)}
        />
      </label>
      <label className="email">
        Client's Email
        <input
          id="client_email"
          type="email"
          value={newInvoice.client_email}
          onChange={(e) => formChangeHandler(e.target.id, e.target.value)}
        />
      </label>
      <label className="street">
        Street Adress
        <input
          id="client_street"
          type="text"
          value={newInvoice.client_street}
          onChange={(e) => formChangeHandler(e.target.id, e.target.value)}
        />
      </label>
      <label className="city">
        City
        <input
          id="client_city"
          className="half"
          type="text"
          value={newInvoice.client_city}
          onChange={(e) => formChangeHandler(e.target.id, e.target.value)}
        />
      </label>
      <label className="postcode">
        Post Code
        <input
          id="client_postcode"
          className="half"
          type="text"
          value={newInvoice.client_postcode}
          onChange={(e) => formChangeHandler(e.target.id, e.target.value)}
        />
      </label>
      <label className="country">
        Country
        <input
          id="client_country"
          type="text"
          value={newInvoice.client_country}
          onChange={(e) => formChangeHandler(e.target.id, e.target.value)}
        />
      </label>
    </ToFormWrapper>
  );
});

export default ToForm;
