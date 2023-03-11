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
import Edit from "./Edit";
import {useStore} from "../context/context";
import {observer} from "mobx-react-lite";

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

const Preview = observer(function Preview() {
    const [isLoading, setIsLoading] = useState(true);
    const [invoice, setInvoice] = useState();

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const params = useParams();
    const width = useWindowWidth();

    const {editModalOpen} = useStore();
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
            deleteModalOpen
                ? (document.body.style.height = "100vh")
                : (document.body.style.height = "auto");
            deleteModalOpen
                ? (document.body.style.overflow = " hidden")
                : (document.body.style.overflow = " auto");
            editModalOpen
                ? (document.body.style.overflowX = " hidden")
                : (document.body.style.overflowX = " auto");
        }
    }, [deleteModalOpen, editModalOpen]);

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
            <BackButton setModalOpen={null}/>
            <StatusBar id={invoice._id} status={invoice.status} markAsPaid={markAsPaid}
                       setDeleteModalOpen={setDeleteModalOpen}/>
            <PreviewInvoice invoice={invoice}/>
            {width >= 768 ? null : <PreviewButtons
                setDeleteModalOpen={setDeleteModalOpen}
                id={invoice._id}
                status={invoice.status}
                markAsPaid={markAsPaid}
            />}
            {deleteModalOpen ? <DeleteModal setDeleteModalOpen={setDeleteModalOpen}/> : null}
            {editModalOpen ? <Edit/> : null}
        </PreviewWrapper>
    );
})

export default Preview;
