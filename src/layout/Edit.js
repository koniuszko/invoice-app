import styled from "styled-components";

import EditForm from "../components/EditForm";

import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";

const EditWrapper = styled.div`
  width: 100%;
  margin-top: 104px;
`;

function Edit() {
  const params = useParams();
  return (
    <EditWrapper>
      <BackButton path={`/invoices/preview/${params.id}`} />
      <EditForm />
    </EditWrapper>
  );
}

export default Edit;
