import styled from "styled-components";
import axios from "axios";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import PreviewButtons from "../components/PreviewButtons";
import BackButton from "../components/BackButton";
import StatusBar from "../components/StatusBar";
import PreviewInvoice from "../components/PreviewInvoice";
import Loader from "../components/Loader";
import DeleteModal from "../components/DeleteModal";
import {useWindowWidth} from "@react-hook/window-size";

const url = "http://localhost:3030";
// const url = "https://invoice-backend.azurewebsites.net";

const PreviewWrapper = styled.div`
  width: 330px;
  margin-top: 104px;
  @media (min-width: 768px) {
    width: 688px;
    margin-top: 128px;
  }
`;

function Preview() {
    const [isLoading, setIsLoading] = useState(true);
    const [invoice, setInvoice] = useState();

    const [modalOpen, setModalOpen] = useState(false);

    const params = useParams();
    const width = useWindowWidth();
    useEffect(() => {
        axios
            .get(`${url}/invoices/preview/${params.id}`)
            .then((response) => {
                setInvoice(response.data);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        {
            modalOpen
                ? (document.body.style.height = "100vh")
                : (document.body.style.height = "auto");
            modalOpen
                ? (document.body.style.overflow = " hidden")
                : (document.body.style.overflow = " auto");
        }
    }, [modalOpen]);

    const markAsPaid = () => {
        axios
            .put(`${url}/invoices/paid/${params.id}`)
            .then((response) => {
                console.log(response.data);
                window.location = `/`;
            })
            .catch((error) => console.log(error));
    };

    return isLoading ? (
        <Loader/>
    ) : (
        <PreviewWrapper>
            <BackButton path={"/"}/>
            <StatusBar status={invoice.status}/>
            <PreviewInvoice invoice={invoice}/>
            {width >= 768 ? null : <PreviewButtons
                setModalOpen={setModalOpen}
                id={invoice._id}
                status={invoice.status}
                markAsPaid={markAsPaid}
            />}
            {modalOpen ? <DeleteModal setModalOpen={setModalOpen}/> : null}
        </PreviewWrapper>
    );
}

export default Preview;
