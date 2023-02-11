import styled from "styled-components";

import BackButton from "../components/BackButton";
import NewForm from "../components/NewForm";

const AddWrapper = styled.div`
  width: 100%;
  margin-top: 104px;
`;

function Add() {
  return (
    <AddWrapper>
      <BackButton />
      <NewForm />
    </AddWrapper>
  );
}

export default Add;
