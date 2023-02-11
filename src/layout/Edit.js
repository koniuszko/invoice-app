import styled from "styled-components";

import EditForm from "../components/EditForm";

import BackButton from "../components/BackButton";

const EditWrapper = styled.div`
  width: 100%;
  margin-top: 104px;
`;

function Edit() {
  return (
    <EditWrapper>
      <BackButton />
      <EditForm />
    </EditWrapper>
  );
}

export default Edit;
