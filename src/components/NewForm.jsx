import styled from "styled-components";

const FormWrapper = styled.div``;

function NewForm() {
  return (
    <FormWrapper>
      <h1>New Invoice</h1>
      <form action="submit"></form>
    </FormWrapper>
  );
}

export default NewForm;
