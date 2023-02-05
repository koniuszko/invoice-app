import styled from "styled-components";
import { useStore } from "../../context/context";

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
export default function ToForm() {
  const { newInvoice } = useStore();
  return (
    <ToFormWrapper>
      <label className="name">
        Client's Name
        <input
          type="text"
          // value={store.adress.street}
        />
      </label>
      <label className="email">
        Client's Email
        <input
          type="email"
          // value={store.adress.street}
        />
      </label>
      <label className="street">
        Street Adress
        <input
          type="text"
          // value={store.adress.street}
        />
      </label>
      <label className="city">
        City
        <input
          className="half"
          type="text"
          // value={store.adress.city}
        />
      </label>
      <label className="postcode">
        Post Code
        <input
          className="half"
          type="text"
          // value={store.adress.postcode}
        />
      </label>
      <label className="country">
        Country
        <input
          type="text"
          // value={store.adress.country}
        />
      </label>
    </ToFormWrapper>
  );
}
