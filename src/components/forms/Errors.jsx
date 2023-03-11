import styled from "styled-components";

const ErrorsWrapper = styled.div`
  width: 300px;
  height: 30px;
  margin-top: 10px;
  color: ${({theme}) => theme.colors.errorRed};
  font-size: 10px;
  line-height: 15px;
  letter-spacing: 0.21px;
`;

function Errors({fieldsValid, itemsValid}) {
    return (
        <ErrorsWrapper>
            {!fieldsValid ? <p>- All fields must be added</p> : null}
            {!itemsValid ? <p>- An item must be added</p> : null}
        </ErrorsWrapper>
    );
}

export default Errors;
