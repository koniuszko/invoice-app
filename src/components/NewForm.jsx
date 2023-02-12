import styled from "styled-components";

import DateForm from "./forms/DateForm";
import ToForm from "./forms/ToForm";
import FromForm from "./forms/FromForm";
import ItemsList from "./forms/ItemsList";
import NewFormButtons from "./forms/NewFormButtons";

const FormWrapper = styled.div`
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
    color: ${({ theme }) => theme.colors.inputText};
    font-size: 12px;
    font-weight: normal;
    line-height: 15px;
    letter-spacing: -0.25px;
    display: flex;
    flex-direction: column;
  }

  input {
    margin: 10px 0 24px;
    padding: 0 20px;
    height: 48px;
    width: 330px;
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.inputBorder};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.itemsBox};
    color: ${({ theme }) => theme.colors.primaryText};
    font-size: 12px;
    line-height: 15px;
    font-weight: bold;
    letter-spacing: -0.25px;
  }

  input:focus {
    outline: 1px solid ${({ theme }) => theme.colors.active};
  }

  input:disabled {
    border: none;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.inputText};
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
    margin: 92px 0 0;
    box-shadow: 0 0 20px 5px rgb(0, 0, 0, 0.1);
  }
`;

function NewForm() {
  const [invoice, setInvoice] = useState();
  reutrn(
    <FormWrapper>
      <h1>New Invoice</h1>
      <form>
        <p className="purple">Bill From</p>
        <FromForm
          invoice={invoice}
          setInvoice={setInvoice}
        />
        <p className="purple">Bill To</p>
        <ToForm
          invoice={invoice}
          setInvoice={setInvoice}
        />
        <DateForm
          invoice={invoice}
          setInvoice={setInvoice}
        />
        <ItemsList
          invoice={invoice}
          setInvoice={setInvoice}
        />
        <NewFormButtons />
      </form>
      <div className="gradient"></div>
    </FormWrapper>
  );
}

export default NewForm;
