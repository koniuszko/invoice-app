import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import PreviewButtons from "../components/PreviewButtons";
import BackButton from "../components/BackButton";
import StatusBar from "../components/StatusBar";
import PreviewInvoice from "../components/PreviewInvoice";
import Loader from "../components/Loader";

// const url = "http://localhost:3030";
const url = "https://invoice-backend.azurewebsites.net";

const PreviewWrapper = styled.div`
  width: 100%;
  margin-top: 104px;
`;

function Preview() {
  const [isLoading, setIsLoading] = useState(true);
  const [invoice, setInvoice] = useState();

  const params = useParams();
  useEffect(() => {
    axios
      .get(`${url}/invoices/preview/${params.id}`)
      .then((response) => {
        setInvoice(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return isLoading ? (
    <Loader />
  ) : (
    <PreviewWrapper>
      <BackButton path={"/"} />
      <StatusBar status={invoice.status} />
      <PreviewInvoice invoice={invoice} />
      <PreviewButtons id={invoice._id} />
    </PreviewWrapper>
  );
}

export default Preview;
