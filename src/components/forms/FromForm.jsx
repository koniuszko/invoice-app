import styled from "styled-components";
import { useStore } from "../../context/context";

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
export default function FromForm() {
  const { adress } = useStore();
  return (
    <FromFormWrapper>
      <label className="street">
        Street Adress
        <input
          type="text"
          value={adress.street}
          disabled
        />
      </label>
      <label className="city">
        City
        <input
          className="half"
          type="text"
          value={adress.city}
          disabled
        />
      </label>
      <label className="postcode">
        Post Code
        <input
          className="half"
          type="text"
          value={adress.postcode}
          disabled
        />
      </label>
      <label className="country">
        Country
        <input
          type="text"
          value={adress.country}
          disabled
        />
      </label>
    </FromFormWrapper>
  );
}
