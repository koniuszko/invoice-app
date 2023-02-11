import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

import BackButton from "../components/BackButton";
import StatusBar from "../components/StatusBar";
import { useParams } from "react-router-dom";

const url = "http://localhost:3030";

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
  return (
    <PreviewWrapper>
      <BackButton />
      {isLoading ? <p>Loading</p> : <StatusBar status={invoice.status} />}
    </PreviewWrapper>
  );
}

export default Preview;
