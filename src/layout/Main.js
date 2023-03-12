import styled from "styled-components";

import axios from "axios";

import {useState, useEffect} from "react";

import Header from "../components/Header";
import Empty from "../components/Empty";
import InvoicesList from "../components/InvoicesList";
import Loader from "../components/Loader";
import Add from "./Add";
import {useStore} from "../context/context";
import {observer} from "mobx-react-lite";

const url = "http://localhost:3030";
// const url = "https://invoice-backend.azurewebsites.net";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = observer(function Main() {
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);
    const [invoices, setInvoices] = useState([]);
    // const [addModalOpen, setAddModalOpen] = useState(false)

    const {addModalOpen, setAddModalOpen} = useStore();
    
    useEffect(() => {
        axios
            .get(`${url}/invoices/`)
            .then((response) => {
                setInvoices(response.data);
                setIsLoading(false);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => setCounter(invoices.length));

    useEffect(() => {
        {
            addModalOpen
                ? (document.body.style.overflowX = " hidden")
                : (document.body.style.overflowX = " auto");
        }
    }, [addModalOpen]);

    return isLoading ? (
        <Loader/>
    ) : (
        <MainWrapper>
            <Header setAddModalOpen={setAddModalOpen} counter={counter}/>
            {invoices.length >= 1 ? (
                <InvoicesList
                    invoices={invoices}
                    setCounter={setCounter}
                />
            ) : (
                <Empty/>
            )}
            {addModalOpen ? <Add/> : null}
        </MainWrapper>
    );
})

export default Main;
